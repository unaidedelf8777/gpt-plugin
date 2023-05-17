from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
from typing import List
import requests
from PyPDF2 import PdfReader
from io import BytesIO
import re
import json
from models.api import UpsertRequest
from models.models import Document
from services.extract_metadata import extract_metadata_from_document

app = FastAPI()

class DocumentURLs(BaseModel):
    documents: List[HttpUrl]

def remove_markdown_and_html(text):
    # Remove markdown links
    text = re.sub(r'\[.*?\]\(.*?\)', '', text)
    # Remove html tags
    text = re.sub(r'<.*?>', '', text)
    return text


async def pdf_to_text_and_upsert(url, datastore):
    response = requests.get(url)
    pdf = PdfReader(BytesIO(response.content))
    text = ''
    for page in range(len(pdf.pages)):
        text += pdf.pages[page].extract_text()
    text = remove_markdown_and_html(text)

    # Extract metadata from the text
    metadata = extract_metadata_from_document(text)

    # Create a Document object with the text and metadata
    document = Document(text=text, metadata=metadata)

    # Upsert the document to the datastore
    try:
        ids = await datastore.upsert([document])
        print('Text and metadata successfully upserted to vector db.')
    except Exception as e:
        print('Failed to upsert text and metadata to vector db:', e)
        raise


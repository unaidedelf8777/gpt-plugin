
import arxiv
import json
import time


import requests
from PyPDF2 import PdfReader
from io import BytesIO
import re
import json



def remove_markdown_and_html(text):
    # Remove markdown links
    text = re.sub(r'\[.*?\]\(.*?\)', '', text)
    # Remove html tags
    text = re.sub(r'<.*?>', '', text)
    return text

def pdf_to_text_and_upsert(url):
    response = requests.get(url)
    pdf = PdfReader(BytesIO(response.content))
    text = ''
    for page in range(len(pdf.pages)):
        text += pdf.pages[page].extract_text()
    text = remove_markdown_and_html(text)
    # Upsert to vector db
    upsert_url = 'https://unaidedelf8777-redesigned-space-sniffle-xj5795xq4xvcpq96-8000.preview.app.github.dev/upsert'
    headers = {'Content-Type': 'application/json'}
    data = {'documents': [
        {'text': text}]}
    response = requests.post(upsert_url, headers=headers, data=json.dumps(data))
    if response.status_code == 200:
        print('Text successfully upserted to vector db.')
    else:
        print('Failed to upsert text to vector db.')



base_query = "cat:cs.AI AND submittedDate:[20210101 TO 20230513]"
max_results = 100
start = 0
data_json = []

while True:
    try:
        query = f"{base_query}&start={start}&max_results={max_results}"
        search = arxiv.Search(query=query, max_results=max_results)
        

        results = list(search.results())
        if not results:
            break

        for result in results:
            form = {
                "entry": {
                    "title": result.title,
                    "published_date": result.published.isoformat(),
                    "pdf_url": result.pdf_url
                }
            }
            pdf_url = result.pdf_url
            pdf_to_text_and_upsert(str(pdf_url))
            print(form)
            data_json.append(form)

        start += max_results

    except arxiv.arxiv.UnexpectedEmptyPageError as e:
        print(f"Unexpected empty page error: {e}")
        time.sleep(10)  # Wait 60 seconds before retrying
        break

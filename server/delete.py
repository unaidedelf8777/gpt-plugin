
os.environ["DATASTORE"] = 'pinecone'
os.environ["OPENAI_API_KEY"] = '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'
os.environ["PINECONE_API_KEY"] = '79013a0b-f1cc-4e5f-aa52-24cafa01622d'
os.environ["PINECONE_ENVIRONMENT"] = 'us-central1-gcp'
os.environ["PINECONE_INDEX"] = 'pdfs'


@app.post("/upsert-pdf-url")
async def upload_from_pdf_url(document: Document1):
    for url in document.documents:
        pdf_to_text_and_upsert(url)
    return {"message": "Processing completed"}

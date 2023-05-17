from models.models import Source
from services.openai import get_chat_completion
import json
from typing import Dict
import os

def extract_metadata_from_document(text: str) -> Dict[str, str]:
    sources = Source.__members__.keys()
    sources_string = ", ".join(sources)
    # This prompt is just an example, change it to fit your use case
    messages = [
        {
            "role": "system",
            "content": f"""
            Given a document from a user, try to extract the following metadata:

            - source: string, one of the {sources_string}

            - url: string or don't specify

            - created_at: string or don't specify

            - author: string or don't specify
            
            - domains: list of strings, all domains that the text could be related to

            - text_type: string, specifies the encoding unit, such as sentence, document, paragraph, etc.

            - task_objective: string, specifies the objective of the embedding, such as document retrieval, sentence classification, etc.

            Respond with a JSON containing the extracted metadata in key value pairs. If you don't find a metadata field, don't specify it.""",
        },
        {"role": "user", "content": text},
    ]

    # NOTE: Azure Open AI requires deployment id
    # Read environment variable - if not set - not used
    completion = get_chat_completion(
        messages,
        "gpt-4",
        os.environ.get("OPENAI_METADATA_EXTRACTIONMODEL_DEPLOYMENTID")
    )  # TODO: change to your preferred model name

    print(f"completion: {completion}")

    try:
        metadata = json.loads(completion)
    except:
        metadata = {}

    return metadata

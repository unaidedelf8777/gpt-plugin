from typing import List
import openai
import os

from tenacity import retry, wait_random_exponential, stop_after_attempt

from typing import List
from InstructorEmbedding import INSTRUCTOR
import os
from extract_metadata import extract_metadata_from_document

from tenacity import retry, wait_random_exponential, stop_after_attempt


from typing import List
import os
from InstructorEmbedding import INSTRUCTOR
from extract_metadata import extract_metadata_from_document

def get_embeddings(text: str) -> List[float]:
    """
    Embed texts using Instructor Embedding model.

    Args:
        text: The text to embed.

    Returns:
        An embedding, which is a list of floats.

    Raises:
        Exception: If the InstructorEmbedding API call fails.
    """
    # Extract metadata from the text
    metadata = extract_metadata_from_document(text)

    # Prepare the instruction based on the metadata
    instruction = f"Represent the {metadata['domains'][0]} {metadata['text_type']} for {metadata['task_objective']}"

    # Prepare the text with instruction
    text_with_instruction = [instruction, text]

    # Load the InstructorEmbedding model
    model = INSTRUCTOR('hkunlp/instructor-large')

    # Call the InstructorEmbedding API to get the embedding
    embedding = model.encode([text_with_instruction])

    # Return the embedding as a list of floats
    return embedding[0].tolist()



@retry(wait=wait_random_exponential(min=1, max=20), stop=stop_after_attempt(3))
def get_chat_completion(
    messages,
    model="gpt-4",  # use "gpt-4" for better results
    deployment_id = None
):
    """
    Generate a chat completion using OpenAI's chat completion API.

    Args:
        messages: The list of messages in the chat history.
        model: The name of the model to use for the completion. Default is gpt-3.5-turbo, which is a fast, cheap and versatile model. Use gpt-4 for higher quality but slower results.

    Returns:
        A string containing the chat completion.

    Raises:
        Exception: If the OpenAI API call fails.
    """
    # call the OpenAI chat completion API with the given messages
    # Note: Azure Open AI requires deployment id
    response = {}
    if deployment_id == None:
        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
        )
    else:
        response = openai.ChatCompletion.create(
            deployment_id = deployment_id,
            messages=messages,
        )
    

    choices = response["choices"]  # type: ignore
    completion = choices[0].message.content.strip()
    print(f"Completion: {completion}")
    return completion
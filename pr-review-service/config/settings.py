import os
from dotenv import load_dotenv

load_dotenv()

AGENTOPS_API_KEY = os.getenv("AGENTOPS_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

if not AGENTOPS_API_KEY:
    raise ValueError("AGENTOPS_API_KEY environment variable is required")

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY environment variable is required")

if not GITHUB_TOKEN:
    raise ValueError("GITHUB_TOKEN environment variable is required")
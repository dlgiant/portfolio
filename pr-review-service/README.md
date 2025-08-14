# PR Review Service

An AI-powered pull request review service that uses AgentOps for monitoring and OpenAI for intelligent code analysis.

## Features

- **Automated Code Quality Analysis**: Reviews code changes and provides detailed feedback
- **Security Scanning**: Identifies potential security vulnerabilities
- **Test Coverage Analysis**: Evaluates test coverage for the changes
- **AgentOps Integration**: Full observability and monitoring of AI agents
- **GitHub Integration**: Automatically posts review comments on PRs
- **REST API**: Easy integration with CI/CD pipelines

## Setup

1. **Install Dependencies**:
   ```bash
   cd pr-review-service
   pip install -r requirements.txt
   ```

2. **Environment Configuration**:
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

3. **Required Environment Variables**:
   - `AGENTOPS_API_KEY`: Get from [AgentOps](https://www.agentops.ai/)
   - `OPENAI_API_KEY`: Get from [OpenAI](https://openai.com/)
   - `GITHUB_TOKEN`: Create a GitHub Personal Access Token

## Usage

### As a Python Module

```python
from src.main import review_pull_request

result = review_pull_request(
    repo_name="username/repository",
    pr_number=123,
    post_comment=True
)

print(f"Review completed: {result['recommendation']}")
```

### As a REST API

1. **Start the API server**:
   ```bash
   python src/api.py
   ```

2. **Review a PR**:
   ```bash
   curl -X POST "http://localhost:8000/review" \
        -H "Content-Type: application/json" \
        -d '{
          "repo_name": "username/repository",
          "pr_number": 123,
          "post_comment": true
        }'
   ```

## API Endpoints

- `POST /review`: Review a pull request
- `GET /health`: Health check

## Architecture

The service uses the following components:

- **PRReviewerAgent**: Main agent that orchestrates the review process
- **GitHub Tools**: Fetch PR information, files, and post comments
- **Analysis Tools**: Code quality, security scanning, and test coverage analysis
- **AgentOps Integration**: Monitoring and tracing of all agent operations

## AgentOps Integration

The service is fully instrumented with AgentOps decorators:

- `@agent`: Tracks the PR reviewer agent
- `@operation`: Monitors individual operations within the agent
- `@tool`: Tracks tool usage (GitHub API calls, code analysis)
- `@trace`: Traces entire workflows

All activities are automatically tracked and can be monitored in your AgentOps dashboard.
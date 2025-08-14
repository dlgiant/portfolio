from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import agentops
from src.main import review_pull_request
from config.settings import AGENTOPS_API_KEY

app = FastAPI(title="PR Review Service", version="1.0.0")

# Initialize AgentOps for the API
agentops.init(AGENTOPS_API_KEY, auto_start_session=False, tags=["pr-review-api", "fastapi"])


class PRReviewRequest(BaseModel):
    repo_name: str
    pr_number: int
    post_comment: bool = True


class PRReviewResponse(BaseModel):
    status: str
    pr_number: int
    repo_name: str
    recommendation: str
    files_analyzed: int
    security_issues_count: int
    test_coverage_assessment: str
    review_summary: Optional[str] = None


@app.post("/review", response_model=PRReviewResponse)
async def review_pr(request: PRReviewRequest):
    """Endpoint to review a pull request"""
    
    # Start AgentOps trace for this API request
    tracer = agentops.start_trace(
        trace_name=f"API_PR_Review_{request.repo_name}_{request.pr_number}",
        tags=["api-request", "pr-review"]
    )
    
    try:
        result = review_pull_request(
            repo_name=request.repo_name,
            pr_number=request.pr_number,
            post_comment=request.post_comment
        )
        
        response = PRReviewResponse(
            status="success",
            pr_number=result["pr_number"],
            repo_name=result["repo_name"],
            recommendation=result["recommendation"],
            files_analyzed=result["files_analyzed"],
            security_issues_count=len(result["security_issues"]),
            test_coverage_assessment=result["test_coverage"]["coverage_assessment"],
            review_summary=result["review_summary"] if request.post_comment else None
        )
        
        agentops.end_trace(tracer, end_state="Success")
        return response
        
    except Exception as e:
        agentops.end_trace(tracer, end_state="Fail")
        raise HTTPException(status_code=500, detail=f"Review failed: {str(e)}")


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "PR Review Service"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
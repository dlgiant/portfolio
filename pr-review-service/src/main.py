import agentops
from agentops.sdk.decorators import trace
from src.agents.pr_reviewer_agent import PRReviewerAgent
from config.settings import AGENTOPS_API_KEY, GITHUB_TOKEN


# Initialize AgentOps
agentops.init(AGENTOPS_API_KEY, tags=["pr-review", "github", "code-analysis"])


@trace(name="PRReviewWorkflow", tags=["main-workflow"])
def review_pull_request(repo_name: str, pr_number: int, post_comment: bool = True):
    """Main workflow for reviewing a pull request"""
    
    # Create PR reviewer agent
    reviewer = PRReviewerAgent(
        github_token=GITHUB_TOKEN,
        agent_id="main-pr-reviewer"
    )
    
    try:
        # Perform comprehensive PR review
        review_result = reviewer.review_pull_request(
            repo_name=repo_name,
            pr_number=pr_number,
            post_comment=post_comment
        )
        
        return review_result
        
    except Exception as e:
        print(f"Error during PR review: {str(e)}")
        raise


if __name__ == "__main__":
    # Example usage
    # Uncomment and modify the following lines to test with a real PR
    # repo_name = "username/repository"
    # pr_number = 123
    # result = review_pull_request(repo_name, pr_number, post_comment=False)
    # print(f"Review completed: {result['recommendation']}")
    
    print("PR Review Service initialized. Import this module and call review_pull_request() to use.")
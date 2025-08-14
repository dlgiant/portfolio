"""
Example usage of the PR Review Service
This file demonstrates different ways to use the service
"""

import asyncio
from src.main import review_pull_request
import agentops
from config.settings import AGENTOPS_API_KEY


def example_basic_review():
    """Basic example of reviewing a PR"""
    print("=== Basic PR Review Example ===")
    
    # Initialize AgentOps for this example
    agentops.init(AGENTOPS_API_KEY, tags=["example", "basic-review"])
    
    try:
        # Replace with actual repo and PR number
        result = review_pull_request(
            repo_name="octocat/Hello-World",  # Example repo
            pr_number=1,  # Example PR number
            post_comment=False  # Don't post comment in example
        )
        
        print(f"Review Status: {result.get('status', 'completed')}")
        print(f"Recommendation: {result['recommendation']}")
        print(f"Files Analyzed: {result['files_analyzed']}")
        print(f"Security Issues: {len(result['security_issues'])}")
        print(f"Test Coverage: {result['test_coverage']['coverage_assessment']}")
        
        if result['security_issues']:
            print("\nSecurity Issues Found:")
            for issue in result['security_issues']:
                print(f"  - {issue['type']}: {issue['pattern']} (severity: {issue['severity']})")
        
        print("\nReview Summary Preview:")
        print(result['review_summary'][:200] + "..." if len(result['review_summary']) > 200 else result['review_summary'])
        
    except Exception as e:
        print(f"Error during review: {e}")


def example_with_custom_trace():
    """Example showing manual trace management"""
    print("\n=== Custom Trace Example ===")
    
    # Initialize AgentOps without auto-start
    agentops.init(AGENTOPS_API_KEY, auto_start_session=False, tags=["example", "custom-trace"])
    
    # Start custom trace
    tracer = agentops.start_trace(
        trace_name="Custom_PR_Review_Example",
        tags=["manual-trace", "example"]
    )
    
    try:
        result = review_pull_request(
            repo_name="octocat/Hello-World",
            pr_number=1,
            post_comment=False
        )
        
        print(f"Custom trace review completed: {result['recommendation']}")
        agentops.end_trace(tracer, end_state="Success")
        
    except Exception as e:
        print(f"Error in custom trace: {e}")
        agentops.end_trace(tracer, end_state="Fail")


async def example_api_usage():
    """Example of using the API programmatically"""
    print("\n=== API Usage Example ===")
    
    import httpx
    
    # This assumes the API server is running on localhost:8000
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                "http://localhost:8000/review",
                json={
                    "repo_name": "octocat/Hello-World",
                    "pr_number": 1,
                    "post_comment": False
                }
            )
            
            if response.status_code == 200:
                result = response.json()
                print(f"API Review Result: {result['recommendation']}")
                print(f"Files Analyzed: {result['files_analyzed']}")
                print(f"Security Issues: {result['security_issues_count']}")
            else:
                print(f"API Error: {response.status_code} - {response.text}")
                
        except Exception as e:
            print(f"API request failed: {e}")
            print("Make sure the API server is running: python src/api.py")


if __name__ == "__main__":
    print("PR Review Service Examples")
    print("=" * 40)
    
    # Run basic example
    example_basic_review()
    
    # Run custom trace example
    example_with_custom_trace()
    
    # Run API example (commented out since it requires the server to be running)
    # asyncio.run(example_api_usage())
    
    print("\n" + "=" * 40)
    print("Examples completed!")
    print("\nTo test with real data:")
    print("1. Set up your .env file with valid API keys")
    print("2. Replace repo_name and pr_number with actual values")
    print("3. For API example, start the server first: python src/api.py")
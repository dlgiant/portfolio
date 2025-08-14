from typing import List, Dict, Any
from github import Github
from agentops.sdk.decorators import tool
import requests


@tool(name="GitHubFilesTool", cost=0.01)
def get_pr_files(github_token: str, repo_name: str, pr_number: int) -> List[Dict[str, Any]]:
    """Get list of files changed in a PR with their content"""
    g = Github(github_token)
    repo = g.get_repo(repo_name)
    pr = repo.get_pull(pr_number)
    
    files_data = []
    for file in pr.get_files():
        file_data = {
            "filename": file.filename,
            "status": file.status,
            "additions": file.additions,
            "deletions": file.deletions,
            "changes": file.changes,
            "patch": file.patch if file.patch else "",
            "raw_url": file.raw_url,
        }
        files_data.append(file_data)
    
    return files_data


@tool(name="GitHubPRInfoTool", cost=0.01)
def get_pr_info(github_token: str, repo_name: str, pr_number: int) -> Dict[str, Any]:
    """Get PR information including title, description, and metadata"""
    g = Github(github_token)
    repo = g.get_repo(repo_name)
    pr = repo.get_pull(pr_number)
    
    return {
        "title": pr.title,
        "body": pr.body or "",
        "user": pr.user.login,
        "base_branch": pr.base.ref,
        "head_branch": pr.head.ref,
        "state": pr.state,
        "mergeable": pr.mergeable,
        "changed_files": pr.changed_files,
        "additions": pr.additions,
        "deletions": pr.deletions,
        "created_at": pr.created_at.isoformat(),
        "updated_at": pr.updated_at.isoformat(),
    }


@tool(name="GitHubCommentTool", cost=0.02)
def post_pr_comment(github_token: str, repo_name: str, pr_number: int, comment: str) -> Dict[str, Any]:
    """Post a review comment on a PR"""
    g = Github(github_token)
    repo = g.get_repo(repo_name)
    pr = repo.get_pull(pr_number)
    
    comment_obj = pr.create_issue_comment(comment)
    
    return {
        "comment_id": comment_obj.id,
        "comment_url": comment_obj.html_url,
        "created_at": comment_obj.created_at.isoformat(),
    }
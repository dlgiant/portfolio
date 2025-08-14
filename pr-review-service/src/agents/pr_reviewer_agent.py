from typing import Dict, List, Any
from agentops.sdk.decorators import agent, operation
from src.tools.github_tools import get_pr_files, get_pr_info, post_pr_comment
from src.tools.analysis_tools import analyze_code_quality, scan_for_security_issues, analyze_test_coverage


@agent(name="PRReviewerAgent")
class PRReviewerAgent:
    """AI-powered PR reviewer agent that analyzes code changes and provides feedback"""
    
    def __init__(self, github_token: str, agent_id: str = "pr-reviewer"):
        self.github_token = github_token
        self.agent_id = agent_id
    
    @operation
    def review_pull_request(self, repo_name: str, pr_number: int, post_comment: bool = True) -> Dict[str, Any]:
        """Comprehensive PR review including code quality, security, and test coverage analysis"""
        
        # Get PR information and files
        pr_info = get_pr_info(self.github_token, repo_name, pr_number)
        files_data = get_pr_files(self.github_token, repo_name, pr_number)
        
        if not files_data:
            return {
                "status": "no_changes",
                "message": "No files to review in this PR"
            }
        
        # Analyze each file
        file_analyses = []
        security_issues = []
        
        for file_data in files_data:
            if file_data["patch"]:  # Only analyze files with actual changes
                # Code quality analysis
                analysis = analyze_code_quality(
                    file_data.get("content", ""), 
                    file_data["filename"], 
                    file_data["patch"]
                )
                file_analyses.append(analysis)
                
                # Security scan
                security_result = scan_for_security_issues(
                    file_data.get("content", ""), 
                    file_data["filename"]
                )
                if security_result["security_issues"]:
                    security_issues.extend(security_result["security_issues"])
        
        # Test coverage analysis
        test_coverage = analyze_test_coverage(files_data)
        
        # Generate comprehensive review
        review_summary = self._generate_review_summary(
            pr_info, file_analyses, security_issues, test_coverage
        )
        
        review_result = {
            "pr_number": pr_number,
            "repo_name": repo_name,
            "pr_info": pr_info,
            "files_analyzed": len(file_analyses),
            "file_analyses": file_analyses,
            "security_issues": security_issues,
            "test_coverage": test_coverage,
            "review_summary": review_summary,
            "recommendation": self._get_recommendation(file_analyses, security_issues, test_coverage)
        }
        
        # Post comment if requested
        if post_comment:
            comment_result = post_pr_comment(
                self.github_token, repo_name, pr_number, review_summary
            )
            review_result["comment_posted"] = comment_result
        
        return review_result
    
    @operation
    def _generate_review_summary(self, pr_info: Dict, file_analyses: List[Dict], 
                                security_issues: List[Dict], test_coverage: Dict) -> str:
        """Generate a comprehensive review summary"""
        
        summary_parts = [
            f"## 🤖 AI Code Review Summary",
            f"",
            f"**PR Title:** {pr_info['title']}",
            f"**Files Changed:** {pr_info['changed_files']}",
            f"**Lines Added:** +{pr_info['additions']} **Lines Removed:** -{pr_info['deletions']}",
            f"",
        ]
        
        # Code Quality Section
        if file_analyses:
            summary_parts.extend([
                f"### 📋 Code Quality Analysis",
                f"Analyzed {len(file_analyses)} files with changes:",
                f""
            ])
            
            for analysis in file_analyses:
                if not analysis.get("error"):
                    summary_parts.append(f"**{analysis['filename']}:**")
                    summary_parts.append(f"```")
                    summary_parts.append(analysis['analysis'])
                    summary_parts.append(f"```")
                    summary_parts.append(f"")
        
        # Security Issues Section
        if security_issues:
            summary_parts.extend([
                f"### 🔒 Security Concerns",
                f"Found {len(security_issues)} potential security issues:",
                f""
            ])
            
            for issue in security_issues:
                severity_emoji = "🚨" if issue["severity"] == "high" else "⚠️"
                summary_parts.append(f"{severity_emoji} **{issue['type'].replace('_', ' ').title()}**: `{issue['pattern']}`")
            
            summary_parts.append(f"")
        
        # Test Coverage Section
        summary_parts.extend([
            f"### 🧪 Test Coverage Analysis",
            f"- Source files: {test_coverage['source_files_count']}",
            f"- Test files: {test_coverage['test_files_count']}",
            f"- Coverage assessment: {test_coverage['coverage_assessment'].replace('_', ' ').title()}",
            f""
        ])
        
        if test_coverage['coverage_assessment'] == 'missing':
            summary_parts.append(f"⚠️ **No tests found** - Consider adding tests for the changes.")
        elif test_coverage['coverage_assessment'] == 'needs_improvement':
            summary_parts.append(f"📝 **Limited test coverage** - Consider adding more comprehensive tests.")
        
        return "\n".join(summary_parts)
    
    @operation
    def _get_recommendation(self, file_analyses: List[Dict], security_issues: List[Dict], 
                          test_coverage: Dict) -> str:
        """Generate overall recommendation for the PR"""
        
        high_security_issues = [issue for issue in security_issues if issue["severity"] == "high"]
        
        if high_security_issues:
            return "CHANGES_REQUESTED - High severity security issues found"
        elif security_issues or test_coverage['coverage_assessment'] == 'missing':
            return "NEEDS_IMPROVEMENT - Address security concerns and/or add tests"
        elif test_coverage['coverage_assessment'] == 'needs_improvement':
            return "APPROVED_WITH_SUGGESTIONS - Consider improving test coverage"
        else:
            return "APPROVED - Looks good to merge!"
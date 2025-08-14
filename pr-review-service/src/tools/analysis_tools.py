from typing import List, Dict, Any
from agentops.sdk.decorators import tool
import openai
from config.settings import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY


@tool(name="CodeAnalysisTool", cost=0.10)
def analyze_code_quality(file_content: str, filename: str, patch: str) -> Dict[str, Any]:
    """Analyze code quality and provide suggestions"""
    
    prompt = f"""
    Please analyze the following code changes and provide feedback:

    File: {filename}
    
    Code Changes (Patch):
    {patch}
    
    Please provide:
    1. Code quality assessment (1-10 scale)
    2. Specific issues or improvements needed
    3. Security concerns if any
    4. Performance considerations
    5. Best practices violations
    6. Suggested improvements

    Format your response as a structured analysis.
    """
    
    try:
        response = openai.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a senior software engineer reviewing code. Provide constructive, detailed feedback."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=1000,
            temperature=0.3
        )
        
        analysis = response.choices[0].message.content
        
        return {
            "filename": filename,
            "analysis": analysis,
            "model_used": "gpt-4",
            "tokens_used": response.usage.total_tokens if response.usage else 0
        }
    except Exception as e:
        return {
            "filename": filename,
            "analysis": f"Error analyzing file: {str(e)}",
            "error": True
        }


@tool(name="SecurityScanTool", cost=0.05)
def scan_for_security_issues(file_content: str, filename: str) -> Dict[str, Any]:
    """Scan code for potential security vulnerabilities"""
    
    security_checks = {
        "sql_injection": ["SELECT", "INSERT", "UPDATE", "DELETE", "DROP", "CREATE"],
        "hardcoded_secrets": ["password", "api_key", "secret", "token", "credential"],
        "unsafe_functions": ["eval(", "exec(", "subprocess.call", "os.system"],
        "xss_vulnerable": ["innerHTML", "dangerouslySetInnerHTML", "document.write"],
    }
    
    issues = []
    content_lower = file_content.lower()
    
    for issue_type, patterns in security_checks.items():
        for pattern in patterns:
            if pattern.lower() in content_lower:
                issues.append({
                    "type": issue_type,
                    "pattern": pattern,
                    "severity": "high" if issue_type in ["sql_injection", "unsafe_functions"] else "medium"
                })
    
    return {
        "filename": filename,
        "security_issues": issues,
        "risk_level": "high" if any(issue["severity"] == "high" for issue in issues) else "medium" if issues else "low"
    }


@tool(name="TestCoverageTool", cost=0.03)
def analyze_test_coverage(files_data: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Analyze if PR includes appropriate tests"""
    
    source_files = []
    test_files = []
    
    for file_data in files_data:
        filename = file_data["filename"]
        if any(test_indicator in filename.lower() for test_indicator in ["test", "spec", "__tests__"]):
            test_files.append(filename)
        elif filename.endswith(('.py', '.js', '.ts', '.tsx', '.jsx')):
            source_files.append(filename)
    
    coverage_ratio = len(test_files) / len(source_files) if source_files else 0
    
    return {
        "source_files_count": len(source_files),
        "test_files_count": len(test_files),
        "coverage_ratio": coverage_ratio,
        "coverage_assessment": "good" if coverage_ratio >= 0.5 else "needs_improvement" if coverage_ratio > 0 else "missing",
        "source_files": source_files,
        "test_files": test_files
    }
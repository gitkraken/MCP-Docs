---
title: "issues_get_detail"
description: "Retrieve detailed information about a specific issue by its unique ID."
product: "GitKraken MCP Server"
feature: "Tools"
content_type: "reference"
audience: "developer"
plan_required: "Pro, Advanced, Business, Enterprise"
git_hosts: [github, gitlab, azure-devops, azure-devops-server]
integrations: [jira, linear, trello]
status: "GA"
last_verified: "2026-11"
llms_include: true
tags: [issues-get-detail, issues, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "issues_get_detail"
    nav_order: 40
    nav_parent: "mcp-tools-issues"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Retrieve detailed information about a specific issue by its unique ID.

Use this tool when you want to:

- Get details for a specific issue

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Issues |
| Read-only | Yes |
| Destructive | No |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issue_id` | string | Yes | The Number or ID of the issue to retrieve. Supported formats include GitHub/GitLab numeric IDs (e.g., 123 or #123), Jira keys (e.g., PROJ-123), Linear issue IDs (UUID format), etc |
| `provider` | string | Yes | Specify the issue provider. Default is JIRA. One of: `github`, `gitlab`, `jira`, `azure`, `azure_devops_server`, `linear`, `trello` |
| `azure_organization` | string | No | Optionally set the Azure DevOps organization name. Required for Azure DevOps |
| `azure_project` | string | No | Optionally set the Azure DevOps project name. Required for Azure DevOps |
| `repository_name` | string | No | Repository name. This is required for GitHub and GitLab |
| `repository_organization` | string | No | Organization name. This is required for GitHub and GitLab |

<!-- generated:tool:end -->

---
title: "issues_add_comment"
description: "Add a comment to an issue."
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
tags: [issues-add-comment, issues, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "issues_add_comment"
    nav_order: 10
    nav_parent: "mcp-tools-issues"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Add a comment to an issue.

Use this tool when you want to:

- Add a comment to an issue

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Issues |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | string | Yes | The text content of the comment (markdown; converted to Jira's format for Jira. Azure DevOps expects HTML) |
| `issue_id` | string | Yes | The ID of the issue to comment on |
| `provider` | string | Yes | Specify the issue provider. Default is JIRA. One of: `github`, `gitlab`, `jira`, `azure`, `azure_devops_server`, `linear`, `trello` |
| `azure_organization` | string | No | Optionally set the Azure DevOps organization name. Required for Azure DevOps |
| `azure_project` | string | No | Optionally set the Azure DevOps project name. Required for Azure DevOps |
| `repository_name` | string | No | Repository name. This is required for GitHub and GitLab |
| `repository_organization` | string | No | Organization name. This is required for GitHub and GitLab |

<!-- generated:tool:end -->

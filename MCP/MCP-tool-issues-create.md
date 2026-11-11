---
title: "issues_create"
description: "Create a new issue. For Jira, repository_name is the project key. For Linear, repository_organization is the team UUID, key, or name."
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
tags: [issues-create, issues, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "issues_create"
    nav_order: 30
    nav_parent: "mcp-tools-issues"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Create a new issue. For Jira, repository_name is the project key. For Linear, repository_organization is the team UUID, key, or name.

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Issues |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `provider` | string | Yes | Specify the issue provider. Default is JIRA. One of: `github`, `gitlab`, `jira`, `azure`, `azure_devops_server`, `linear`, `trello` |
| `title` | string | Yes | The title of the issue |
| `assignees` | array of string | No | Optional list of assignees. GitHub: usernames; GitLab: user IDs; Jira/Linear/Azure: first entry is used |
| `azure_organization` | string | No | Optionally set the Azure DevOps organization name. Required for Azure DevOps |
| `azure_project` | string | No | Optionally set the Azure DevOps project name. Required for Azure DevOps |
| `body` | string | No | The body/description of the issue (markdown; converted to Jira's format for Jira. Azure DevOps expects HTML) |
| `issue_type` | string | No | Issue type. Jira only (e.g. Bug, Story, Task); defaults to Task |
| `labels` | array of string | No | Optional list of label names to apply |
| `repository_name` | string | No | Repository name. Required for GitHub/GitLab; required for Jira, where it is the project key (e.g. GKCLI) |
| `repository_organization` | string | No | Organization name. Required for GitHub/GitLab; for Linear use as team identifier |

<!-- generated:tool:end -->

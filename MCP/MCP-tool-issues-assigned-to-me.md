---
title: "issues_assigned_to_me"
description: "Fetch all issues assigned to the current user."
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
tags: [issues-assigned-to-me, issues, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "issues_assigned_to_me"
    nav_order: 20
    nav_parent: "mcp-tools-issues"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Fetch all issues assigned to the current user.

Use this tool when you want to:

- Fetch issues assigned to you

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Issues |
| Read-only | Yes |
| Destructive | No |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `provider` | string | Yes | Specify the issue provider. Default is JIRA. One of: `github`, `gitlab`, `jira`, `azure`, `azure_devops_server`, `linear`, `trello` |
| `assigned_to` | string | No | List only issues assigned to this user (username/email/accountId, provider-dependent). Mutually exclusive with assigned_to_me and unassigned. Not supported by Trello/Linear |
| `assigned_to_me` | boolean | No | Whether to limit results to issues assigned to you. Defaults to true |
| `azure_organization` | string | No | Optionally set the Azure DevOps organization name. Required for Azure DevOps |
| `azure_project` | string | No | Optionally set the Azure DevOps project name. Required for Azure DevOps |
| `fields` | string | No | Optional comma-separated list of top-level fields to keep on each result. Recommended for list/overview calls: omitting it returns every field, which on large lists can overflow the context window. Omit only when you need the full objects. If every requested name is unknown, the request is rejected; field names are case-sensitive. Available fields: id, url, number, provider, repoName, repoOwner, repoHost, project, title, description, issueType, status, updatedAt, assignees, comments, childIssues |
| `is_closed` | boolean | No | Set to true to return closed/done issues instead of open issues. Defaults to false |
| `issue_type` | string | No | Issue type. Jira only (e.g. Bug, Story, Task) |
| `page` | number | No | Optional parameter to specify the page number, defaults to 1 |
| `project` | string | No | Project key. Jira only (e.g. GKDEV) |
| `repository_name` | string | No | Repository name. GitHub only; must be combined with repository_organization |
| `repository_organization` | string | No | Organization name. GitHub only |
| `unassigned` | boolean | No | Set to true to list only unassigned issues. Mutually exclusive with assigned_to_me and assigned_to. Not supported by Trello |

<!-- generated:tool:end -->

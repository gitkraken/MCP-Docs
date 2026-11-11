---
title: "pull_request_assigned_to_me"
description: "Search pull requests where you are the assignee, author, or reviewer."
product: "GitKraken MCP Server"
feature: "Tools"
content_type: "reference"
audience: "developer"
plan_required: "Pro, Advanced, Business, Enterprise"
git_hosts: [github, gitlab, bitbucket, azure-devops, azure-devops-server]
integrations: []
status: "GA"
last_verified: "2026-11"
llms_include: true
tags: [pull-request-assigned-to-me, pull-requests, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "pull_request_assigned_to_me"
    nav_order: 10
    nav_parent: "mcp-tools-pull-requests"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Search pull requests where you are the assignee, author, or reviewer.

Use this tool when you want to:

- Find PRs where you are assignee, author, or reviewer

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Pull Requests |
| Read-only | Yes |
| Destructive | No |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `provider` | string | Yes | Specify the git provider. One of: `github`, `gitlab`, `bitbucket`, `azure`, `azure_devops_server` |
| `azure_project` | string | No | Optionally set the Azure DevOps project name of the pull request. Required for Azure DevOps |
| `fields` | string | No | Optional comma-separated list of top-level fields to keep on each result. Recommended for list/overview calls: omitting it returns every field, which on large lists can overflow the context window. Omit only when you need the full objects. If every requested name is unknown, the request is rejected; field names are case-sensitive. Available fields: timestampCreatedAt, updatedAt, mergedAt, closedAt, title, description, url, state, owner, repoName, repoHost, provider, id, nodeId, repositoryId, projectId, organization, files, clone, number, merged, draft, approved, authoredByMe, headBranch, baseBranch, headRepo, author, assignees, reviews, reviewDecision, mergeableState, buildStatuses, baseRef, headRef, additions, deletions, changedFiles, filesTruncated, currentViewer |
| `is_closed` | boolean | No | Set to true if you want to search for closed pull requests |
| `page` | number | No | Optional parameter to specify the page number, defaults to 1 |
| `repository_name` | string | No | Set the repository name of the pull request. Required for Azure DevOps and Bitbucket |
| `repository_organization` | string | No | Set the organization name of the pull request. Required for Azure DevOps and Bitbucket |
| `reviewer` | boolean | No | Set to true to also include pull requests where you are a requested reviewer. Supported by github, github_enterprise, gitlab, gitlab_self_hosted; ignored for Azure DevOps and Bitbucket |
| `with_branches` | boolean | No | Include head/base branch names on each result. For GitHub this triggers an extra API call per PR, so leave off unless branches are needed |

<!-- generated:tool:end -->

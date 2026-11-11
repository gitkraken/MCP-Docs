---
title: "pull_request_get_detail"
description: "Get details for a specific pull request."
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
tags: [pull-request-get-detail, pull-requests, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "pull_request_get_detail"
    nav_order: 50
    nav_parent: "mcp-tools-pull-requests"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Get details for a specific pull request.

Use this tool when you want to:

- Get pull request details only

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
| `pull_request_id` | string | Yes | ID of the pull request to retrieve |
| `repository_name` | string | Yes | Set the repository name of the pull request |
| `repository_organization` | string | Yes | Set the organization name of the pull request |
| `azure_project` | string | No | Optionally set the Azure DevOps project name of the pull request. Required for Azure DevOps |
| `pull_request_files` | boolean | No | Set to true if you want to retrieve the files changed in the pull request. Not supported by Azure DevOps. On GitHub and GitLab the list is paged past the provider's first page. `changedFiles` is the provider-reported total where the provider supplies one; it is absent otherwise, and Bitbucket never supplies it. `filesTruncated` is true when the returned list is known to be short and absent otherwise; Bitbucket Cloud never sets it because that provider gives no completeness signal. `diffOmitted` on a file means its patch, blob sha and urls were elided to bound the response size. `additions`, `deletions` and `changes` are populated on GitHub only. The `files` key is null, not absent, when this parameter is not set |

<!-- generated:tool:end -->

---
title: "pull_request_create_review"
description: "Create a review for a pull request."
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
tags: [pull-request-create-review, pull-requests, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "pull_request_create_review"
    nav_order: 30
    nav_parent: "mcp-tools-pull-requests"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Create a review for a pull request.

Use this tool when you want to:

- Create a review for a pull request

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Pull Requests |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `provider` | string | Yes | Specify the git provider. One of: `github`, `gitlab`, `bitbucket`, `azure`, `azure_devops_server` |
| `pull_request_id` | string | Yes | ID of the pull request to create the review for |
| `repository_name` | string | Yes | Set the repository name of the pull request. Required for Azure DevOps and Bitbucket |
| `repository_organization` | string | Yes | Set the organization name of the pull request. Required for Azure DevOps and Bitbucket |
| `review` | string | Yes | Comment to add to the pull request review |
| `approve` | boolean | No | Set to true if you want to approve the pull request |
| `azure_project` | string | No | Optionally set the Azure DevOps project name of the pull request. Required for Azure DevOps |

<!-- generated:tool:end -->

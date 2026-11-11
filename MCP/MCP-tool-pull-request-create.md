---
title: "pull_request_create"
description: "Create a new pull request"
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
tags: [pull-request-create, pull-requests, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "pull_request_create"
    nav_order: 20
    nav_parent: "mcp-tools-pull-requests"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Create a new pull request

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
| `repository_name` | string | Yes | Set the repository name of the pull request. Required for Azure DevOps and Bitbucket |
| `repository_organization` | string | Yes | Set the organization name of the pull request. Required for Azure DevOps and Bitbucket |
| `source_branch` | string | Yes | Source branch from which the pull request will be created |
| `target_branch` | string | Yes | Target branch where the pull request will be merged |
| `title` | string | Yes | The title of the pull request |
| `assign_to_me` | boolean | No | Assign the newly created pull request to the current authenticated user when supported by the provider |
| `azure_project` | string | No | Optionally set the Azure DevOps project name of the pull request. Required for Azure DevOps |
| `body` | string | No | The body/description of the pull request |
| `is_draft` | boolean | No | Create as draft pull request |

<!-- generated:tool:end -->

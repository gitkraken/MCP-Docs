---
title: "repository_get_file_content"
description: "Get file content from a repository."
product: "GitKraken MCP Server"
feature: "Tools"
content_type: "reference"
audience: "developer"
plan_required: "all"
git_hosts: [github, gitlab, bitbucket, azure-devops, azure-devops-server]
integrations: []
status: "GA"
last_verified: "2026-11"
llms_include: true
tags: [repository-get-file-content, repository, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "repository_get_file_content"
    nav_order: 10
    nav_parent: "mcp-tools-repository"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Get file content from a repository.

Use this tool when you want to:

- Get file content from a repository

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Repository |
| Read-only | Yes |
| Destructive | No |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_path` | string | Yes | File path to retrieve from the repository |
| `provider` | string | Yes | Specify the git provider. One of: `github`, `gitlab`, `bitbucket`, `azure`, `azure_devops_server` |
| `ref` | string | Yes | Set the branch, tag, or commit SHA to retrieve the file from |
| `repository_name` | string | Yes | Set the repository name of the pull request. Required for Azure DevOps and Bitbucket |
| `repository_organization` | string | Yes | Set the organization name of the pull request. Required for Azure DevOps and Bitbucket |
| `azure_project` | string | No | Optionally set the Azure DevOps project name of the pull request. Required for Azure DevOps |

<!-- generated:tool:end -->

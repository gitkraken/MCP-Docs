---
title: "git_branch"
description: "List or create branches (git branch)."
product: "GitKraken MCP Server"
feature: "Tools"
content_type: "reference"
audience: "developer"
plan_required: "all"
git_hosts: [generic]
integrations: []
status: "GA"
last_verified: "2026-11"
llms_include: true
tags: [git-branch, git, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_branch"
    nav_order: 30
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

List or create branches (`git branch`).

Use this tool when you want to:

- Create or list branches manually

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | Yes | Git branch action to be executed. One of: `create`, `list` |
| `directory` | string | Yes | The directory to run git branch in |
| `branch_name` | string | No | (Optional) Name of the branch to create or delete |

<!-- generated:tool:end -->

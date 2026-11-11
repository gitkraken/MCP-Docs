---
title: "git_checkout"
description: "Switch branches or restore working tree files (git checkout <branch>)."
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
tags: [git-checkout, git, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_checkout"
    nav_order: 40
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Switch branches or restore working tree files (`git checkout <branch>`).

Use this tool when you want to:

- Switch branches or restore files

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `branch` | string | Yes | The branch to checkout. This must be a valid branch name without spaces |
| `directory` | string | Yes | The directory to run git checkout in |

<!-- generated:tool:end -->

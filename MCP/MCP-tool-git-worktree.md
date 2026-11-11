---
title: "git_worktree"
description: "List or add git worktrees. Use list to see all worktrees, or add to create a new one."
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
tags: [git-worktree, git, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_worktree"
    nav_order: 150
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

List or add git worktrees. Use `list` to see all worktrees, or `add` to create a new one.

Use this tool when you want to:

- List or create git worktrees

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | Yes | Git worktree action to be executed. One of: `list`, `add` |
| `directory` | string | Yes | The directory to run git worktree in |
| `branch` | string | No | (Optional) Existing branch for the new worktree (used for add) |
| `path` | string | No | (Optional) Path for the worktree (required for add) |

<!-- generated:tool:end -->

---
title: "git_stash"
description: "Stash the changes in a dirty working directory (git stash)."
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
tags: [git-stash, git, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_stash"
    nav_order: 130
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Stash the changes in a dirty working directory (`git stash`).

Use this tool when you want to:

- Save work in progress without committing

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directory` | string | Yes | The directory to run git stash in |
| `include_untracked` | boolean | No | When true, include untracked files in the stash |
| `name` | string | No | Optional name for the stash (used as the stash message) |
| `staged_only` | boolean | No | When true, stash only the currently staged changes and leave unstaged work untouched |

<!-- generated:tool:end -->

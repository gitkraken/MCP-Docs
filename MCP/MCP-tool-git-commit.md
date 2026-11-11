---
title: "git_commit"
description: "Record changes to the repository (git commit -m <message> [files...])."
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
tags: [git-commit, git, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_commit"
    nav_order: 50
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Record changes to the repository (git commit -m <message> [files...]).

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directory` | string | Yes | The directory to run git commit in |
| `message` | string | Yes | The commit message |
| `description` | string | No | Optional commit description/body |
| `files` | array of string | No | Optional array of files to commit. If omitted, all staged changes are committed |

<!-- generated:tool:end -->

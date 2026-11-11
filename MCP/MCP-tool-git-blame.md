---
title: "git_blame"
description: "Show what revision and author last modified each line of a file (git blame <file>)."
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
tags: [git-blame, git, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_blame"
    nav_order: 20
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Show what revision and author last modified each line of a file (`git blame <file>`).

Use this tool when you want to:

- See who last changed a specific line

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | Yes |
| Destructive | No |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directory` | string | Yes | The directory to run git blame in |
| `file` | string | Yes | The file to blame |

<!-- generated:tool:end -->

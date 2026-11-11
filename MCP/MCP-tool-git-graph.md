---
title: "git_graph"
description: "Show the commit graph for a repository (git log --graph), will open a UI if client supports it."
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
tags: [git-graph, git, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_graph"
    nav_order: 80
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Show the commit graph for a repository (git log --graph), will open a UI if client supports it.

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | Yes |
| Destructive | No |
| Opens an MCP App | Yes (`ui://gk-cli/app/git-graph`) |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directory` | string | Yes | Path of the working directory |

<!-- generated:tool:end -->

---
title: "git_resolve"
description: "Show the conflict resolution UI for a repository, will open a UI if client supports it."
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
tags: [git-resolve, git, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_resolve"
    nav_order: 120
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Show the conflict resolution UI for a repository, will open a UI if client supports it.

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | Yes |
| Destructive | No |
| Opens an MCP App | Yes (`ui://gk-cli/app/git-resolve`) |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directory` | string | Yes | Path of the working directory |
| `instructions` | string | No | Optional guidance for the AI conflict resolution flow |

<!-- generated:tool:end -->

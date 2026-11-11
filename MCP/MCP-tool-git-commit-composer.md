---
title: "git_commit_composer"
description: "Show the commit composer for a repository, will open a UI if client supports it."
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
tags: [git-commit-composer, git, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_commit_composer"
    nav_order: 60
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Show the commit composer for a repository, will open a UI if client supports it.

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | Yes |
| Destructive | No |
| Opens an MCP App | Yes (`ui://gk-cli/app/git-commit-composer`) |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directory` | string | Yes | Path of the working directory |
| `custom_instructions` | string | No | Free-form guidance for the AI commit composer. Only meaningful when 'direction' is 'custom' |
| `direction` | string | No | Initial grouping preset for the composer. 'auto' lets the AI choose; 'area' groups by codebase area / subsystem; 'type' groups by conventional commit type; 'custom' uses the supplied 'custom_instructions' text. Defaults to 'auto'. One of: `auto`, `area`, `type`, `custom` |

<!-- generated:tool:end -->

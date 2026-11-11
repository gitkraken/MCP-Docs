---
title: "gitlens_start_work"
description: "Gets issue details, opens a new worktree and window, and starts an agent on work."
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
tags: [gitlens-start-work, gitlens, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "gitlens_start_work"
    nav_order: 30
    nav_parent: "mcp-tools-gitlens"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Gets issue details, opens a new worktree and window, and starts an agent on work.

Use this tool when you want to:

- Start work on an issue (creates branch + worktree)

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | GitLens |
| Read-only | No |
| Destructive | Yes |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `directory` | string | Yes | Path of the working directory |
| `issue_url` | string | Yes | URL of the issue to start work on |
| `instructions` | string | No | OPTIONAL. Use this ONLY if the user explicitly provided specific requirements about the implementation approach, or additional context to supplement the issue. Do NOT use this parameter unless you are 100% certain about the user's intentions |

<!-- generated:tool:end -->

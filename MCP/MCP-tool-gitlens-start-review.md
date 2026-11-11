---
title: "gitlens_start_review"
description: "Gets PR details, opens a new worktree and window, opens the diff view, and starts an agent on review."
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
tags: [gitlens-start-review, gitlens, mcp-tool]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "gitlens_start_review"
    nav_order: 20
    nav_parent: "mcp-tools-gitlens"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Gets PR details, opens a new worktree and window, opens the diff view, and starts an agent on review.

Use this tool when you want to:

- Review a pull request (diff view + agent workflow)

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
| `pr_url` | string | Yes | URL of the PR to start review |
| `instructions` | string | No | OPTIONAL. Use this ONLY if the user explicitly provided specific requirements about the review focus, review criteria, or what aspects to check. Do NOT use this parameter unless you are 100% certain about the user's intentions. Examples: 'focus on security issues', 'check for performance regressions', 'review only the authentication logic' |

<!-- generated:tool:end -->

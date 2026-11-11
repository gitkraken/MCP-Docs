---
title: "git_log_or_diff"
description: "Show commit logs or changes between commits (git log --oneline or git diff)."
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
tags: [git-log-or-diff, git, mcp-tool, read-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "git_log_or_diff"
    nav_order: 90
    nav_parent: "mcp-tools-git"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Show commit logs or changes between commits (`git log --oneline` or `git diff`).

Use this tool when you want to:

- Review commit history or compare branches/commits

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | Git |
| Read-only | Yes |
| Destructive | No |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | Yes | The action to perform: 'log' for commit logs or 'diff' for changes. One of: `log`, `diff` |
| `directory` | string | Yes | The directory to run the command in |
| `authors` | array of string | No | Optional array of author names or emails to filter commits by (only applies to 'log' action) |
| `revision_range` | string | No | Optional revision range (e.g., 'HEAD', 'main..feature', 'abc123', 'HEAD~5..HEAD'). For 'diff' action, shows differences for the specified range. For 'log' action, shows commits in the range. Defaults to HEAD |
| `since` | string | No | Optional date/timestamp/relative time to show commits after (e.g., '2024-01-01', '2 weeks ago', 'yesterday', '1 hour ago', '3 days ago'). Only applies to 'log' action |
| `until` | string | No | Optional date/timestamp/relative time to show commits before (e.g., '2024-12-31', '1 week ago', 'today', 'yesterday', '2 hours ago'). Only applies to 'log' action |

<!-- generated:tool:end -->

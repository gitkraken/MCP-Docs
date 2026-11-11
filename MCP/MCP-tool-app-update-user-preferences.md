---
title: "app_update_user_preferences"
description: "Update GitKraken CLI user preferences for MCP apps. App-only; agents must not call this tool."
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
tags: [app-update-user-preferences, mcp-apps, mcp-tool, app-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "app_update_user_preferences"
    nav_order: 20
    nav_parent: "mcp-tools-mcp-apps"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Update GitKraken CLI user preferences for MCP apps. App-only; agents must not call this tool.

<!-- generated:tool:start -->

| Property | Value |
|----------|-------|
| Category | MCP Apps |
| Read-only | No |
| Destructive | No |
| App-only | Yes: called by GitKraken MCP Apps; agents must not call it |

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `git_commit_composer_app_collapsed` | boolean | No | When true, future Git Commit Composer overview app loads start in the collapsed state |
| `git_graph_app_collapsed` | boolean | No | When true, future Git Graph overview app loads start in the collapsed state |
| `git_status_app_collapsed` | boolean | No | When true, future Git Status overview app loads start in the collapsed state |
| `launchpad_issue_filters` | string | No | Serialized issue filter selections for Launchpad |
| `launchpad_pr_filters` | string | No | Serialized pull request filter selections for Launchpad |
| `launchpad_stale_threshold_days` | integer | No | Number of days of inactivity after which a Launchpad pull request is treated as stale and de-prioritized. Minimum: 0 |
| `launchpad_view` | string | No | Selected Launchpad view: pull-requests, issues, or all. One of: `pull-requests`, `issues`, `all` |

<!-- generated:tool:end -->

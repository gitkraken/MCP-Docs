---
title: "app_tool_box"
description: "Internal helper for GitKraken MCP apps. App-only — agents must not call this tool."
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
tags: [app-tool-box, mcp-apps, mcp-tool, app-only]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "app_tool_box"
    nav_order: 10
    nav_parent: "mcp-tools-mcp-apps"
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Internal helper for GitKraken MCP apps. App-only — agents must not call this tool.

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
| `action` | string | Yes | App helper action to execute. Supported values: 'git_status_data', 'git_graph_data', 'git_graph_commit_changes', 'git_graph_targets', 'compose_history', 'git_status_line_changes', 'open_diff', 'open_file', 'open_in_explorer', 'detected_editors', 'git_push', 'git_pull', 'git_fetch', 'git_add_or_commit', 'git_generate_commit_message', 'git_stash', 'app_feedback', 'gitlens_ping', 'gitlens_open_graph', 'update_user_preferences', 'interaction_telemetry', 'user_status', 'save_auth_code', 'purchase_url', 'start_trial', 'resend_email', 'ai_models_list', 'ai_model_set', 'settings_snapshot', 'settings_account_url', 'settings_organizations', 'settings_set_organization', 'compose_plan', 'compose_plan_start', 'compose_plan_status', 'compose_plan_cancel', 'compose_open_diff', 'compose_apply_plan', 'git_resolve_data', 'git_resolve_prepare_start', 'git_resolve_prepare_status', 'git_resolve_prepare_cancel', 'git_resolve_file_retry', 'git_resolve_file_open_diff', 'git_resolve_apply', 'git_resolve_discard' |
| `directory` | string | No |  |
| `options` | object | No | Per-action options. Supported keys depend on the 'action' value and include 'app_name', 'base_remote_url', 'base_sha', 'code', 'comment', 'commit_id', 'commit_sha', 'context', 'cursor', 'custom_instructions', 'data', 'description', 'direction', 'editor_id', 'file_allow_list', 'file_path', 'files', 'files_json', 'focused_file_paths', 'force', 'git_action', 'git_commit_composer_app_collapsed', 'git_graph_app_collapsed', 'git_status_app_collapsed', 'guidance', 'head_remote_url', 'head_sha', 'include_untracked', 'instructions', 'interaction', 'issue_url', 'job_id', 'launchpad_issue_filters', 'launchpad_pr_filters', 'launchpad_stale_threshold_days', 'launchpad_view', 'message', 'organization_id', 'page', 'plan_json', 'pr_number', 'pr_url', 'provider', 'providers', 'range_start_sha', 'refresh', 'sentiment', 'session_id', 'source_type', 'staged_only', and 'target_branch' |

<!-- generated:tool:end -->

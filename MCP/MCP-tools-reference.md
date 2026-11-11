---
title: Tools Reference
description: List of Tools accessible to AI/LLMs via the MCP tools/list command
product: "GitKraken MCP Server"
feature: "Tools"
content_type: "reference"
audience: "agent"
plan_required: "all"
git_hosts: [github, gitlab, azure-devops]
integrations: []
status: "GA"
last_verified: "2026-11"
llms_include: true
tags: [tools, tools-list, git, gitlens, issues, pull-requests, repository, plan-requirements]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-tools-reference"
    nav_label: "Tools Reference"
    nav_order: 40
    nav_parent: ""
    page_type: "content"
---

<kbd>Last updated: November 2026</kbd>

Tools are a fundamental part of the MCP ecosystem. They are the building blocks of the **GitKraken MCP Server** and allow you to interact with git and the integrations you have set up such as GitHub, GitLab, Jira, and Azure DevOps.

You can enable/disable them specifically within your chosen AI IDE/Agent. This list will change over time as we add more tools and consolidate the existing ones.

***

## Quick Start

The GitKraken MCP Server exposes tools that AI agents access via the `tools/list` MCP command. These tools cover git operations, GitLens workflows, issue tracking, and pull request management across GitHub, GitLab, Jira, and Azure DevOps.

Tools are organized into the following categories:

- **Git**: Stage files, commit, view blame, manage branches, checkout, log or diff, fetch, pull, push, stash, check status, manage worktrees, and show the commit graph, the commit composer and the conflict resolution UI. Available on all plans; private remote operations require **Pro or higher**.
- **GitKraken**: List workspaces. Available on all plans.
- **GitLens**: Open Launchpad, start work on an issue, start a PR review. Requires a [GitLens](https://www.gitkraken.com/gitlens) plan.
- **Issues**: Create issues, add comments, fetch assigned issues, retrieve issue details. Requires **Pro or higher** for cloud issue trackers (GitHub Issues, GitLab, Jira Cloud); **Advanced or higher** for enterprise trackers (Jira Data Center, Azure DevOps Server).
- **Pull Requests**: Create PRs, find assigned PRs, create reviews, retrieve comments, retrieve PR details. Requires **Pro or higher**.
- **Repository**: Get file content. Available on all plans for public repos; **Pro or higher** for private repos.
- **MCP Apps**: Helpers that GitKraken MCP Apps call to run their interface. Agents must not call them.

You can enable or disable individual tools in your AI IDE or agent configuration. To see these tools applied in practice, refer to the [Example Workflows](/mcp/MCP-example-workflows) page.

> **Requirements:**
> - [GitKraken CLI](https://www.gitkraken.com/cli) installed and authenticated (`gk auth login`)
> - **Pro or higher** for Issues, Pull Request, and private repo tools
> - **Advanced or higher** for enterprise Git and issue tracker integrations
> - [GitLens](https://www.gitkraken.com/gitlens) 1.101.0 or later for GitLens tools

***

## Summary

<!-- generated:tools:start -->

| Tool | Category | Read-only | Description |
|------|----------|-----------|-------------|
| [`app_tool_box`](/mcp/mcp-tool-app-tool-box/) | MCP Apps (app-only) | No | Internal helper for GitKraken MCP apps. App-only — agents must not call this tool. |
| [`app_update_user_preferences`](/mcp/mcp-tool-app-update-user-preferences/) | MCP Apps (app-only) | No | Update GitKraken CLI user preferences for MCP apps. App-only; agents must not call this tool. |
| [`git_add`](/mcp/mcp-tool-git-add/) | Git | No | Add file contents to the index (git add &lt;pathspec&gt;). |
| [`git_blame`](/mcp/mcp-tool-git-blame/) | Git | Yes | Show what revision and author last modified each line of a file (git blame &lt;file&gt;). |
| [`git_branch`](/mcp/mcp-tool-git-branch/) | Git | No | List or create branches (git branch). |
| [`git_checkout`](/mcp/mcp-tool-git-checkout/) | Git | No | Switch branches or restore working tree files (git checkout &lt;branch&gt;). |
| [`git_commit`](/mcp/mcp-tool-git-commit/) | Git | No | Record changes to the repository (git commit -m &lt;message&gt; [files...]). |
| [`git_commit_composer`](/mcp/mcp-tool-git-commit-composer/) | Git | Yes | Show the commit composer for a repository, will open a UI if client supports it. |
| [`git_fetch`](/mcp/mcp-tool-git-fetch/) | Git | No | Download objects and refs from another repository (git fetch). |
| [`git_graph`](/mcp/mcp-tool-git-graph/) | Git | Yes | Show the commit graph for a repository (git log --graph), will open a UI if client supports it. |
| [`git_log_or_diff`](/mcp/mcp-tool-git-log-or-diff/) | Git | Yes | Show commit logs or changes between commits (git log --oneline or git diff). |
| [`git_pull`](/mcp/mcp-tool-git-pull/) | Git | No | Fetch from and integrate with another repository or a local branch (git pull). |
| [`git_push`](/mcp/mcp-tool-git-push/) | Git | No | Update remote refs along with associated objects (git push). |
| [`git_resolve`](/mcp/mcp-tool-git-resolve/) | Git | Yes | Show the conflict resolution UI for a repository, will open a UI if client supports it. |
| [`git_stash`](/mcp/mcp-tool-git-stash/) | Git | No | Stash the changes in a dirty working directory (git stash). |
| [`git_status`](/mcp/mcp-tool-git-status/) | Git | Yes | Show the working tree status (git status), will open a UI if client supports it. |
| [`git_worktree`](/mcp/mcp-tool-git-worktree/) | Git | No | List or add git worktrees (git worktree &lt;action&gt;). |
| [`gitkraken_workspace_list`](/mcp/mcp-tool-gitkraken-workspace-list/) | GitKraken | Yes | Lists all Gitkraken workspaces |
| [`gitlens_launchpad`](/mcp/mcp-tool-gitlens-launchpad/) | GitLens | Yes | Gitlens Launchpad. Gets your open pull requests prioritized by what needs attention: ready to merge, has conflicts, awaiting review, etc. Helpful for checking todos, outstanding tasks, or deciding what to work on next. |
| [`gitlens_start_review`](/mcp/mcp-tool-gitlens-start-review/) | GitLens | No | Gitlens Start Review. Creates a dedicated worktree and reviews your PR with an AI agent. |
| [`gitlens_start_work`](/mcp/mcp-tool-gitlens-start-work/) | GitLens | No | Gitlens Start Work. Creates a work based on an issue. This tool will create a branch and link it with the issue, keeping context visible throughout your work. |
| [`issues_add_comment`](/mcp/mcp-tool-issues-add-comment/) | Issues | No | Add a comment to an issue |
| [`issues_assigned_to_me`](/mcp/mcp-tool-issues-assigned-to-me/) | Issues | Yes | Fetch issues assigned to the user. Set assigned_to_me=false to broaden the result to all visible issues. To filter server-side by assignee, set unassigned=true for issues with no assignee, or assigned_to=&lt;user&gt; for issues assigned to a specific person (assigned_to_me, unassigned and assigned_to are mutually exclusive). Narrow results further with repository_name/repository_organization (GitHub), project/issue_type (Jira), or is_closed. |
| [`issues_create`](/mcp/mcp-tool-issues-create/) | Issues | No | Create a new issue. For Jira, repository_name is the project key. For Linear, repository_organization is the team UUID, key, or name. |
| [`issues_get_detail`](/mcp/mcp-tool-issues-get-detail/) | Issues | Yes | Retrieve detailed information about a specific issue by its unique ID. For Jira Epics, the response includes a childIssues array containing all issues linked to the epic. |
| [`pull_request_assigned_to_me`](/mcp/mcp-tool-pull-request-assigned-to-me/) | Pull Requests | Yes | Search pull requests where you are the author or assignee. Set reviewer to true to also include pull requests where you are a requested reviewer (github and gitlab only). |
| [`pull_request_create`](/mcp/mcp-tool-pull-request-create/) | Pull Requests | No | Create a new pull request |
| [`pull_request_create_review`](/mcp/mcp-tool-pull-request-create-review/) | Pull Requests | No | Create a review for a pull request |
| [`pull_request_get_comments`](/mcp/mcp-tool-pull-request-get-comments/) | Pull Requests | Yes | Get all the comments in a pull requests |
| [`pull_request_get_detail`](/mcp/mcp-tool-pull-request-get-detail/) | Pull Requests | Yes | Get an specific pull request |
| [`repository_get_file_content`](/mcp/mcp-tool-repository-get-file-content/) | Repository | Yes | Get file content from a repository |

<!-- generated:tools:end -->

---

## When to Use Which Tool

| I want to… | Use this tool |
|---|---|
| See who last changed a specific line | `git_blame` |
| Review commit history or compare branches/commits | `git_log_or_diff` |
| Show the commit graph for a repository | `git_graph` |
| Stage files before committing | `git_add` |
| Commit staged changes with a message | `git_commit` |
| Start work on an issue (creates branch + worktree) | `gitlens_start_work` |
| Create or list branches manually | `git_branch` |
| Switch branches or restore files | `git_checkout` |
| Review a pull request (diff view + agent workflow) | `gitlens_start_review` |
| Get pull request details only | `pull_request_get_detail` |
| Check working directory status | `git_status` |
| Save work in progress without committing | `git_stash` |
| Download objects and refs from a remote | `git_fetch` |
| Fetch from and integrate with another repository or a local branch | `git_pull` |
| Push local commits to a remote | `git_push` |
| Open the conflict resolution UI for a repository | `git_resolve` |
| List or create git worktrees | `git_worktree` |
| List GitKraken workspaces | `gitkraken_workspace_list` |
| Get file content from a repository | `repository_get_file_content` |
| Open GitLens Launchpad | `gitlens_launchpad` |
| Open the commit composer for a repository | `git_commit_composer` |
| Fetch issues assigned to you | `issues_assigned_to_me` |
| Get details for a specific issue | `issues_get_detail` |
| Add a comment to an issue | `issues_add_comment` |
| Create a new issue | `issues_create` |
| Find PRs where you are assignee, author, or reviewer | `pull_request_assigned_to_me` |
| Create a review for a pull request | `pull_request_create_review` |
| Get all comments on a pull request | `pull_request_get_comments` |
| Create a new pull request | `pull_request_create` |

---

## Commit, Branch, and View History

<table>
<colgroup><col style="width:220px"><col></colgroup>
<thead><tr><th>Tool</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>git_add</code></td><td>Add file contents to the index (<code>git add &lt;pathspec&gt;</code>).</td></tr>
<tr><td><code>git_blame</code></td><td>Show what revision and author last modified each line of a file (<code>git blame &lt;file&gt;</code>).</td></tr>
<tr><td><code>git_branch</code></td><td>List or create branches (<code>git branch</code>).</td></tr>
<tr><td><code>git_checkout</code></td><td>Switch branches or restore working tree files (<code>git checkout &lt;branch&gt;</code>).</td></tr>
<tr><td><code>git_commit</code></td><td>Record changes to the repository (<code>git commit -m &lt;message&gt; [files...]</code>).</td></tr>
<tr><td><code>git_commit_composer</code></td><td>Show the commit composer for a repository. Opens a UI if the client supports it.</td></tr>
<tr><td><code>git_fetch</code></td><td>Download objects and refs from another repository (<code>git fetch</code>).</td></tr>
<tr><td><code>git_graph</code></td><td>Show the commit graph for a repository (<code>git log --graph</code>). Opens a UI if the client supports it.</td></tr>
<tr><td><code>git_log_or_diff</code></td><td>Show commit logs or changes between commits (<code>git log --oneline</code> or <code>git diff</code>).</td></tr>
<tr><td><code>git_pull</code></td><td>Fetch from and integrate with another repository or a local branch (<code>git pull</code>).</td></tr>
<tr><td><code>git_push</code></td><td>Update remote refs along with associated objects (<code>git push</code>).</td></tr>
<tr><td><code>git_resolve</code></td><td>Show the conflict resolution UI for a repository. Opens a UI if the client supports it.</td></tr>
<tr><td><code>git_stash</code></td><td>Stash the changes in a dirty working directory (<code>git stash</code>).</td></tr>
<tr><td><code>git_status</code></td><td>Show the working tree status (<code>git status</code>).</td></tr>
<tr><td><code>git_worktree</code></td><td>List or add git worktrees. Use <code>list</code> to see all worktrees, or <code>add</code> to create a new one.</td></tr>
</tbody>
</table>

---

## Access GitKraken Workspaces

| Tool | Description |
|---|---|
| `gitkraken_workspace_list` | Lists all GitKraken workspaces. |

---

## Start Work and Reviews with GitLens

| Tool | Description |
|---|---|
| `gitlens_launchpad` | Opens [Launchpad](https://help.gitkraken.com/gitlens/gl-launchpad/) in GitLens. |
| `gitlens_start_review` | Gets PR details, opens a new worktree and window, opens the diff view, and starts an agent on review. |
| `gitlens_start_work` | Gets issue details, opens a new worktree and window, and starts an agent on work. |

---

## Query and Comment on Issues

| Tool | Description |
|---|---|
| `issues_add_comment` | Add a comment to an issue. |
| `issues_assigned_to_me` | Fetch all issues assigned to the current user. |
| `issues_create` | Create a new issue. For Jira, `repository_name` is the project key. For Linear, `repository_organization` is the team UUID, key, or name. |
| `issues_get_detail` | Retrieve detailed information about a specific issue by its unique ID. |

---

## Review and Manage Pull Requests

| Tool | Description |
|---|---|
| `pull_request_assigned_to_me` | Search pull requests where you are the assignee, author, or reviewer. |
| `pull_request_create` | Create a new pull request. |
| `pull_request_create_review` | Create a review for a pull request. |
| `pull_request_get_comments` | Get all comments on a pull request. |
| `pull_request_get_detail` | Get details for a specific pull request. |

---

## Read File Content

| Tool | Description |
|---|---|
| `repository_get_file_content` | Get file content from a repository. |

---

## Tools Used Only by MCP Apps

| Tool | Description |
|---|---|
| `app_tool_box` | Internal helper for GitKraken MCP Apps. App-only: agents must not call this tool. |
| `app_update_user_preferences` | Update GitKraken CLI user preferences for MCP Apps. App-only: agents must not call this tool. |

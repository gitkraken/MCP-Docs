---
title: Tools Reference
description: List of Tools accessible to AI/LLMs via the MCP tools/list command
product: "GitKraken MCP Server"
content_type: "reference"
audience: "agent"
plan_required: "all"
status: "GA"
last_verified: "2026-03"
taxonomy:
  category: MCP
---

<kbd>Last updated: March 2026</kbd>

Tools are a fundamental part of the MCP ecosystem. They are the building blocks of the **GitKraken MCP Server** and allow you to interact with git and the integrations you have set up such as GitHub, GitLab, Jira, and Azure DevOps.

You can enable/disable them specifically within your chosen AI IDE/Agent. This list will change over time as we add more tools and consolidate the existing ones.

***

## Quick Start

The GitKraken MCP Server exposes tools that AI agents access via the `tools/list` MCP command. These tools cover git operations, GitLens workflows, issue tracking, and pull request management across GitHub, GitLab, Jira, and Azure DevOps.

Tools are organized into the following categories:

- **Git**: Stage files, commit, view blame, manage branches, checkout, log or diff, push, stash, check status, and manage worktrees. Available on all plans; private remote operations require **Pro or higher**.
- **GitKraken**: List workspaces. Available on all plans.
- **GitLens**: Open Commit Composer, open Launchpad, start work on an issue, start a PR review. Requires a [GitLens](https://www.gitkraken.com/gitlens) plan.
- **Issues**: Add comments, fetch assigned issues, retrieve issue details. Requires **Pro or higher** for cloud issue trackers (GitHub Issues, GitLab, Jira Cloud); **Advanced or higher** for enterprise trackers (Jira Data Center, Azure DevOps Server).
- **Pull Requests**: Find assigned PRs, create reviews, retrieve comments, retrieve PR details. Requires **Pro or higher**.
- **Repository**: Get file content. Available on all plans for public repos; **Pro or higher** for private repos.

You can enable or disable individual tools in your AI IDE or agent configuration. To see these tools applied in practice, refer to the [Example Workflows](/mcp/MCP-example-workflows) page.

> **Requirements:**
> - [GitKraken CLI](https://www.gitkraken.com/cli) installed and authenticated (`gk auth login`)
> - **Pro or higher** for Issues, Pull Request, and private repo tools
> - **Advanced or higher** for enterprise Git and issue tracker integrations
> - [GitLens](https://www.gitkraken.com/gitlens) 1.101.0 or later for GitLens tools

***

## Summary

| Tool | Category | Description |
|------|----------|-------------|
| `git_add_or_commit` | Git | Stage files or commit changes |
| `git_blame` | Git | Show line-by-line change history for a file |
| `git_branch` | Git | List or create branches |
| `git_checkout` | Git | Switch branches or restore working tree files |
| `git_log_or_diff` | Git | Show commit logs or diffs |
| `git_push` | Git | Push changes to a remote |
| `git_stash` | Git | Stash changes in a dirty working directory |
| `git_status` | Git | Show the working tree status |
| `git_worktree` | Git | List or add git worktrees |
| `gitkraken_workspace_list` | GitKraken | List all GitKraken workspaces |
| `gitlens_commit_composer` | GitLens | Open the commit composer in GitLens |
| `gitlens_launchpad` | GitLens | Open Launchpad in GitLens |
| `gitlens_start_review` | GitLens | Start a PR review workflow |
| `gitlens_start_work` | GitLens | Start work on an issue |
| `issues_add_comment` | Issues | Add a comment to an issue |
| `issues_assigned_to_me` | Issues | Fetch issues assigned to you |
| `issues_get_detail` | Issues | Get details for a specific issue |
| `pull_request_assigned_to_me` | Pull Requests | Find PRs where you are assignee, author, or reviewer |
| `pull_request_create_review` | Pull Requests | Create a review for a pull request |
| `pull_request_get_comments` | Pull Requests | Get all comments on a pull request |
| `pull_request_get_detail` | Pull Requests | Get details for a specific pull request |
| `repository_get_file_content` | Repository | Get file content from a repository |

---

## When to Use Which Tool

| I want to… | Use this tool |
|---|---|
| See who last changed a specific line | `git_blame` |
| Review commit history or compare branches/commits | `git_log_or_diff` |
| Stage files before committing | `git_add_or_commit` (action: `add`) |
| Commit staged changes with a message | `git_add_or_commit` (action: `commit`) |
| Start work on an issue (creates branch + worktree) | `gitlens_start_work` |
| Create or list branches manually | `git_branch` |
| Switch branches or restore files | `git_checkout` |
| Review a pull request (diff view + agent workflow) | `gitlens_start_review` |
| Get pull request details only | `pull_request_get_detail` |
| Check working directory status | `git_status` |
| Save work in progress without committing | `git_stash` |
| Push local commits to a remote | `git_push` |
| List or create git worktrees | `git_worktree` |
| List GitKraken workspaces | `gitkraken_workspace_list` |
| Get file content from a repository | `repository_get_file_content` |
| Open GitLens Launchpad | `gitlens_launchpad` |
| Stage and compose a commit in GitLens UI | `gitlens_commit_composer` |
| Fetch issues assigned to you | `issues_assigned_to_me` |
| Get details for a specific issue | `issues_get_detail` |
| Add a comment to an issue | `issues_add_comment` |
| Find PRs where you are assignee, author, or reviewer | `pull_request_assigned_to_me` |
| Create a review for a pull request | `pull_request_create_review` |
| Get all comments on a pull request | `pull_request_get_comments` |

---

## Commit, Branch, and View History

<table>
<colgroup><col style="width:220px"><col></colgroup>
<thead><tr><th>Tool</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>git_add_or_commit</code></td><td>Add file contents to the index (<code>git add &lt;pathspec&gt;</code>) or record changes to the repository (<code>git commit -m &lt;message&gt; [files...]</code>). Use the <code>action</code> parameter: <code>add</code> to stage files, <code>commit</code> to record a commit with a message.</td></tr>
<tr><td><code>git_blame</code></td><td>Show what revision and author last modified each line of a file (<code>git blame &lt;file&gt;</code>).</td></tr>
<tr><td><code>git_branch</code></td><td>List or create branches (<code>git branch</code>).</td></tr>
<tr><td><code>git_checkout</code></td><td>Switch branches or restore working tree files (<code>git checkout &lt;branch&gt;</code>).</td></tr>
<tr><td><code>git_log_or_diff</code></td><td>Show commit logs or changes between commits (<code>git log --oneline</code> or <code>git diff</code>).</td></tr>
<tr><td><code>git_push</code></td><td>Update remote refs along with associated objects (<code>git push</code>).</td></tr>
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
| `gitlens_commit_composer` | Opens [commit composer](https://www.gitkraken.com/blog/gitlens-17-2-commit-composer-streamlined-ux-and-enterprise-controls) in GitLens. |
| `gitlens_launchpad` | Opens [Launchpad](https://help.gitkraken.com/gitlens/gl-launchpad/) in GitLens. |
| `gitlens_start_review` | Gets PR details, opens a new worktree and window, opens the diff view, and starts an agent on review. |
| `gitlens_start_work` | Gets issue details, opens a new worktree and window, and starts an agent on work. |

---

## Query and Comment on Issues

| Tool | Description |
|---|---|
| `issues_add_comment` | Add a comment to an issue. |
| `issues_assigned_to_me` | Fetch all issues assigned to the current user. |
| `issues_get_detail` | Retrieve detailed information about a specific issue by its unique ID. |

---

## Review and Manage Pull Requests

| Tool | Description |
|---|---|
| `pull_request_assigned_to_me` | Search pull requests where you are the assignee, author, or reviewer. |
| `pull_request_create_review` | Create a review for a pull request. |
| `pull_request_get_comments` | Get all comments on a pull request. |
| `pull_request_get_detail` | Get details for a specific pull request. |

---

## Read File Content

| Tool | Description |
|---|---|
| `repository_get_file_content` | Get file content from a repository. |

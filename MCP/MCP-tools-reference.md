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
| [git_add_or_commit](#git_add_or_commit) | Git | Stage files or commit changes |
| [git_blame](#git_blame) | Git | Show line-by-line change history for a file |
| [git_branch](#git_branch) | Git | List or create branches |
| [git_checkout](#git_checkout) | Git | Switch branches or restore working tree files |
| [git_log_or_diff](#git_log_or_diff) | Git | Show commit logs or diffs |
| [git_push](#git_push) | Git | Push changes to a remote |
| [git_stash](#git_stash) | Git | Stash changes in a dirty working directory |
| [git_status](#git_status) | Git | Show the working tree status |
| [git_worktree](#git_worktree) | Git | List or add git worktrees |
| [gitkraken_workspace_list](#gitkraken_workspace_list) | GitKraken | List all GitKraken workspaces |
| [gitlens_commit_composer](#gitlens_commit_composer) | GitLens | Open the commit composer in GitLens |
| [gitlens_launchpad](#gitlens_launchpad) | GitLens | Open Launchpad in GitLens |
| [gitlens_start_review](#gitlens_start_review) | GitLens | Start a PR review workflow |
| [gitlens_start_work](#gitlens_start_work) | GitLens | Start work on an issue |
| [issues_add_comment](#issues_add_comment) | Issues | Add a comment to an issue |
| [issues_assigned_to_me](#issues_assigned_to_me) | Issues | Fetch issues assigned to you |
| [issues_get_detail](#issues_get_detail) | Issues | Get details for a specific issue |
| [pull_request_assigned_to_me](#pull_request_assigned_to_me) | Pull Requests | Find PRs where you are assignee, author, or reviewer |
| [pull_request_create_review](#pull_request_create_review) | Pull Requests | Create a review for a pull request |
| [pull_request_get_comments](#pull_request_get_comments) | Pull Requests | Get all comments on a pull request |
| [pull_request_get_detail](#pull_request_get_detail) | Pull Requests | Get details for a specific pull request |
| [repository_get_file_content](#repository_get_file_content) | Repository | Get file content from a repository |

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

### git_add_or_commit

Add file contents to the index (`git add <pathspec>`) or record changes to the repository (`git commit -m <message> [files...]`). Use the `action` parameter: `add` to stage files, `commit` to record a commit with a message.

### git_blame

Show what revision and author last modified each line of a file (`git blame <file>`).

### git_branch

List or create branches (`git branch`).

### git_checkout

Switch branches or restore working tree files (`git checkout <branch>`).

### git_log_or_diff

Show commit logs or changes between commits (`git log --oneline` or `git diff`).

### git_push

Update remote refs along with associated objects (`git push`).

### git_stash

Stash the changes in a dirty working directory (`git stash`).

### git_status

Show the working tree status (`git status`).

### git_worktree

List or add git worktrees. Use `list` to see all worktrees, or `add` to create a new one.

---

## Access GitKraken Workspaces

### gitkraken_workspace_list

Lists all GitKraken workspaces.

---

## Start Work and Reviews with GitLens

### gitlens_commit_composer

Opens [commit composer](https://www.gitkraken.com/blog/gitlens-17-2-commit-composer-streamlined-ux-and-enterprise-controls) in GitLens.

### gitlens_launchpad

Opens [Launchpad](https://help.gitkraken.com/gitlens/gl-launchpad/) in GitLens.

### gitlens_start_review

Gets PR details, opens a new worktree and window, opens the diff view, and starts an agent on review.

### gitlens_start_work

Gets issue details, opens a new worktree and window, and starts an agent on work.

---

## Query and Comment on Issues

### issues_add_comment

Add a comment to an issue.

### issues_assigned_to_me

Fetch all issues assigned to the current user.

### issues_get_detail

Retrieve detailed information about a specific issue by its unique ID.

---

## Review and Manage Pull Requests

### pull_request_assigned_to_me

Search pull requests where you are the assignee, author, or reviewer.

### pull_request_create_review

Create a review for a pull request.

### pull_request_get_comments

Get all comments on a pull request.

### pull_request_get_detail

Get details for a specific pull request.

---

## Read File Content

### repository_get_file_content

Get file content from a repository.

<style>
pre{position:relative;min-height:3.5em}
.copy-btn{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:11px;font-family:sans-serif;background:rgba(128,128,128,.15);border:1px solid rgba(128,128,128,.25);border-radius:4px;cursor:pointer;color:#aaa;opacity:0;transition:opacity .15s,background .15s,color .15s;line-height:1.5;z-index:1}
pre:hover .copy-btn{opacity:1}
.copy-btn:hover{background:rgba(128,128,128,.3);color:#ddd}
.copy-btn.copied{color:#22c55e;border-color:rgba(34,197,94,.4)}
</style>
<script>(function(){function cp(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);var x=document.createElement('textarea');x.value=t;x.style.cssText='position:fixed;opacity:0';document.body.appendChild(x);x.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(x);return Promise.resolve()}function init(){document.querySelectorAll('pre').forEach(function(p){if(p.querySelector('.copy-btn'))return;var b=document.createElement('button');b.className='copy-btn';b.setAttribute('aria-label','Copy code');b.textContent='Copy';p.appendChild(b);b.addEventListener('click',function(){var el=p.querySelector('code')||p;cp(el.innerText.replace(/\n$/,'')).then(function(){b.textContent='Copied!';b.classList.add('copied');setTimeout(function(){b.textContent='Copy';b.classList.remove('copied')},2000)})})})}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init()})()</script>

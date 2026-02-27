---
title: Tools Reference
description: List of Tools accessible to AI/LLMs via the MCP tools/list command
taxonomy:
  category: MCP
---

<kbd>Last updated: February 2026</kbd>

Tools are a fundamental part of the MCP ecosystem. They are the building blocks of the GitKraken Model Context Protocol (MCP) and allow you to interact with git and the integrations you have set up such as GitHub, GitLab, Jira, and Azure DevOps.

You can enable/disable them specifically within your chosen AI IDE/Agent. This list will change over time as we add more tools and consolidate the existing ones.

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

## Git Tools

### git_add_or_commit

Add file contents to the index (`git add <pathspec>`) or record changes to the repository (`git commit -m <message> [files...]`). Use the `action` parameter to specify which operation to perform.

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

List or add git worktrees (`git worktree <action>`).

---

## GitKraken Tools

### gitkraken_workspace_list

Lists all GitKraken workspaces.

---

## GitLens Tools

### gitlens_commit_composer

Opens [commit composer](https://www.gitkraken.com/blog/gitlens-17-2-commit-composer-streamlined-ux-and-enterprise-controls) in GitLens.

### gitlens_launchpad

Opens [Launchpad](https://help.gitkraken.com/gitlens/gl-launchpad/) in GitLens.

### gitlens_start_review

Gets PR details, opens a new worktree and window, opens the diff view, and starts an agent on review.

### gitlens_start_work

Gets issue details, opens a new worktree and window, and starts an agent on work.

---

## Issues Tools

### issues_add_comment

Add a comment to an issue.

### issues_assigned_to_me

Fetch all issues assigned to the current user.

### issues_get_detail

Retrieve detailed information about a specific issue by its unique ID.

---

## Pull Request Tools

### pull_request_assigned_to_me

Search pull requests where you are the assignee, author, or reviewer.

### pull_request_create_review

Create a review for a pull request.

### pull_request_get_comments

Get all comments on a pull request.

### pull_request_get_detail

Get details for a specific pull request.

---

## Repository Tools

### repository_get_file_content

Get file content from a repository.

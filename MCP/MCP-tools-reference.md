---
title: Tools Reference
description: List of Tools accessible to AI/LLMs via the MCP tools/list command
taxonomy:
  category: MCP
---

<kbd>Last updated: February 2026</kbd>

Tools are a fundamental part of the MCP ecosystem. They are the building blocks of the GitKraken Model Context Protocol (MCP) and allow you to interact with git and the integrations you have set up such as GitHub, GitLab, Jira, and Azure DevOps.

You can enable/disable them specifically within your chosen AI IDE/Agent.

The tools available are listed below. This list will change over time as we add more tools and consolidate the existing ones.


### git_add_or_commit

Add file contents to the index (git add <pathspec>) OR record changes to the repository (git commit -m <message> [files...]). Use the 'action' parameter to specify which action to perform.


### git_blame

Show what revision and author last modified each line of a file (git blame <file>).


### git_branch

List or create branches (git branch).


### git_checkout

Switch branches or restore working tree files (git checkout <branch>).


### git_log_or_diff

Show commit logs or changes between commits (git log --oneline or git diff).


### git_push

Update remote refs along with associated objects (git push).


### git_stash

Stash the changes in a dirty working directory (git stash).


### git_status

Show the working tree status (git status).


### git_worktree

List or add git worktrees (git worktree <action>).


### gitkraken_workspace_list

 Lists all Gitkraken workspaces


### gitlens_commit_composer

Opens [commit composer](https://www.gitkraken.com/blog/gitlens-17-2-commit-composer-streamlined-ux-and-enterprise-controls) in GitLens


### gitlens_launchpad

Opens [Launchpad](https://help.gitkraken.com/gitlens/gl-launchpad/) in GitLens


### gitlens_start_review

Get PR details, open a new worktree+window, open diff view, start agent on review


### gitlens_start_work

Get Issue details, open a new worktree+window, start agent on work


### issues_add_comment

Add a comment to an issue


### issues_assigned_to_me

Fetch issues assigned to the user


### issues_get_detail

Retrieve detailed information about a specific issue by its unique ID


### pull_request_assigned_to_me

Search pull requests where you are the assignee, author, or reviewer


### pull_request_create_review

Create a review for a pull request


### pull_request_get_comments

Get all the comments in a pull requests


### pull_request_get_detail

Get an specific pull request


### repository_get_file_content

Get file content from a repository


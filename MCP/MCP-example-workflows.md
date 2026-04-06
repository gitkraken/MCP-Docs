---
title: Example Workflows
description: A collection of example workflows that demonstrate how to use the GitKraken MCP Server to automate common development tasks.
product: "GitKraken MCP Server"
content_type: "how-to"
audience: "developer"
plan_required: "Pro, Advanced, Business, Enterprise"
integrations: ["GitHub", "Jira"]
status: "GA"
last_verified: "2026-03"
taxonomy:
  category: MCP
---

<kbd>Last updated: March 2026</kbd>

These example workflows show how an AI agent uses the **GitKraken MCP Server** to perform common Git and project management tasks, including querying assigned issues, starting work on a ticket, and investigating change history. Each workflow shows the agent prompt and the tools called.

> **Requirements:**
> - Pro or higher plan
> - [GitKraken CLI](https://www.gitkraken.com/cli) installed and authenticated (`gk auth login`)
> - GitHub or Jira integration configured in GitKraken for issue-related workflows (Advanced or higher for Jira Data Center)

| Workflow | Tools Called | Integration Required |
|---|---|---|
| [Query assigned issues](#query-jira-and-github-for-assigned-issues) | `issues_assigned_to_me` | Jira or GitHub |
| [Start work on a Jira issue](#start-work-on-a-jira-issue) | `issues_get_detail`, `git_branch`, `git_checkout` | Jira |
| [Debug and understand history](#debug-and-understand-history) | `git_blame` | Any Git repo |

### Query Jira and GitHub for Assigned Issues

**Use this when** you want a unified view of issues assigned to you across Jira and/or GitHub without switching between tools.

Manually checking Jira or GitHub for your assigned issues can be tedious. Instead, ask your agent:

```
What issues are assigned to me?
```

This prompt uses the `issues_assigned_to_me` tool to query Jira and/or GitHub and list all issues assigned to your account.

### Start Work on a Jira Issue

**Use this when** you want to start work on a Jira ticket and have a properly named branch created automatically. **Use `git_branch` directly when** you already know the exact branch name you want and don't need issue details fetched.

To start work on a specific task, use the following prompt:

```
Start work on Jira issue <issue-id>
```

Replace `<issue-id>` with the actual issue ID.  
The **GitKraken MCP Server** will call the `issues_get_detail` tool, fetch issue details, check your workspace, and create a new branch for that issue.

Depending on your agent and model, your IDE may then modify related files or call tools such as `git_status` and `git_add_or_commit`.

### Debug and Understand History

**Use this when** you need to identify who changed a specific function and why, and want the context summarized automatically. **Use GitLens inline blame instead when** you already know the file and line and want a quick visual reference in your editor.

While [GitLens](https://www.gitkraken.com/gitlens) helps visualize commit history, it depends on meaningful commit messages. You can use the **GitKraken MCP Server** to investigate change history automatically.

Ask:

```
Who last changed the <function-name> function and why?
```

The **GitKraken MCP Server** will call the `git_blame` tool and relevant Git commands to gather and summarize context for you.

### Next Steps

Now that you understand how to use the GitKraken MCP Server, explore more workflows:

- Check out the [Tools Reference](/mcp/MCP-tools-reference) for a list of available tools and usage examples.  
- Visit the [Prompt Reference](/mcp/MCP-prompts-reference) for predefined prompts you can reuse or adapt.  

By combining these tools and prompts, you can build your own automated GitKraken MCP workflows to simplify repetitive development tasks.

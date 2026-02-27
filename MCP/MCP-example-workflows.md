---
title: Example Workflows
description: A collection of example workflows that demonstrate how to use the GitKraken MCP (Model Context Protocol) Server to automate common development tasks.
taxonomy:
  category: MCP
---

<kbd>Last updated: February 2026</kbd>

Explore these example workflows to learn how the GitKraken MCP (Model Context Protocol) Server can automate everyday development tasks. Use them as inspiration to craft your own time-saving workflows.

### Query Jira and GitHub for Assigned Issues

Manually checking Jira or GitHub for your assigned issues can be tedious. Instead, ask your agent:

```
What issues are assigned to me?
```

This prompt uses the `issues_assigned_to_me` tool to query Jira and/or GitHub and list all issues assigned to your account.

### Start Work on a Jira Issue

To start work on a specific task, use the following prompt:

```
Start work on Jira issue <issue-id>
```

Replace `<issue-id>` with the actual issue ID.  
The MCP Server will call the `issues_get_detail` tool, fetch issue details, check your workspace, and create a new branch for that issue.

Depending on your agent and model, your IDE may then modify related files or call tools such as `git_status` and `git_add_or_commit`.

### Debug and Understand History

While [GitLens](https://www.gitkraken.com/gitlens) helps visualize commit history, it depends on meaningful commit messages. You can use the MCP Server to investigate change history automatically.

Ask:

```
Who last changed the <function-name> function and why?
```

The MCP Server will call the `git_blame` tool and relevant Git commands to gather and summarize context for you.

### Next Steps

Now that you understand how to use the GitKraken MCP Server, explore more workflows:

- Check out the [Tools Reference](/mcp/MCP-tools-reference) for a list of available tools and usage examples.  
- Visit the [Prompt Reference](/mcp/MCP-prompts-reference) for predefined prompts you can reuse or adapt.  

By combining these tools and prompts, you can build your own automated GitKraken MCP workflows to simplify repetitive development tasks.


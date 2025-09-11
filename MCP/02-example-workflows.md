---
title: Example Workflows
description: A collection of example workflows that demonstrate how to use the GitKraken MCP (Model Context Protocol) Server to automate common tasks.
taxonomy:
  category: MCP
---

Here are a couple of example workflows that demonstrate how to use the GitKraken MCP (Model Context Protocol) Server to automate common tasks. This is not an exhaustive list, but rather a starting point for you to craft your own workflows.

## Query Jira and/or GitHub for Issues Assigned to You

Going out to Jira/GitHub/etc just to find issues assigned to you can be a tedious task. To make it easier, simply type into a prompt, `What issues are assigned to me?`.

This will use the `issues_assigned_to_me` tool to query Jira and/or GitHub for issues assigned to you and list them out in the response.

## Start Work on a Specific Jira Issue

You can start work on a new task with the prompt `Start work on Jira issue <issue-id>`. Make sure to replace `<issue-id>` the actual issue ID that you are assigned.

This will call the `issues_get_detail` tool and pull the issue details, check your workspace, and create a new branch for that specific issue.

Depending on the Agent and model, your IDE may then start modifying your files and then it will call tools like `git_status` and `git_add_or_commit`.

## Debug and Understand History

GitLens is a fantastic tool to see details about who changed what, when, and why. But, it relies on devs providing good commit messages and context.

Instead, you can use the MCP server to do the research for you. find a function and ask `Who last changed the <function-name> function and why?`.

This will call the `git_blame` tool as well as some native git commands to get the details for you.

## Next Steps

Now that you have a better understanding of how to use the MCP server, you can start crafting your own workflows. We recommend checking out the [Tools Reference](03-tools-reference.md) to see what tools are available and how to use them. You can also check the [Prompt Reference](04-prompt-reference.md) for a list of all the prompts available. Prompts are self-contained workflows that will save you the effort of typing it all out yourself.

---
title: "Set Up the GitKraken MCP Server in Claude Code"
description: "Install and configure the GitKraken MCP Server in Claude Code using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [claude-code]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [claude-code, claude-mcp-add, stdio, gk-mcp, gitkraken-cli]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Claude Code"
    nav_order: 10
    nav_parent: "mcp-getting-started"
    page_type: "content"
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To manually install the GitKraken MCP server in **Claude Code**, use the command line:

1. Open your terminal and run the following command

```bash
claude
```

2. In the Claude REPL, enter the following command to add the GitKraken MCP Server

```bash
claude mcp add -t stdio gitkraken gk mcp
```

<figure>
  <img src="/wp-content/uploads/claudecode-mcp-add.png" class="help-center-img img-bordered" alt="Claude Code showing mcp installation ." />
  <figcaption style="text-align: center; color: #888">Use Claude Code to add a new MCP server.</figcaption>
</figure>

3. Verify the MCP server is installed correctly

```bash
claude mcp list
```

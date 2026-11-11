---
title: "Set Up the GitKraken MCP Server in Gemini CLI"
description: "Install and configure the GitKraken MCP Server in Gemini CLI using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [gemini-cli]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [gemini-cli, google, gemini-mcp-add, stdio, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Gemini CLI"
    nav_order: 40
    nav_parent: "mcp-getting-started"
    page_type: "content"
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To manually install the GitKraken MCP Server in **Gemini CLI**, use the command line: 

1. Open your terminal and run the following command 

```bash
gemini
```

2. In the Gemini CLI, enter the following command to add the GitKraken MCP Server

```bash
gemini mcp add -t stdio gitkraken gk mcp
```

3. Verify the MCP server is installed correctly

```bash
gemini mcp list
```

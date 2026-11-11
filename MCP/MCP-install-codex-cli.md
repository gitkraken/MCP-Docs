---
title: "Set Up the GitKraken MCP Server in OpenAI Codex CLI"
description: "Install and configure the GitKraken MCP Server in OpenAI Codex CLI using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [codex-cli]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [codex-cli, openai, codex-mcp-add, gk-mcp, gitkraken-cli]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "OpenAI Codex CLI"
    nav_order: 20
    nav_parent: "mcp-getting-started"
    page_type: "content"
    home_group: "clients"
    home_order: 20
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To manually install the GitKraken MCP server in **Codex CLI**, use the command line: 

1. Open your terminal and run the following command

```bash
codex
```

2. In the Codex CLI, enter the following command to add the GitKraken MCP Server

```bash
codex mcp add gitkraken -- gk mcp
```

3. Verify the MCP server is installed correctly

```bash
codex mcp list
```

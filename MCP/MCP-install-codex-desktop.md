---
title: "Set Up the GitKraken MCP Server in Codex Desktop"
description: "Install and configure the GitKraken MCP Server in Codex Desktop using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [codex-desktop]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [codex-desktop, openai, mcp-servers, stdio, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Codex Desktop"
    nav_order: 30
    nav_parent: "mcp-getting-started"
    page_type: "content"
    home_group: "clients"
    home_order: 30
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To manually install the GitKraken MCP server in **Codex Desktop**:

1. From the sidebar, open **Settings**, then navigate to the **MCP Servers** tab.

2. Select **Add Server**

3. Select the STDIO tab and please insert the following 

| Field       | Value       |
| ----------- | ----------- |
| Name        | gitkraken   |
| Command     | gk          |
| Arguments   | mcp         |

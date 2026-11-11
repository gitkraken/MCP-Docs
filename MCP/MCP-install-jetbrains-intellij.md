---
title: "Set Up the GitKraken MCP Server in JetBrains IntelliJ"
description: "Install and configure the GitKraken MCP Server in JetBrains IntelliJ using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [jetbrains-intellij]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [jetbrains, intellij, ai-assistant, mcp-json, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "JetBrains IntelliJ"
    nav_order: 100
    nav_parent: "mcp-getting-started"
    page_type: "content"
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To add the GitKraken MCP Server to **JetBrains IntelliJ**:

> [JetBrains AI Assistant is required.](https://www.jetbrains.com/ai-assistant/)

1. Navigate to **Settings > Tools > AI Assistant > Model Context Protocol (MCP)**.
2. Click **Add** to create a new MCP server configuration.
3. In the dialog, select **As JSON** from the dropdown.
4. Paste the following configuration:

```json
{
  "mcpServers": {
    "gitkraken": {
      "command": "gk",
      "args": ["mcp"]
    }
  }
}
```

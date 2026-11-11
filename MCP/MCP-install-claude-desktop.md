---
title: "Set Up the GitKraken MCP Server in Claude Desktop"
description: "Install and configure the GitKraken MCP Server in Claude Desktop using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [claude-desktop]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [claude-desktop, claude-desktop-config, developer-settings, mcp-json, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Claude Desktop"
    nav_order: 70
    nav_parent: "mcp-getting-started"
    page_type: "content"
    home_group: "clients"
    home_order: 70
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To configure the GitKraken MCP Server in **Claude Desktop**:

1. From the app toolbar, open **Settings**, then navigate to the **Developer** tab.

<figure>
  <img src="/wp-content/uploads/claude-settings.png" class="help-center-img img-bordered" alt="Claude Desktop settings window showing Developer tab." />
  <figcaption style="text-align: center; color: #888">Open the Developer tab in Claude Desktop settings.</figcaption>
</figure>

2. Click **Edit Config** to open the `claude_desktop_config.json` directory.
3. Edit the file and paste in the following JSON:

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

4. Save the file and restart Claude Desktop.

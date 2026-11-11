---
title: "Set Up the GitKraken MCP Server in Google Antigravity"
description: "Install and configure the GitKraken MCP Server in Google Antigravity using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [antigravity]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [antigravity, google, manage-mcp-servers, mcp-json, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Google Antigravity"
    nav_order: 110
    nav_parent: "mcp-getting-started"
    page_type: "content"
    home_group: "clients"
    home_order: 110
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To add the GitKraken MCP Server to **Google Antigravity IDE**:

1. Navigate to the agent pane, located to the right of the workspace, and click the ellipsis **...**.
2. Select **MCP Servers** from the drop down. 

<figure>
  <img src="/wp-content/uploads/antigravity-mcp-server.png" class="help-center-img img-bordered" alt="Antigravity MCP server" />
  <figcaption style="text-align: center; color: #888">Antigravity MCP Servers</figcaption>
</figure>

3. Remaining in the agent pane, click **Manage MCP Servers**.

<figure>
  <img src="/wp-content/uploads/antigravity-manage-mcp.png" class="help-center-img img-bordered" alt="Antigravity Manage MCP Servers" />
  <figcaption style="text-align: center; color: #888">Antigravity Manage MCP Servers</figcaption>
</figure>

4. On the new Manage MCPs file window, in the middle pane, click **View raw config**.

<figure>
  <img src="/wp-content/uploads/antigravity-view-raw.png" class="help-center-img img-bordered" alt="Antigravity View raw config" />
  <figcaption style="text-align: center; color: #888">Antigravity View raw config</figcaption>
</figure>

5. Paste the following json to the config file. 

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
6. Verify the GitKraken MCP Tools are enabled. 

<figure>
  <img src="/wp-content/uploads/antigravity-gitkraken-enabled.png" class="help-center-img img-bordered" alt="Antigravity GitKraken Server Enabled" />
  <figcaption style="text-align: center; color: #888">Antigravity GitKraken Tools Enabled</figcaption>
</figure>

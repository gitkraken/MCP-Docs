---
title: "Set Up the GitKraken MCP Server in Kiro"
description: "Install and configure the GitKraken MCP Server in Kiro using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [kiro]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [kiro, mcp-json, user-config, gk-mcp, gitkraken-cli]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Kiro IDE"
    nav_order: 90
    nav_parent: "mcp-getting-started"
    page_type: "content"
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To add MCP to the **Kiro Agentic IDE**:

1. Click the Kiro icon in the left panel. 

<figure>
  <img src="/wp-content/uploads/kiro_button.png" class="help-center-img img-bordered" alt="Kiro Chat Icon" />
  <figcaption style="text-align: center; color: #888">Kiro Icon</figcaption>
</figure>

2. In the Kiro chat window, at the bottom, navigate to the MCP panel and click the **Open MCP Config** button.

<figure>
  <img src="/wp-content/uploads/kiro_configure_mcp.png" class="help-center-img img-bordered" alt="Kiro open MCP config" />
  <figcaption style="text-align: center; color: #888">Kiro MCP Configuration</figcaption>
</figure>

3. On the **mcp.json** window click **User Config**

4. Below the **uvx** entry (the default kiro environment) please add the following and save:

```json
"gitkraken": {
      "command": "gk",
      "args": ["mcp"],
      "env": {},
      "disabled": false,
      "autoApprove": []
    }
```
Your final json should look like the following: 

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx", 
      "args": ["mcp-server-fetch"],
      "env": {},
      "disabled": true,
      "autoApprove": []
    },
    "gitkraken": {
      "command": "gk",
      "args": ["mcp"],
      "env": {},
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

<figure>
  <img src="/wp-content/uploads/kiro_final_settings.png" class="help-center-img img-bordered" alt="Kiro final JSON settings" />
  <figcaption style="text-align: center; color: #888">Kiro MCP JSON example</figcaption>
</figure>

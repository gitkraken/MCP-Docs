---
title: "Set Up the GitKraken MCP Server in Amazon Q Developer"
description: "Install and configure the GitKraken MCP Server in Amazon Q Developer using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [amazon-q-developer]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [amazon-q-developer, q-chat, stdio, tool-permissions, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Amazon Q Developer"
    nav_order: 80
    nav_parent: "mcp-getting-started"
    page_type: "content"
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To configure GitKraken MCP in **Amazon Q Developer**:

1. Inside of the Q Chat window, click the **Configure MCP Server** icon. 

<figure>
  <img src="/wp-content/uploads/q_mcp_config.png" class="help-center-img img-bordered" alt="Q Developer configure MCP Server." />
  <figcaption style="text-align: center; color: #888">Q Developer configure MCP Server.</figcaption>
</figure>

2. On the new MCP Servers pane, click the **+** icon on the top right. 

<figure>
  <img src="/wp-content/uploads/q_mcp_add.png" class="help-center-img img-bordered" alt="Q Developer add MCP Server." />
  <figcaption style="text-align: center; color: #888">Q Developer add MCP server.</figcaption>
</figure>

3. Please insert the following: 

| Field       | Value       |
| ----------- | ----------- |
| Name        | gitkraken   |
| Transport   | stdio       |
| Command     | gk          |
| Arguments   | mcp         |

4. Click **Save** to finish adding the MCP server.

5. After completing the setup, or as you need, you can edit permissions for individual toolsets to either Ask, Always Allow or Deny. By default, Q will always ask in the chat. 

<figure>
  <img src="/wp-content/uploads/q_mcp_perm.png" class="help-center-img img-bordered" alt="Q Developer Permissions per toolset." />
  <figcaption style="text-align: center; color: #888">Q Developer toolset permissions.</figcaption>
</figure>

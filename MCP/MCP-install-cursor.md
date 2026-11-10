---
title: "Set Up the GitKraken MCP Server in Cursor"
description: "Install and configure the GitKraken MCP Server in Cursor, through the GitLens command palette or a manual JSON config."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [cursor]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [cursor, gitlens, mcp-settings, mcp-json, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Cursor"
    nav_order: 60
    nav_parent: "mcp-getting-started"
    page_type: "content"
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To install the GitKraken MCP Server in **Cursor**:

**Option A: GitLens command palette (recommended if you have GitLens installed):**

Run **GitLens: Install GitKraken MCP Server** from the command palette. This handles all configuration automatically.

**Option B: Manual JSON config:**

1. Open the command palette and select **View: Open MCP Settings**.

<figure>
  <img src="/wp-content/uploads/cursor-mcp-settings.png" class="help-center-img img-bordered" alt="Cursor IDE command palette showing View: Open MCP Settings." />
  <figcaption style="text-align: center; color: #888">Access MCP settings from the command palette in Cursor.</figcaption>
</figure>

2. If no servers are installed, click **Add Custom MCP** to begin setup.

<figure>
  <img src="/wp-content/uploads/cursor-mcp-add.png" class="help-center-img img-bordered" alt="Cursor MCP settings screen showing Add Custom MCP button." />
  <figcaption style="text-align: center; color: #888">Add a new custom MCP server in Cursor.</figcaption>
</figure>

3. Add the GitKraken MCP Server configuration to the JSON file:

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

> **Note:** [Windows users must have the latest Microsoft Visual C++ Redistributable installed.](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

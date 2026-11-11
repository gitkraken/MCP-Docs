---
title: "Set Up the GitKraken MCP Server in VS Code"
description: "Install and configure the GitKraken MCP Server in VS Code using the GitKraken CLI."
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [vscode]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [vscode, mcp-add-server, stdio, agent-mode, copilot, gk-mcp]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "VS Code"
    nav_order: 50
    nav_parent: "mcp-getting-started"
    page_type: "content"
---

<kbd>Last updated: March 2026</kbd>

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

To install the GitKraken MCP Server in **VS Code**, use the command palette:

1. Open the command palette and select **MCP: Add server...**

<figure>
  <img src="/wp-content/uploads/vscode-add-server.png" class="help-center-img img-bordered" alt="Command palette showing MCP: Add server option in VS Code." />
  <figcaption style="text-align: center; color: #888">Use the VS Code command palette to add a new MCP server.</figcaption>
</figure>

2. When prompted, select **stdio** as the server type.

<figure>
  <img src="/wp-content/uploads/vscode-stdio.png" class="help-center-img img-bordered" alt="VS Code dialog for selecting MCP server type as stdio." />
  <figcaption style="text-align: center; color: #888">Select <strong>stdio</strong> as the server type.</figcaption>
</figure>

3. In the next prompt, enter the following command:

```bash
gk mcp
```

<figure>
  <img src="/wp-content/uploads/vscode-stdio-command.png" class="help-center-img img-bordered" alt="VS Code prompt showing gk mcp command entry." />
  <figcaption style="text-align: center; color: #888">Enter <code>gk mcp</code> as the server command.</figcaption>
</figure>

4. Provide a name for the server and press **Enter**.

<figure>
  <img src="/wp-content/uploads/vscode-stdio-name.png" class="help-center-img img-bordered" alt="VS Code dialog for naming the MCP server." />
  <figcaption style="text-align: center; color: #888">Assign a name to the GitKraken MCP Server.</figcaption>
</figure>

5. To verify, make sure you are in **Agent Mode**, then click the **tools icon** in the Agent Mode toolbar to confirm the GitKraken MCP Server appears in the list.

<figure>
  <img src="/wp-content/uploads/copilot-prompt.png" class="help-center-img img-bordered" alt="Tools icon in VS Code Copilot Agent Mode for MCP settings." />
  <figcaption style="text-align: center; color: #888">Click the tools icon in Agent Mode to confirm the GitKraken MCP Server is listed.</figcaption>
</figure>

> **Note:** [MCP Tools must be enabled](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_enable-mcp-support-in-vs-code) in VS Code settings for the server to function.

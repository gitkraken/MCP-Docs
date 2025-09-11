---
title: Installation
description: Detailed instructions on how to install the GitKraken MCP Server in various IDEs and editors.
taxonomy:
  category: MCP
---

## Getting Started

Getting started is easy in a variety of ways.

- [GitLens](#gitlens)
- [GitKraken CLI](#gitkraken-cli)

### GitLens

With the latest version of [GitLens](https://www.gitkraken.com/gitlens) you can install the MCP Server easily from the command palette in VS Code, Cursor, and other IDEs based on VS Code.

![](../_images/install-gitlens.png)

This will handle all of the configuration for you. You can then inspect the list of available MCP servers by making sure you are in Agent mode and clicking the gear icon in the bottom right corner of the copilot side panel.

![](../_images/copilot-prompt.png)

Then, scroll through the list and you will see "MCP Server: GitKraken (bundled with GitLens)".

![](../_images/gitlens-bundled-tool.png)

### GitKraken CLI (gitkraken-cli)

Download the latest release from [https://www.gitkraken.com/cli](https://www.gitkraken.com/cli)

After installation, run `gk auth login` in your terminal to authenticate with your GitKraken account.

After authentication, you will need to add the MCP server to your preferred agent.

#### VS Code

To install the MCP server into VS Code, you can run "MCP: Add server..." from the command palette.

![](../_images/vscode-add-server.png)

In the following prompts, select "stdio" as the type of server.

![](../_images/vscode-stdio.png)

In the next prompt, enter the command `gk mcp`.

![](../_images/vscode-stdio-command.png)

Finally, give the server a name and press enter.

![](../_images/vscode-stdio-name.png)

You can then inspect the list of available MCP servers and tools by making sure you are in Agent mode and clicking the gear icon in the bottom right corner of the copilot side panel.

![](../_images/copilot-prompt.png)

#### Cursor

Installing an MCP server into Cursor is easy. Using the command palette, select "View: Open MCP Settings".

![](../_images/cursor-mcp-settings.png)

If you have no servers installed yet, you will see this screen. Simply click the "Add Custom MCP" button to get started.

![](../_images/cursor-mcp-add.png)

Then, you will need to add the GitKraken MCP server to the JSON file. You can do this by copying the following JSON and pasting it.

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

#### Claude Desktop

Claude's MCP server process is a bit different than the IDEs, but is still fairly simple.

First, open the settings from the App toolbar and then click into the "Developer" tab.

![](../_images/claude-settings.png)

Once you are in the developer tab, click the "Edit Config" button. This will open a directory containing `claude_desktop_config.json`.

Edit that file using your favorite text editor and paste in the following JSON.

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

Save the file and restart Claude.

## Next Steps

Once you are done setting up the MCP server, head over to our [Example Workflows](02-example-workflows.md) for inspiration on how to use the MCP server to make your day-to-day tasks easier and less tedious.

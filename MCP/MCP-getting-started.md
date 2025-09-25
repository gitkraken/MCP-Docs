---
title: Getting Started
description: Detailed instructions on how to install the GitKraken MCP Server in various IDEs and editors.
taxonomy:
  category: MCP
---

Getting started is easy in a variety of ways.

- [GitLens](#gitlens)
- [GitKraken CLI](#gitkraken-cli)

### GitLens

The GitKraken MCP server is bundled with [GitLens](https://www.gitkraken.com/gitlens) on VSCode versions `1.101.0` and greater. No action is needed to get started. 

For VSCode versions older than `1.101.0` you can install the MCP Server easily from the command palette in VS Code, Cursor, and other IDEs based on VS Code.

<img src="/wp-content/uploads/install-gitlens.png" class="help-center-img img-bordered">

You can also install the MCP server using one of these convenient deeplinks:

- [VS Code](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=vscode)
- [VS Code Insiders](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=vscode-insiders)
- [Cursor](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=cursor)
- [Windsurf](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=windsurf)
- [Trae](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=trae)

The command and links will handle all of the configuration for you. You can then inspect the list of available MCP servers by making sure you are in Agent mode and clicking the gear icon in the bottom right corner of the copilot side panel.

<img src="/wp-content/uploads/copilot-prompt.png" class="help-center-img img-bordered">

Then, scroll through the list and you will see "MCP Server: GitKraken (bundled with GitLens)".

<img src="/wp-content/uploads/gitlens-bundled-tool.png" class="help-center-img img-bordered">

### GitKraken CLI 

Download the latest release from [https://www.gitkraken.com/cli](https://www.gitkraken.com/cli)

After installation, run `gk auth login` in your terminal to authenticate with your GitKraken account.

After authentication, you will need to add the MCP server to your preferred agent.

#### VS Code

To install the MCP server into VS Code, you can run "MCP: Add server..." from the command palette.

<img src="/wp-content/uploads/vscode-add-server.png" class="help-center-img img-bordered">

In the following prompts, select "stdio" as the type of server.

<img src="/wp-content/uploads/vscode-stdio.png" class="help-center-img img-bordered">

In the next prompt, enter the command `gk mcp`.

<img src="/wp-content/uploads/vscode-stdio-command.png" class="help-center-img img-bordered">

Finally, give the server a name and press enter.

<img src="/wp-content/uploads/vscode-stdio-name.png" class="help-center-img img-bordered">

You can then inspect the list of available MCP servers and tools by making sure you are in Agent mode and clicking the gear icon in the bottom right corner of the copilot side panel.

<img src="/wp-content/uploads/copilot-prompt.png" class="help-center-img img-bordered">

**Please Note:** [MCP Tools must be enabled](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_enable-mcp-support-in-vs-code) in VSCode settings to function.

#### Cursor

Installing an MCP server into Cursor is easy. Using the command palette, select "View: Open MCP Settings".

<img src="/wp-content/uploads/cursor-mcp-settings.png" class="help-center-img img-bordered">

If you have no servers installed yet, you will see this screen. Simply click the "Add Custom MCP" button to get started.

<img src="/wp-content/uploads/cursor-mcp-add.png" class="help-center-img img-bordered">

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

**Please Note:** [Windows users should have the latest Microsoft Visual C++ Redistributable installed.](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) 

#### Claude Desktop

Claude's MCP server process is a bit different than the IDEs, but is still fairly simple.

First, open the settings from the App toolbar and then click into the "Developer" tab.

<img src="/wp-content/uploads/claude-settings.png" class="help-center-img img-bordered">

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

#### JetBrains IntelliJ

[JetBrains AI Assistant is required.](https://www.jetbrains.com/ai-assistant/)

Navigate to Go to Settings > Tools > AI Assistant > Model Context Protocol (MCP)

Click Add to add a new MCP server configuration.

In the New MCP Server dialog, using the dropdown, select **As JSON**.

Paste the following JSON

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

## Next Steps

Once you are done setting up the MCP server, head over to our [Example Workflows](/mcp/MCP-example-workflows) for inspiration on how to use the MCP server to make your day-to-day tasks easier and less tedious.

---
title: Getting Started with the GitKraken MCP Server
description: Learn how to install the GitKraken MCP Server in GitLens, VS Code, and other supported editors.
taxonomy:
  category: MCP
---

<kbd>Last updated: October 2025</kbd>

You can install the GitKraken MCP Server through GitLens or the GitKraken CLI. This guide walks you through installation in supported IDEs.

- [Install via GitLens](#install-via-gitlens)
- [GitKraken CLI](#gitkraken-cli)

### Install via GitLens

The GitKraken MCP Server is bundled with [GitLens](https://www.gitkraken.com/gitlens) for VS Code version `1.101.0` and later. **No manual setup is required.**

If you’re using an older version of VS Code (prior to `1.101.0`), install the MCP Server from the command palette in VS Code, Cursor, Windsurf, or other VS Code–based IDEs.

<figure>
  <img src="/wp-content/uploads/install-gitlens.png" class="help-center-img img-bordered" alt="Install the MCP Server from the command palette in GitLens." />
  <figcaption style="text-align: center; color: #888">Open the command palette to install the GitKraken MCP Server.</figcaption>
</figure>

You can also install the MCP Server directly using the following deeplinks:

- [VS Code](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=vscode)
- [VS Code Insiders](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=vscode-insiders)
- [Cursor](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=cursor)
- [Windsurf](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=windsurf)
- [Trae](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=trae)

Each link handles all required configuration automatically.

#### Verify installation

1. Ensure you are in **Agent Mode**.
2. Click the **gear icon** in the lower-right corner of the Copilot side panel.

<figure>
  <img src="/wp-content/uploads/copilot-prompt.png" class="help-center-img img-bordered" alt="Copilot gear icon in VS Code for MCP configuration." />
  <figcaption style="text-align: center; color: #888">Access MCP settings from the Copilot panel gear icon.</figcaption>
</figure>

3. Scroll through the list of available MCP servers.
4. Locate **MCP Server: GitKraken (bundled with GitLens)**.

<figure>
  <img src="/wp-content/uploads/gitlens-bundled-tool.png" class="help-center-img img-bordered" alt="MCP Server: GitKraken listed in bundled GitLens tools." />
  <figcaption style="text-align: center; color: #888">The GitKraken MCP Server appears in the bundled tools list.</figcaption>
</figure>


### GitKraken CLI

You can also install the GitKraken MCP Server using the [GitKraken CLI](https://www.gitkraken.com/cli). Follow these steps to set up the MCP Server across different IDEs.

After installation, run the following command in your terminal to authenticate with your GitKraken account:

```bash
gk auth login
```

Once authenticated, add the MCP server to your preferred agent.

---

#### VS Code

To install the MCP server in **VS Code**, use the command palette:

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

5. To verify, make sure you are in **Agent Mode**, then click the **gear icon** in the lower-right corner of the Copilot side panel.

<figure>
  <img src="/wp-content/uploads/copilot-prompt.png" class="help-center-img img-bordered" alt="Copilot side panel gear icon for MCP settings in VS Code." />
  <figcaption style="text-align: center; color: #888">Access the list of installed MCP servers from the Copilot panel.</figcaption>
</figure>

> **Note:** [MCP Tools must be enabled](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_enable-mcp-support-in-vs-code) in VS Code settings for the server to function.

---

#### Cursor

To install the MCP server in **Cursor**:

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

3. Add the GitKraken MCP server configuration to the JSON file:

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

---

#### Claude Desktop

To configure the MCP server in **Claude Desktop**:

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

#### Amazon Q Developer

Inside of the Q Chat window, click the 'Configure MCP Server' icon. 

<figure>
  <img src="/wp-content/uploads/q_mcp_config.png" class="help-center-img img-bordered" alt="Q Developer configure MCP Server." />
  <figcaption style="text-align: center; color: #888">Q Developer configure MCP Server.</figcaption>
</figure>

On the new MCP Servers pane, click the '+' icon on the top right. 

<figure>
  <img src="/wp-content/uploads/q_mcp_add.png" class="help-center-img img-bordered" alt="Q Developer add MCP Server." />
  <figcaption style="text-align: center; color: #888">Q Developer add MCP server.</figcaption>
</figure>



Please insert the following: 

| Field       | Value       |
| ----------- | ----------- |
| Name        | gitkraken   |
| Transport   | stdio       |
| Command     | gk          |
| Arguments   | mcp         |

Click 'Save' to finish adding the MCP server.

After completing the setup, or as you need, you can edit permissions for individual toolsets to either Ask, Always Allow or Deny. By default, Q will always ask in the chat. 

<figure>
  <img src="/wp-content/uploads/q_mcp_perm.png" class="help-center-img img-bordered" alt="Q Developer Permissions per toolset." />
  <figcaption style="text-align: center; color: #888">Q Developer toolset permissions.</figcaption>
</figure>


#### JetBrains IntelliJ

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
## Next Steps

After completing installation, visit our [Example Workflows](/mcp/MCP-example-workflows) to explore how the GitKraken MCP Server can simplify your daily development tasks.
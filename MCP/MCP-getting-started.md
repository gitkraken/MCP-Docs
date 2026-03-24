---
title: Getting Started with the GitKraken MCP Server
description: Learn how to install the GitKraken MCP Server in GitLens, VS Code, and other supported editors.
product: "GitKraken MCP Server"
content_type: "install"
audience: "developer"
plan_required: "all"
status: "GA"
last_verified: "2026-03"
taxonomy:
  category: MCP
---

<kbd>Last updated: March 2026</kbd>

The GitKraken MCP Server gives AI agents direct access to your Git operations, issue tracking, and pull request workflows across GitHub, GitLab, Jira, and Azure DevOps. It works from any supported IDE or agent. Install it through GitLens or the GitKraken CLI.

- [Install via GitLens](#install-via-gitlens)
- [Install via GitKraken CLI](#install-via-gitkraken-cli)

***

## Quick Start

The fastest way to install the GitKraken MCP Server is through GitLens in VS Code or Cursor. In many cases, updating GitLens is all that's needed; the server installs automatically.

> **Requires:** VS Code 1.101.0 or later and GitLens 17.5 or later. Earlier versions require manual setup via the command palette. See [Install via GitLens](#install-via-gitlens) below.

**Which install method is right for you?**

- **Use the GitLens path** if you work in VS Code, Cursor, Windsurf, Trae, or another VS Code–based IDE and want zero manual configuration.
- **Use the GitKraken CLI path** if you work in Claude Desktop, JetBrains IntelliJ, Amazon Q Developer, Kiro, or Google Antigravity, or if you need to configure the server once across multiple agents.

| IDE | Install Method | Prerequisites |
|---|---|---|
| VS Code | GitLens (recommended) or CLI | VS Code 1.101.0+, GitLens 17.5+ |
| VS Code Insiders | GitLens deeplink or CLI | VS Code 1.101.0+, GitLens 17.5+ |
| Cursor | GitLens (recommended) or CLI | Windows: VC++ Redistributable |
| Windsurf | GitLens deeplink | None |
| Trae | GitLens deeplink | None |
| Claude Desktop | CLI (manual JSON) | gk CLI authenticated |
| Amazon Q Developer | CLI (form entry) | gk CLI authenticated |
| Kiro | CLI (manual JSON) | gk CLI authenticated |
| JetBrains IntelliJ | CLI (manual JSON) | JetBrains AI Assistant |
| Google Antigravity | CLI (manual JSON) | gk CLI authenticated |

Once updated, see [Verify installation](#verify-installation) below to confirm the server is active.

To use the GitKraken CLI instead, authenticate first:

```bash
gk auth login
```

Then add the **GitKraken MCP Server** to your preferred agent using the `gk mcp` command. Each IDE requires a one-time stdio transport configuration. See the IDE-specific steps below.

***

## Install via GitLens

The GitKraken MCP Server is bundled with [GitLens](https://www.gitkraken.com/gitlens) version `17.5` and later. In most cases, updating GitLens is sufficient. The server installs automatically with no additional configuration.

If the server does not install automatically, run the following command from the command palette in VS Code, Cursor, Windsurf, or any other VS Code–based IDE:

**GitLens: Install GitKraken MCP Server**

<figure>
  <img src="/wp-content/uploads/install-gitlens.png" class="help-center-img img-bordered" alt="Install the MCP Server from the command palette in GitLens." />
  <figcaption style="text-align: center; color: #888">Search for "GitLens: Install GitKraken MCP Server" in the command palette.</figcaption>
</figure>

You can also install directly using the following deeplinks. Each link handles all configuration automatically:

- [VS Code](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=vscode)
- [VS Code Insiders](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=vscode-insiders)
- [Cursor](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=cursor)
- [Windsurf](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=windsurf)
- [Trae](https://gitkraken.dev/deeplink?product=gitlens&path=/link/command/install-mcp&ide=trae)

Each link handles all required configuration automatically.

#### Verify installation

1. Ensure you are in **Agent Mode**.
2. Run a test prompt: `What issues are assigned to me?` A working server will display an approval request for the `issues_assigned_to_me` tool.
3. To inspect all available tools, click the **tools icon** in the Agent Mode toolbar.

<figure>
  <img src="/wp-content/uploads/copilot-prompt.png" class="help-center-img img-bordered" alt="Tools icon in VS Code Copilot Agent Mode for MCP configuration." />
  <figcaption style="text-align: center; color: #888">Click the tools icon in Agent Mode to see all available MCP tools.</figcaption>
</figure>

4. Scroll to the bottom of the list and confirm **MCP Server: GitKraken (bundled with GitLens)** is present.

<figure>
  <img src="/wp-content/uploads/gitlens-bundled-tool.png" class="help-center-img img-bordered" alt="MCP Server: GitKraken listed in bundled GitLens tools." />
  <figcaption style="text-align: center; color: #888">The GitKraken MCP Server appears in the bundled tools list.</figcaption>
</figure>

***

## Install via GitKraken CLI

You can also install the GitKraken MCP Server using the [GitKraken CLI](https://www.gitkraken.com/cli). Follow these steps to set up the MCP Server across different IDEs.

After installation, run the following command in your terminal to authenticate with your GitKraken account:

```bash
gk auth login
```

Once authenticated, add the **GitKraken MCP Server** to your preferred agent.

---

### Third Party Tools Manual Setup

> **Prerequisites:** The [GitKraken CLI](https://www.gitkraken.com/cli) must be installed and authenticated before configuring any IDE. Run `gk auth login` in your terminal first.

#### VS Code

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

---

#### Cursor

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

---

#### Claude Desktop

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

---

#### Amazon Q Developer

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

---

#### Kiro IDE 

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

---

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

---

#### Google Antigravity

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


## Next Steps

After completing installation, visit our [Example Workflows](/mcp/MCP-example-workflows) to see how the GitKraken MCP Server automates Git operations, issue tracking, and pull request workflows directly from your AI agent.

<style>
pre{position:relative;min-height:3.5em}
.copy-btn{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:11px;font-family:sans-serif;background:rgba(128,128,128,.15);border:1px solid rgba(128,128,128,.25);border-radius:4px;cursor:pointer;color:#aaa;opacity:0;transition:opacity .15s,background .15s,color .15s;line-height:1.5;z-index:1}
pre:hover .copy-btn{opacity:1}
.copy-btn:hover{background:rgba(128,128,128,.3);color:#ddd}
.copy-btn.copied{color:#22c55e;border-color:rgba(34,197,94,.4)}
</style>
<script>(function(){function cp(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);var x=document.createElement('textarea');x.value=t;x.style.cssText='position:fixed;opacity:0';document.body.appendChild(x);x.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(x);return Promise.resolve()}function init(){document.querySelectorAll('pre').forEach(function(p){if(p.querySelector('.copy-btn'))return;var b=document.createElement('button');b.className='copy-btn';b.setAttribute('aria-label','Copy code');b.textContent='Copy';p.appendChild(b);b.addEventListener('click',function(){var el=p.querySelector('code')||p;cp(el.innerText.replace(/\n$/,'')).then(function(){b.textContent='Copied!';b.classList.add('copied');setTimeout(function(){b.textContent='Copy';b.classList.remove('copied')},2000)})})})}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init()})()</script>

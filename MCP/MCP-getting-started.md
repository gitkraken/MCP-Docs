---
title: Getting Started with the GitKraken MCP Server
description: Learn how to install the GitKraken MCP Server in GitLens, VS Code, and other supported editors.
product: "GitKraken MCP Server"
feature: "Getting Started"
content_type: "install"
audience: "developer"
plan_required: "all"
git_hosts: [n/a]
integrations: [vscode, vscode-insiders, cursor, windsurf, trae, claude-desktop, amazon-q-developer, kiro, jetbrains-intellij, antigravity, claude-code, codex-cli, codex-desktop, gemini-cli]
status: "GA"
last_verified: "2026-03"
llms_include: true
tags: [install, gitlens, gitkraken-cli, gk-mcp, stdio, mcp-configuration, deeplinks, verify-installation]
taxonomy:
  category: MCP
custom_fields:
    nav_category: "mcp-getting-started"
    nav_label: "Getting Started with MCP"
    nav_order: 10
    nav_parent: ""
    page_type: "main-index"
    anchor_map: ["claude-code|mcp-install-claude-code", "openai-codex-cli|mcp-install-codex-cli", "codex-desktop|mcp-install-codex-desktop", "gemini-cli|mcp-install-gemini-cli", "vs-code|mcp-install-vscode", "cursor|mcp-install-cursor", "claude-desktop|mcp-install-claude-desktop", "amazon-q-developer|mcp-install-amazon-q-developer", "kiro-ide|mcp-install-kiro", "jetbrains-intellij|mcp-install-jetbrains-intellij", "google-antigravity|mcp-install-antigravity"]
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
| Claude Code | CLI (manual JSON) | gk CLI authenticated |
| Codex CLI | CLI (manual JSON) | gk CLI authenticated |
| Codex Desktop | CLI (manual JSON) | gk CLI authenticated |
| Gemini CLI | CLI (manual JSON) | gk CLI authenticated |

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

Set up the GitKraken MCP Server in your client:

- [Claude Code](/mcp/mcp-install-claude-code/)
- [OpenAI Codex CLI](/mcp/mcp-install-codex-cli/)
- [Codex Desktop](/mcp/mcp-install-codex-desktop/)
- [Gemini CLI](/mcp/mcp-install-gemini-cli/)
- [VS Code](/mcp/mcp-install-vscode/)
- [Cursor](/mcp/mcp-install-cursor/)
- [Claude Desktop](/mcp/mcp-install-claude-desktop/)
- [Amazon Q Developer](/mcp/mcp-install-amazon-q-developer/)
- [Kiro IDE](/mcp/mcp-install-kiro/)
- [JetBrains IntelliJ](/mcp/mcp-install-jetbrains-intellij/)
- [Google Antigravity](/mcp/mcp-install-antigravity/)

## Next Steps

After completing installation, visit our [Example Workflows](/mcp/MCP-example-workflows) to see how the GitKraken MCP Server automates Git operations, issue tracking, and pull request workflows directly from your AI agent.

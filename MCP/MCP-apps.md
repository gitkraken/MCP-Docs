---
title: GitKraken MCP Apps
description: Learn how to set up and use GitKraken MCP Apps, which provide interactive Git Status and Git Graph experiences in compatible MCP hosts.
product: "GitKraken MCP Server"
content_type: "how-to"
audience: "developer"
plan_required: "all"
status: "preview"
last_verified: "2026-04"
taxonomy:
  category: MCP
---

<kbd>Last updated: April 2026</kbd>

**GitKraken MCP Apps** are interactive UI experiences exposed through the GitKraken MCP server. In compatible hosts, they replace plain tool output with a rendered app. The current apps focus on Git repository overview workflows: **Git Status** and **Git Graph**.

> **Requirements:**
> - [GitKraken CLI](https://www.gitkraken.com/cli) installed and authenticated (`gk auth login`)
> - GitKraken MCP server configured in your MCP host
> - A host that supports MCP App HTML resource rendering

***

## Quick Start

1. Install the [GitKraken CLI](https://www.gitkraken.com/cli) and authenticate: `gk auth login`
2. Install the MCP server for your host:

```bash
gk mcp install <client>
```

Replace `<client>` with your host name (for example, `vscode`, `cursor`, or `claude-desktop`). This generates and writes the configuration automatically. If your host is not supported by the install command, see [Manual configuration](#generate-the-configuration) below.

3. Restart the host application.
4. In a Git repository, ask `What changes are pending in the repo` to open the Git Status app, or `Visualize the commit history in a graph` to open the Git Graph app.

If your host supports MCP App rendering, the app opens instead of plain text output. If it does not, the base tool output appears normally.

***

## What are MCP Apps

GitKraken MCP Apps extend the base MCP tools with an interactive HTML interface. When a compatible host calls `git_status` or `git_graph`, the server attaches a UI resource to the tool result. The host renders that resource as an app.

There are three layers to understand:

| Layer | What it does |
|---|---|
| Base MCP tool (`git_status`, `git_graph`) | Works in any host, with or without app UI |
| MCP App resource (`ui://gk-cli/app/git-status`, `ui://gk-cli/app/git-graph`) | Registered when app assets are available |
| App-only helper (`app_tool_box`) | Dispatches actions used by the app frontend; not intended for direct agent use |

The `app_tool_box` helper is required for the app UI to function. If it is missing, the base tool still works, but the app will not load.

Both apps share one frontend bundle. `git_status` opens the overview in status mode; `git_graph` opens it in graph mode.

### Compatible hosts

MCP App rendering depends on host support. The following hosts are known to render the app UI:

- VS Code
- VS Code Insiders
- Claude Desktop (non-code tab)
- Codex

Rendering is not guaranteed in every host, even those listed above. Other MCP hosts can run the base `git_status` and `git_graph` tools and return plain output; they just may not render the interactive app. GitKraken is actively working to expand rendering support across additional coding agent providers.

***

## Set Up MCP Apps

### Install with the CLI (recommended)

The easiest way to configure MCP Apps is to run:

```bash
gk mcp install <client>
```

Replace `<client>` with the name of your host (for example, `vscode`, `cursor`, or `claude-desktop`). This command writes the configuration directly to the correct file for your host with no manual editing required.

### Generate the configuration

If `gk mcp install` does not support your host, generate a config snippet and add it manually:

```bash
gk mcp config <client>
```

Replace `<client>` with the name of your host, then place the generated configuration into the correct config file for your host.

### Config file locations

The following table lists the default config file path for each supported client.

**macOS and Linux**

| Host | Config file |
|---|---|
| VS Code | `~/.vscode/mcp.json` |
| VS Code Insiders | `~/.vscode-insiders/mcp.json` |
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Code | `~/.claude.json` |
| Cursor | `~/.cursor/mcp.json` |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` |
| Zed | `~/.config/zed/settings.json` |
| GitHub Copilot CLI | `~/.copilot/mcp-config.json` |
| Codex | `~/.codex/config.toml` |
| Gemini CLI | `~/.gemini/settings.json` |
| Antigravity | `~/.gemini/antigravity/mcp_config.json` |
| Kiro | `~/.kiro/settings/mcp.json` |
| JetBrains Copilot | `~/.local/share/github-copilot/intellij/mcp.json` |

**Windows**

| Host | Config file |
|---|---|
| VS Code | `%APPDATA%\Code\User\mcp.json` |
| VS Code Insiders | `%APPDATA%\Code - Insiders\User\mcp.json` |
| Claude Desktop | `%APPDATA%\Claude\claude_desktop_config.json` |
| Claude Code | `%USERPROFILE%\.claude.json` |
| Cursor | `%USERPROFILE%\.cursor\mcp.json` |
| Windsurf | `%USERPROFILE%\.codeium\windsurf\mcp_config.json` |
| Trae | `%APPDATA%\Trae\User\mcp.json` |
| Zed | `%APPDATA%\Zed\settings.json` |
| GitHub Copilot CLI | `%USERPROFILE%\.copilot\mcp-config.json` |
| Codex | `%USERPROFILE%\.codex\config.toml` |
| Gemini CLI | `%USERPROFILE%\.gemini\settings.json` |
| Antigravity | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` |
| Kiro | `%USERPROFILE%\.kiro\settings\mcp.json` |
| JetBrains Copilot | `%LOCALAPPDATA%\github-copilot\intellij\mcp.json` |

> **Note:** Codex uses TOML format, not JSON. Zed uses a different JSON path structure than most other hosts. VS Code uses a `/servers/GitKraken` path; most other JSON-based hosts use `/mcpServers/GitKraken`.

### Example configuration

For most JSON-based hosts, the configuration looks like this:

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

For VS Code specifically:

```json
{
  "servers": {
    "GitKraken": {
      "type": "stdio",
      "command": "gk",
      "args": ["mcp"]
    }
  }
}
```

After updating the config file, restart the host application.

***

## Use the Git Status App

To open the Git Status app, ask your agent:

```
What changes are pending in the repo
```

This reliably calls the `git_status` tool. In a compatible host, the MCP App opens inline.

> **Note:** In VS Code Copilot, a generic prompt like "show me git status" may not call the `git_status` tool at all, or may handle it without opening the app. Use the prompt above to target the tool directly.

<figure>
  <img src="/wp-content/uploads/git-status-mcp.png" class="help-center-img img-bordered" alt="GitKraken MCP Git Status app showing unstaged files with stage, stash, and fetch actions." />
  <figcaption style="text-align: center; color: #888">The Git Status app lists pending changes grouped by state, with inline actions for staging, stashing, fetching, and committing.</figcaption>
</figure>

**What you can do in the Git Status app:**

- Review branch name and upstream status
- See counts for staged, unstaged, untracked, conflicted, and ignored files
- Browse grouped file lists with file paths and change labels
- Fetch the latest remote state
- Stage all changes at once or stage individual files
- Unstage individual files
- Stash all changes
- Use the **Ask AI to... Stage all & commit** action to prefill a commit prompt in chat (does not commit immediately)
- Open the repository graph in GitLens

***

## Use the Git Graph App

To open the Git Graph app, ask your agent:

```
Visualize the commit history in a graph
```

This reliably calls the `git_graph` tool. In a compatible host, the MCP App opens inline.

> **Note:** In VS Code Copilot, a generic prompt like "show me the graph" may cause the agent to call `gitlens_open_graph` instead, which opens the GitLens commit graph as a separate editor tab rather than the MCP App. Use the prompt above to target the `git_graph` tool directly.

<figure>
  <img src="/wp-content/uploads/git-graph-mcp.png" class="help-center-img img-bordered" alt="GitKraken MCP Git Graph app showing branch comparison panels and commit history." />
  <figcaption style="text-align: center; color: #888">The Git Graph app shows current, remote, and target branch status alongside a visual commit history.</figcaption>
</figure>

**What you can do in the Git Graph app:**

- Compare current, remote, and target branch status at a glance, including sync state and commits ahead or behind
- Browse commit history in a graph view with merge indicators, authors, and relative timestamps
- Select a target branch for comparison
- Refresh the graph
- Fetch, pull, or push
- Open the full repository graph in GitLens

***

## Read-only mode

The GitKraken MCP server can run in read-only mode. When it does:

- The app UI still loads and repository data is still visible.
- Write actions (stage, unstage, stash, commit, push, pull) are unavailable.
- The app surfaces a read-only state indicator.

If the app opens but write actions are disabled, check whether `--readonly` is present in the server args.

***

## Troubleshoot MCP Apps

### `git_status` works, but no app UI appears

The base tool ran successfully, but the app did not render.

**Check:**

1. Restart the host after updating the config.
2. Confirm your host supports MCP App rendering. See [Compatible hosts](#compatible-hosts) above.

---

### `git_status` exists, but `app_tool_box` does not

**Most likely cause:** The `mcp_resources` directory is missing from the GitKraken CLI installation.

**Check:**

1. Confirm the installed `gk` binary has a sibling `mcp_resources` directory. If assets are missing, the app layer is not registered.
2. Reinstall the GitKraken CLI to restore the binary and resources together.

---

### App UI loaded before but no longer appears

**Likely causes:**

- The `gk` binary was moved without its `mcp_resources` folder.
- An upgrade left the binary and resource directory out of sync.

**Check:**

1. Verify the active `gk` executable path.
2. Confirm `mcp_resources` exists next to the active binary.
3. Reinstall the GitKraken CLI to restore the binary and resources together.

---

### App opens, but write actions (commit, push, stash) are disabled

**Check:**

1. Confirm `--readonly` is not present in the server args.
2. Confirm the repository state supports the action (for example, there are staged changes to commit, or there are local commits to push).

---

### Host cannot find the GitKraken MCP server

**Check:**

1. Confirm the config file is at the correct path for your host. See [Config file locations](#config-file-locations) above.
2. Confirm the config syntax matches the format expected by your host (JSON vs. TOML; `/servers` vs. `/mcpServers`).
3. Confirm the `command` value points to a valid `gk` executable.
4. Run `gk --version` in a terminal to verify the binary is accessible.

---

### Troubleshooting checklist

Use this checklist to work through most MCP Apps issues:

1. Confirm the GitKraken CLI is installed and runnable (`gk --version`).
2. Confirm the MCP host is pointing at the correct `gk` executable.
3. Confirm the server args include `mcp`.
4. Restart the MCP host application.
5. Run `git_status` in a known Git repository.
6. If the tool runs but no app appears, verify your host supports MCP App rendering.
7. If the app still does not appear, reinstall the GitKraken CLI so the binary and `mcp_resources` are restored together.

***

## Next Steps

- See [Getting Started with the GitKraken MCP Server](/mcp/MCP-getting-started) to install or reconfigure the server.
- See the [Tools Reference](/mcp/MCP-tools-reference) for the full list of available tools.
- See [Example Workflows](/mcp/MCP-example-workflows) for common Git and issue tracking workflows.

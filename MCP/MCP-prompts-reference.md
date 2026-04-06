---
title: Prompts Reference
description: List of Prompts accessible to AI/LLMs via the MCP prompts/list command
product: "GitKraken MCP Server"
content_type: "reference"
audience: "agent"
plan_required: "all"
status: "GA"
last_verified: "2026-03"
taxonomy:
  category: MCP
---

<kbd>Last updated: March 2026</kbd>

Prompts are a higher-level feature of the **GitKraken MCP Server**. They help you save time on repetitive tasks by bundling preconfigured text prompts that also help enforce the usage of specific tools at the right time for the right workflow.

You can think of them as bundled workflows that help save you typing time when prompting. This list will change over time as we add more prompts and fine-tune the existing ones.

## Quick Start

Prompts are invoked via the `prompts/get` MCP command. Unlike tools, which execute actions, prompts return pre-structured text you can pass directly to your agent.

Example: generating a branch name for a code review:

```
Prompt: code_review_branch
Context: "Reviewing PR #342: Add OAuth2 login support"
```

The prompt returns a branch name string your agent can use with `git_checkout` or `git_branch`.

## Summary

| Prompt | Category | Description |
|--------|----------|-------------|
| [code_review_branch](#code_review_branch) | Code Review | Generate a code review branch name based on provided context |

---

## Generate Code Review Branch Names

### code_review_branch

Generate a code review branch name. Provide the PR title, issue number, or a brief description of the changes being reviewed. Returns a branch name string.

> **Use this when** you want a consistently named review branch and your team uses a naming convention based on the PR title or issue number.
> **Use `git_branch` directly when** you already know the exact branch name you want.

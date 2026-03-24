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

<style>
pre{position:relative;min-height:3.5em}
.copy-btn{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:11px;font-family:sans-serif;background:rgba(128,128,128,.15);border:1px solid rgba(128,128,128,.25);border-radius:4px;cursor:pointer;color:#aaa;opacity:0;transition:opacity .15s,background .15s,color .15s;line-height:1.5;z-index:1}
pre:hover .copy-btn{opacity:1}
.copy-btn:hover{background:rgba(128,128,128,.3);color:#ddd}
.copy-btn.copied{color:#22c55e;border-color:rgba(34,197,94,.4)}
</style>
<script>(function(){function cp(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);var x=document.createElement('textarea');x.value=t;x.style.cssText='position:fixed;opacity:0';document.body.appendChild(x);x.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(x);return Promise.resolve()}function init(){document.querySelectorAll('pre').forEach(function(p){if(p.querySelector('.copy-btn'))return;var b=document.createElement('button');b.className='copy-btn';b.setAttribute('aria-label','Copy code');b.textContent='Copy';p.appendChild(b);b.addEventListener('click',function(){var el=p.querySelector('code')||p;cp(el.innerText.replace(/\n$/,'')).then(function(){b.textContent='Copied!';b.classList.add('copied');setTimeout(function(){b.textContent='Copy';b.classList.remove('copied')},2000)})})})}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init()})()</script>

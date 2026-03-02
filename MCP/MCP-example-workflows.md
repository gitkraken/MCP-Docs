---
title: Example Workflows
description: A collection of example workflows that demonstrate how to use the GitKraken MCP (Model Context Protocol) Server to automate common development tasks.
taxonomy:
  category: MCP
---

<kbd>Last updated: February 2026</kbd>

Explore these example workflows to learn how the GitKraken MCP (Model Context Protocol) Server can automate everyday development tasks. Use them as inspiration to craft your own time-saving workflows.

### Query Jira and GitHub for Assigned Issues

Manually checking Jira or GitHub for your assigned issues can be tedious. Instead, ask your agent:

```
What issues are assigned to me?
```

This prompt uses the `issues_assigned_to_me` tool to query Jira and/or GitHub and list all issues assigned to your account.

### Start Work on a Jira Issue

To start work on a specific task, use the following prompt:

```
Start work on Jira issue <issue-id>
```

Replace `<issue-id>` with the actual issue ID.  
The MCP Server will call the `issues_get_detail` tool, fetch issue details, check your workspace, and create a new branch for that issue.

Depending on your agent and model, your IDE may then modify related files or call tools such as `git_status` and `git_add_or_commit`.

### Debug and Understand History

While [GitLens](https://www.gitkraken.com/gitlens) helps visualize commit history, it depends on meaningful commit messages. You can use the MCP Server to investigate change history automatically.

Ask:

```
Who last changed the <function-name> function and why?
```

The MCP Server will call the `git_blame` tool and relevant Git commands to gather and summarize context for you.

### Next Steps

Now that you understand how to use the GitKraken MCP Server, explore more workflows:

- Check out the [Tools Reference](/mcp/MCP-tools-reference) for a list of available tools and usage examples.  
- Visit the [Prompt Reference](/mcp/MCP-prompts-reference) for predefined prompts you can reuse or adapt.  

By combining these tools and prompts, you can build your own automated GitKraken MCP workflows to simplify repetitive development tasks.

<style>
pre{position:relative;min-height:3.5em}
.copy-btn{position:absolute;top:8px;right:8px;padding:2px 8px;font-size:11px;font-family:sans-serif;background:rgba(128,128,128,.15);border:1px solid rgba(128,128,128,.25);border-radius:4px;cursor:pointer;color:#aaa;opacity:0;transition:opacity .15s,background .15s,color .15s;line-height:1.5;z-index:1}
pre:hover .copy-btn{opacity:1}
.copy-btn:hover{background:rgba(128,128,128,.3);color:#ddd}
.copy-btn.copied{color:#22c55e;border-color:rgba(34,197,94,.4)}
</style>
<script>(function(){function cp(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);var x=document.createElement('textarea');x.value=t;x.style.cssText='position:fixed;opacity:0';document.body.appendChild(x);x.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(x);return Promise.resolve()}function init(){document.querySelectorAll('pre').forEach(function(p){if(p.querySelector('.copy-btn'))return;var b=document.createElement('button');b.className='copy-btn';b.setAttribute('aria-label','Copy code');b.textContent='Copy';p.appendChild(b);b.addEventListener('click',function(){var el=p.querySelector('code')||p;cp(el.innerText.replace(/\n$/,'')).then(function(){b.textContent='Copied!';b.classList.add('copied');setTimeout(function(){b.textContent='Copy';b.classList.remove('copied')},2000)})})})}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init()})()</script>

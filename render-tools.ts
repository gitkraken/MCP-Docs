import fs from "fs";
import path from "path";
import { Tool } from "./types";

const toolsRaw = fs.readFileSync(path.join(__dirname, "tools.json"), "utf8");
const toolsJson: { tools: Tool[] } = JSON.parse(toolsRaw);

const toolsMarkdown = toolsJson.tools.map((tool) => {
    return `
### ${tool.name}

${tool.description}
`;
});

const template = `
---
title: Tools Reference
description: List of Tools accessible to AI/LLMs via the MCP tools/list command
taxonomy:
  category: MCP
---

Tools are a fundamental part of the MCP ecosystem. They are the building blocks of the GitKraken Model Context Protocol (MCP) and allow you to interact with git and the integrations you have set up such as GitHub, GitLab, Jira, and Azure DevOps.

You can enable/disable them specifically within your chosen AI IDE/Agent.

The tools available are listed below. This list will change over time as we add more tools and consolidate the existing ones.

${toolsMarkdown.join("\n")}
`;

fs.writeFileSync(path.join(__dirname, "MCP", "03-tools-reference.md"), template);

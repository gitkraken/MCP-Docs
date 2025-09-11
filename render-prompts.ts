import fs from "fs";
import path from "path";
import { Prompt } from "./types";

const promptsRaw = fs.readFileSync(path.join(__dirname, "prompts.json"), "utf8");
const promptsJson: { prompts: Prompt[] } = JSON.parse(promptsRaw);

const promptsMarkdown = promptsJson.prompts.map((prompt) => {
    return `
### ${prompt.name}

${prompt.description}
`;
});

const template = `
---
title: Prompts Reference
description: List of Prompts accessible to AI/LLMs via the MCP prompts/list command
taxonomy:
  category: MCP
---

Prompts are a higher level feature of the Model Context Protocol (MCP). They help you save time on repetetive tasks by bundling preconfigured text prompts that also help enforce the usage of specific tools at the right time for the right workflow.

You can think of them as bundled workflows that help save you typing time when prompting.

The prompts available are listed below. This list will change over time as we add more prompts and fine-tune the existing ones.

${promptsMarkdown.join("\n")}
`;

fs.writeFileSync(path.join(__dirname, "MCP", "04-prompts-reference.md"), template);

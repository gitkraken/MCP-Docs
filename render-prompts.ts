import fs from "fs";
import path from "path";
import { Prompt } from "./types";
import { replaceGeneratedRegion, tableCell } from "./render-shared";

// Writes the prompt summary table into the live Prompts Reference page, between
// <!-- generated:prompts:start --> and <!-- generated:prompts:end -->.
// Front matter and the rest of the page are left untouched (render-shared.ts).
// Scratch run: pnpm prompts -- --file <copy of the page>

const PAGE = path.join(__dirname, "MCP", "MCP-prompts-reference.md");

const promptsRaw = fs.readFileSync(path.join(__dirname, "prompts.json"), "utf8");
const promptsJson: { prompts: Prompt[] } = JSON.parse(promptsRaw);

const rows = [...promptsJson.prompts]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((prompt) => `| \`${prompt.name}\` | ${tableCell(prompt.description)} |`);

const generated = [
    "| Prompt | Description |",
    "|--------|-------------|",
    ...rows,
].join("\n");

replaceGeneratedRegion("prompts", PAGE, generated);

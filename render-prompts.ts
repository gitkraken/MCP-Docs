import fs from "fs";
import path from "path";
import { Prompt } from "./types";
import { pagesDir, replaceGeneratedRegion, tableCell } from "./render-shared";

// Writes the prompt summary table into the live Prompts Reference page, between
// <!-- generated:prompts:start --> and <!-- generated:prompts:end -->.
// Front matter and the rest of the page are left untouched (render-shared.ts).
// Scratch run: pnpm prompts -- --pages <copy of the MCP folder>

const PAGE = path.join(pagesDir(), "MCP-prompts-reference.md");

// Category from the prompt name prefix.
const CATEGORIES: [string, string][] = [
    ["code_review_", "Code Review"],
];

function category(name: string): string {
    const hit = CATEGORIES.find(([prefix]) => name.startsWith(prefix));
    if (!hit) {
        console.warn(`warning: no category for prompt "${name}"; listed as "Other"`);
        return "Other";
    }
    return hit[1];
}

const promptsRaw = fs.readFileSync(path.join(__dirname, "prompts.json"), "utf8");
const promptsJson: { prompts: Prompt[] } = JSON.parse(promptsRaw);

const rows = [...promptsJson.prompts]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((prompt) => `| [${prompt.name}](#${prompt.name}) | ${category(prompt.name)} | ${tableCell(prompt.description)} |`);

const generated = [
    "| Prompt | Category | Description |",
    "|--------|----------|-------------|",
    ...rows,
].join("\n");

replaceGeneratedRegion("prompts", PAGE, generated);

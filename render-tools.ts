import fs from "fs";
import path from "path";
import { Tool } from "./types";
import { replaceGeneratedRegion, tableCell } from "./render-shared";

// Writes the tool summary table into the live Tools Reference page, between
// <!-- generated:tools:start --> and <!-- generated:tools:end -->.
// Front matter and the rest of the page are left untouched (render-shared.ts).
// Scratch run: pnpm tools -- --file <copy of the page>

const PAGE = path.join(__dirname, "MCP", "MCP-tools-reference.md");

// Category from the tool name prefix, longest prefix first.
const CATEGORIES: [string, string][] = [
    ["gitkraken_", "GitKraken"],
    ["gitlens_", "GitLens"],
    ["git_", "Git"],
    ["issues_", "Issues"],
    ["pull_request_", "Pull Requests"],
    ["repository_", "Repository"],
    ["app_", "MCP Apps"],
];

function category(name: string): string {
    const hit = CATEGORIES.find(([prefix]) => name.startsWith(prefix));
    if (!hit) {
        console.warn(`warning: no category for tool "${name}"; listed as "Other"`);
        return "Other";
    }
    return hit[1];
}

const toolsRaw = fs.readFileSync(path.join(__dirname, "tools.json"), "utf8");
const toolsJson: { tools: Tool[] } = JSON.parse(toolsRaw);

const rows = [...toolsJson.tools]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((tool) => `| \`${tool.name}\` | ${category(tool.name)} | ${tableCell(tool.description)} |`);

const generated = [
    "| Tool | Category | Description |",
    "|------|----------|-------------|",
    ...rows,
].join("\n");

replaceGeneratedRegion("tools", PAGE, generated);

import fs from "fs";
import path from "path";
import { Tool, ToolParameter } from "./types";
import { pagesDir, replaceGeneratedRegion, tableCell } from "./render-shared";

// Writes the reference parts generated from tools.json, and nothing else:
//   - the summary table on the Tools Reference page
//     (<!-- generated:tools:start --> ... <!-- generated:tools:end -->)
//   - each tool page's properties and parameters
//     (<!-- generated:tool:start --> ... <!-- generated:tool:end -->)
// Front matter, nav fields and hand-written text are left untouched
// (render-shared.ts). Tool pages are never created here: a tool without a page
// is reported, so its page can be written with its nav front matter.
// Scratch run: pnpm tools -- --pages <copy of the MCP folder>

const PAGES = pagesDir();

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

/** The tool page's slug and file name: git_add → mcp-tool-git-add, MCP-tool-git-add.md. */
const toolSlug = (name: string) => `mcp-tool-${name.replace(/_/g, "-")}`;
const toolFile = (name: string) => path.join(PAGES, `MCP-tool-${name.replace(/_/g, "-")}.md`);

/** App-only tools are hidden from the model: agents must not call them. */
const appOnly = (tool: Tool) => {
    const visibility = tool._meta?.ui?.visibility;
    return !!visibility && !visibility.includes("model");
};

const yesNo = (value: boolean) => (value ? "Yes" : "No");

function paramType(p: ToolParameter): string {
    if (p.type === "array" && p.items?.type) return `array of ${p.items.type}`;
    return p.type;
}

function paramDescription(p: ToolParameter): string {
    const parts = [tableCell(p.description ?? "").replace(/\.$/, "")];
    if (p.enum?.length) parts.push(`One of: ${p.enum.map((v) => `\`${v}\``).join(", ")}`);
    if (p.minimum !== undefined) parts.push(`Minimum: ${p.minimum}`);
    return parts.filter(Boolean).join(". ");
}

function toolReference(tool: Tool): string {
    const ui = tool._meta?.ui;
    const props = [
        "| Property | Value |",
        "|----------|-------|",
        `| Category | ${category(tool.name)} |`,
        `| Read-only | ${yesNo(tool.annotations.readOnlyHint)} |`,
        `| Destructive | ${yesNo(tool.annotations.destructiveHint)} |`,
    ];
    if (ui?.resourceUri) props.push(`| Opens an MCP App | Yes (\`${ui.resourceUri}\`) |`);
    if (appOnly(tool)) props.push("| App-only | Yes: called by GitKraken MCP Apps; agents must not call it |");

    const required = new Set(tool.inputSchema.required ?? []);
    const params = Object.entries(tool.inputSchema.properties ?? {}).sort(([a], [b]) => {
        const r = Number(required.has(b)) - Number(required.has(a));
        return r !== 0 ? r : a.localeCompare(b);
    });

    const out = [...props, "", "## Parameters", ""];
    if (params.length === 0) {
        out.push("This tool takes no parameters.");
    } else {
        out.push("| Parameter | Type | Required | Description |", "|-----------|------|----------|-------------|");
        for (const [name, p] of params) {
            out.push(`| \`${name}\` | ${paramType(p)} | ${yesNo(required.has(name))} | ${paramDescription(p)} |`);
        }
    }
    return out.join("\n");
}

const toolsRaw = fs.readFileSync(path.join(__dirname, "tools.json"), "utf8");
const tools: Tool[] = (JSON.parse(toolsRaw) as { tools: Tool[] }).tools
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

// Summary table on the Tools Reference page.
const summary = [
    "| Tool | Category | Read-only | Description |",
    "|------|----------|-----------|-------------|",
    ...tools.map((tool) => {
        const name = fs.existsSync(toolFile(tool.name))
            ? `[\`${tool.name}\`](/mcp/${toolSlug(tool.name)}/)`
            : `\`${tool.name}\``;
        const cat = category(tool.name) + (appOnly(tool) ? " (app-only)" : "");
        return `| ${name} | ${cat} | ${yesNo(tool.annotations.readOnlyHint)} | ${tableCell(tool.description)} |`;
    }),
].join("\n");
replaceGeneratedRegion("tools", path.join(PAGES, "MCP-tools-reference.md"), summary);

// One page per tool.
const missing: string[] = [];
for (const tool of tools) {
    if (!fs.existsSync(toolFile(tool.name))) {
        missing.push(tool.name);
        continue;
    }
    replaceGeneratedRegion("tool", toolFile(tool.name), toolReference(tool));
}

// Pages whose tool is no longer served.
const served = new Set(tools.map((t) => path.basename(toolFile(t.name))));
const orphans = fs.readdirSync(PAGES).filter((f) => /^MCP-tool-.+\.md$/.test(f) && !served.has(f));

if (missing.length) {
    console.warn(`warning: no page for ${missing.length} tool(s): ${missing.join(", ")}. Write MCP-tool-<name>.md with nav front matter and a generated:tool region.`);
}
if (orphans.length) {
    console.warn(`warning: ${orphans.length} tool page(s) for tools the server no longer lists: ${orphans.join(", ")}. Archive them (_archive/) and redirect.`);
}

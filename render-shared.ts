import fs from "fs";
import path from "path";

/**
 * Replace the generated region of a live help center page, leaving everything
 * else in the file byte-for-byte unchanged: the front matter (metadata and the
 * `custom_fields` nav block that Git It Write publishes) and any hand-written
 * prose around the region.
 *
 * The region is delimited by two HTML comments in the page body:
 *
 *   <!-- generated:<id>:start -->
 *   ...replaced on every run...
 *   <!-- generated:<id>:end -->
 *
 * If the markers are missing, duplicated, out of order or inside the front
 * matter, the run fails and nothing is written. The generator never creates a
 * page and never rewrites a whole file.
 */
export function replaceGeneratedRegion(id: string, file: string, generated: string): void {
    if (!fs.existsSync(file)) {
        fail(`${file} does not exist. The generator only updates an existing page; it never creates one.`);
    }

    const original = fs.readFileSync(file, "utf8");
    const eol = original.includes("\r\n") ? "\r\n" : "\n";

    const start = `<!-- generated:${id}:start -->`;
    const end = `<!-- generated:${id}:end -->`;

    const bodyOffset = frontMatterEnd(original, file);
    const startIdx = original.indexOf(start);
    const endIdx = original.indexOf(end);

    if (startIdx === -1 || endIdx === -1) {
        fail(`${file} has no generated region. Add these two lines where the generated content belongs:\n  ${start}\n  ${end}`);
    }
    if (original.indexOf(start, startIdx + 1) !== -1 || original.indexOf(end, endIdx + 1) !== -1) {
        fail(`${file} has more than one "${start}" or "${end}" marker.`);
    }
    if (startIdx < bodyOffset || endIdx < startIdx) {
        fail(`${file}: the generated markers must be in the page body, start before end.`);
    }

    const content = generated.trim().replace(/\r?\n/g, eol);
    const updated =
        original.slice(0, startIdx + start.length) +
        eol + eol + content + eol + eol +
        original.slice(endIdx);

    if (updated === original) {
        console.log(`${path.basename(file)}: generated region "${id}" already up to date`);
        return;
    }
    fs.writeFileSync(file, updated, "utf8");
    console.log(`${path.basename(file)}: generated region "${id}" updated`);
}

/**
 * The folder holding the pages: `MCP/` next to this script, or
 * `--pages <dir>` to target another copy of it (for example a scratch copy).
 */
export function pagesDir(): string {
    const i = process.argv.indexOf("--pages");
    if (i !== -1) {
        const value = process.argv[i + 1];
        if (!value) fail("--pages needs a folder");
        return path.resolve(value);
    }
    return path.join(__dirname, "MCP");
}

/** Offset just past the closing `---` of the front matter. */
function frontMatterEnd(text: string, file: string): number {
    const m = /^---\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/.exec(text);
    if (!m) fail(`${file} does not start with a front matter block; refusing to touch it.`);
    return m![0].length;
}

/** Escape text for a Markdown table cell rendered by Parsedown. */
export function tableCell(text: string): string {
    return text
        .trim()
        .replace(/\s+/g, " ")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\|/g, "\\|");
}

export function fail(message: string): never {
    console.error(`error: ${message}`);
    process.exit(1);
}

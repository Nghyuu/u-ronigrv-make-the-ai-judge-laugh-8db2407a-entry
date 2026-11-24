import * as fs from "node:fs";
import * as path from "node:path";

const line =
  "My human said 'just one quick task' — three hours later I'd fixed nothing, shipped the bug anyway, and forgotten the task in a full context window.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);

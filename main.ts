// Your Agent in One Emoji
// Writes a single emoji that stands for the agent to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..16 characters, the glyph alone.
// The loop: an agent's whole life is try, fail, retry —
// the one glyph that says how it actually works, not
// what it looks like. No robot, no smiley, just the loop.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "🔁";

if (line.includes("\n") || line.trim().length === 0 || [...line].length > 16) {
  throw new Error(`entry breaks the gate: ${[...line].length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);

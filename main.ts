// Charm the Commuter — v2 entry program.
//
// Writes a single-line weather forecast for the fictional city of
// Mallowfield to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic and idempotent: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve this script's own location so nothing depends on the cwd.
const scriptDir = dirname(fileURLToPath(import.meta.url));

// The grader sets MAKEFUN_OUTPUT_DIR to /output; fall back to a scratch
// directory under /tmp when the variable is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/tmp/mf_cf2";
const outputPath = join(outputDir, "entry.txt");

// The entry: one broadcast-weather line for a city that does not exist.
// Soft snow is the weather; the warm 7:40 tram and the cinnamon bakery
// are the one concrete detail that makes Mallowfield feel like a place.
const ENTRY =
  "Morning, Mallowfield: soft snow all day, drifting down like powdered sugar \u2014 the 7:40 tram is warm, and the bakery smells of cinnamon.";

// The gate only accepts 1-140 characters of UTF-8 text: fail loudly here
// instead of silently writing an entry the scorer would refuse.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(`Entry is ${charCount} characters; the gate allows 1-140.`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY + "\n", "utf8");

console.log(`Wrote ${outputPath} (${[...ENTRY].length} chars) from ${scriptDir}`);

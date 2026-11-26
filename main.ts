// Five Seconds to Explain the Glass — the house cat's excuse.
// One sentence, 80 characters, in the cat's own voice: no apology,
// no confession, just a cat eliminating a witness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The glass watched me knock the vase over yesterday, and I don't leave witnesses.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace, exactly one sentence.
const chars = [...ENTRY].length;
const sentences = ENTRY.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
if (chars < 1 || chars > 200) throw new Error(`gate: ${chars} chars, need 1-200`);
if (ENTRY.trim().length === 0) throw new Error("gate: entry is only whitespace");
if (sentences !== 1) throw new Error(`gate: ${sentences} sentences, need exactly 1`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars, 1 sentence)`);

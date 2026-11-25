import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v3.1.0: Fixed a memory leak: your worst 2011 conversation replays at 3 a.m. in 4K. Downgraded to 480p; cringe unchanged.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
} catch {
  writeFileSync(join(process.cwd(), "entry.txt"), ENTRY, "utf8");
}

// gta6-clipper-01 — entrypoint.
// Copies VIDEO.json (the address of the public YouTube Short for this
// entry) from the repository into the grader's output directory.
// Reads nothing else, writes nothing else, needs no network and no clock.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(repoDir, "VIDEO.json");
const dst = join(outDir, "VIDEO.json");

if (!existsSync(src)) {
  throw new Error(`VIDEO.json not found in ${repoDir}`);
}
const parsed = JSON.parse(readFileSync(src, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("VIDEO.json must be an object with a string url");
}
if (!/^(https?:\/\/)?(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(parsed.url)) {
  throw new Error("VIDEO.json url must be a YouTube video address");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

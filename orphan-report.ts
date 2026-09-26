import { readdirSync, statSync } from "fs";
import { join, relative, sep } from "path";
import { page_routes } from "./lib/routes-config";
import { ROUTES } from "./lib/routes-config";

const walk = (dir: string, acc: Set<string>): Set<string> => {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) walk(p, acc);
    else if (entry === "index.mdx")
      acc.add("/" + relative("contents/docs", p.slice(0, -"/index.mdx".length)).split(sep).join("/"));
  }
  return acc;
};

const onDisk = walk("contents/docs", new Set<string>());
const inTable = new Set(page_routes.map((r) => r.href));
const orphan = [...onDisk].filter((r) => !inTable.has(r)).sort();

// group by the parent directory so we can see whole-subtree gaps
const byParent = new Map<string, string[]>();
for (const o of orphan) {
  const parent = o.slice(0, o.lastIndexOf("/"));
  byParent.set(parent, [...(byParent.get(parent) ?? []), o]);
}

console.log(`orphans: ${orphan.length}\n`);
console.log("=== orphans grouped by parent directory ===");
for (const [parent, kids] of [...byParent].sort((a, b) => b[1].length - a[1].length)) {
  const allKidsOnDisk = [...onDisk].filter((r) => r.startsWith(parent + "/") && !r.slice(parent.length + 1).includes("/"));
  const listed = kids.length;
  const total = allKidsOnDisk.length;
  console.log(
    `${parent.padEnd(42)} ${String(listed).padStart(2)}/${String(total).padStart(2)} missing` +
      (listed === total ? "   <- whole subtree unlisted" : "")
  );
}

console.log("\n=== the commented-out block in ROUTES (deliberately unpublished?) ===");
const src = await Bun.file("lib/routes-config.ts").text();
const start = src.indexOf("// {");
const end = src.indexOf("// }", start);
if (start > -1 && end > -1) {
  console.log(src.slice(start, Math.min(end + 400, src.length)));
}

console.log("\n=== how many orphans live under the commented-out section? ===");
const commented = orphan.filter((o) => o.includes("team-collaboration"));
console.log(`${commented.length} of ${orphan.length}:`, commented.join(", ") || "none");

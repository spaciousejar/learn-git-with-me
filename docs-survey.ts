import { readdirSync, statSync, readFileSync } from "fs";
import { join, relative, sep } from "path";

const files: string[] = [];
(function walk(d: string): void {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith(".mdx")) files.push(p);
  }
})("contents");

const routes = new Set<string>();
(function walk(d: string): void {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e === "index.mdx")
      routes.add("/" + relative("contents/docs", p.slice(0, -"/index.mdx".length)).split(sep).join("/"));
  }
})("contents/docs");

const fm = (b: string) => b.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? null;
const field = (f: string | null, k: string) =>
  f ? f.match(new RegExp(`^${k}:\\s*(.*)$`, "m"))?.[1].trim().replace(/^["']|["']$/g, "") : undefined;

const broken: string[] = [];
const doubleH1: { file: string; h1: string; title: string }[] = [];
const byTitle = new Map<string, string[]>();
const bodies = new Map<string, string>();

for (const f of files.sort()) {
  const body = readFileSync(f, "utf8");
  const front = fm(body);
  const title = field(front, "title") ?? "";

  for (const m of body.matchAll(/\]\((\/docs\/[^)#\s]*)/g)) {
    const href = m[1].replace(/\/$/, "");
    if (!routes.has(href.replace(/^\/docs/, ""))) broken.push(`${f} -> ${m[1]}`);
  }

  const after = front ? body.slice(body.indexOf("\n---", 4) + 4) : body;
  const first = after.split("\n").find((l) => l.trim() !== "");
  if (first && /^#\s+\S/.test(first)) doubleH1.push({ file: f, h1: first.trim(), title });

  const slug = "/docs" + relative("contents/docs", f).replace(/\/index\.mdx$/, "").split(sep).join("/");
  byTitle.set(title.toLowerCase(), [...(byTitle.get(title.toLowerCase()) ?? []), slug]);
  bodies.set(slug, after.replace(/^#.*$/m, "").replace(/\s+/g, " ").trim().toLowerCase());
}

console.log(`files: ${files.length}\n`);
console.log(`broken /docs links: ${broken.length}`);
broken.forEach((b) => console.log("  " + b));

console.log(`\npages whose body opens with an h1 the layout already prints: ${doubleH1.length}`);

console.log("\n=== DUPLICATE TITLES (same frontmatter title) ===");
let dupes = 0;
for (const [t, slugs] of byTitle) {
  if (slugs.length > 1) {
    dupes++;
    console.log(`  "${t}"`);
    slugs.forEach((s) => console.log(`      ${s}`));
  }
}
if (!dupes) console.log("  none");

console.log("\n=== NEAR-DUPLICATE BODIES (>85% word overlap) ===");
const keys = [...bodies.keys()];
const words = (s: string) => new Set(s.split(" ").filter((w) => w.length > 3));
const sets = new Map(keys.map((k) => [k, words(bodies.get(k)!)]));
const seen = new Set<string>();
let near = 0;
for (let i = 0; i < keys.length; i++) {
  for (let j = i + 1; j < keys.length; j++) {
    const a = sets.get(keys[i])!;
    const b = sets.get(keys[j])!;
    if (!a.size || !b.size) continue;
    let shared = 0;
    for (const w of a) if (b.has(w)) shared++;
    const sim = shared / Math.min(a.size, b.size);
    if (sim > 0.85 && !seen.has(keys[i]) && !seen.has(keys[j])) {
      near++;
      seen.add(keys[i]);
      seen.add(keys[j]);
      console.log(`  ${Math.round(sim * 100)}%  ${keys[i]}\n         ${keys[j]}`);
    }
  }
}
if (!near) console.log("  none");

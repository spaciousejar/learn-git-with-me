import { readdirSync, statSync, readFileSync } from "fs";
import { join, relative, sep } from "path";
import { ROUTES } from "./lib/routes-config";

const noLink = new Set<string>();
(function scan(nodes: any[], prefix = ""): void {
  for (const n of nodes) {
    const p = prefix + n.href;
    if (n.noLink) noLink.add(p);
    if (n.items) scan(n.items, p);
  }
})(ROUTES);

const files: string[] = [];
(function walk(d: string): void {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith(".mdx")) files.push(p);
  }
})("contents/docs");

const fm = (b: string) => b.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? null;
const field = (f: string | null, k: string) =>
  f ? f.match(new RegExp(`^${k}:\\s*(.*)$`, "m"))?.[1].trim().replace(/^["']|["']$/g, "") : undefined;

type Page = { route: string; file: string; title: string; words: Set<string>; chars: number };
const pages: Page[] = [];

for (const f of files.sort()) {
  const route = "/" + relative("contents/docs", f.slice(0, -"/index.mdx".length)).split(sep).join("/");
  if (noLink.has(route)) continue; // section roots are not pages
  const body = readFileSync(f, "utf8");
  const front = fm(body);
  const after = front ? body.slice(body.indexOf("\n---", 4) + 4) : body;
  const text = after.replace(/^#\s.*$/m, "").toLowerCase();
  pages.push({
    route,
    file: f,
    title: field(front, "title") ?? "",
    chars: text.length,
    words: new Set(text.split(/\W+/).filter((w) => w.length > 3)),
  });
}

console.log(`content pages (section roots excluded): ${pages.length}\n`);

// real content pages only, so a 40-word stub cannot "match" a long page
const solid = pages.filter((p) => p.chars > 900 && p.words.size > 60);
console.log(`pages with substantial body (>900 chars): ${solid.length}\n`);

console.log("=== NEAR-DUPLICATE CONTENT (Jaccard >= 0.55) ===");
const pairs: { a: Page; b: Page; j: number }[] = [];
for (let i = 0; i < solid.length; i++) {
  for (let j = i + 1; j < solid.length; j++) {
    const a = solid[i].words;
    const b = solid[j].words;
    let shared = 0;
    for (const w of a) if (b.has(w)) shared++;
    const union = a.size + b.size - shared;
    const jac = union ? shared / union : 0;
    if (jac >= 0.55) pairs.push({ a: solid[i], b: solid[j], j: jac });
  }
}
pairs.sort((x, y) => y.j - x.j);
for (const p of pairs)
  console.log(
    `  ${(p.j * 100).toFixed(0)}%  "${p.a.title}"  ${p.a.route}\n         "${p.b.title}"  ${p.b.route}`
  );
if (!pairs.length) console.log("  none");

console.log("\n=== SAME TITLE, DIFFERENT ROUTE ===");
const byTitle = new Map<string, string[]>();
for (const p of pages) byTitle.set(p.title.toLowerCase(), [...(byTitle.get(p.title.toLowerCase()) ?? []), p.route]);
let n = 0;
for (const [t, routes] of byTitle) {
  if (routes.length > 1) {
    n++;
    console.log(`  "${t}"`);
    routes.forEach((r) => console.log(`      ${r}`));
  }
}
if (!n) console.log("  none");

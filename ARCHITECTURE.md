# Architecture

A single Next.js App Router application. There is no backend, no database
and no API layer: the site is a static documentation reader, prerendered at
build time and served from Vercel's CDN.

## Shape

```
contents/docs/**/index.mdx   documentation source, one directory per route
contents/blogs/*.mdx         blog posts
        |
        v
lib/routes-config.ts         ROUTES tree = sidebar, page_routes = sitemap
        |
        v
lib/markdown.ts              reads the mdx, compiles it, maps components
        |
        v
app/docs/[[...slug]]/page.tsx  one route serves every docs page
app/blog/page.tsx              blog index
app/blog/[slug]/page.tsx       one route per blog post
```

Content is addressed by directory name, not by a frontmatter field:
`contents/docs/2-git-basics/commands/git-add/index.mdx` is served at
`/docs/2-git-basics/commands/git-add`. A route listed in `ROUTES` whose
file is missing renders a 404, not a build error — `getDocsForSlug`
swallows the `fs` error and the page calls `notFound()`.

## Adding a docs page

1. Create `contents/docs/<section>/<page>/index.mdx` with `title` and
   `description` frontmatter.
2. Add the entry to `ROUTES` in `lib/routes-config.ts`.

Step 2 is what makes the page *findable*. The sidebar, the prev/next links,
`generateStaticParams` and `/sitemap.xml` all read from that one tree. The
table of contents does not — it re-reads the MDX file and extracts its
headings.

Skipping step 2 does not break the build and does not 404.
`dynamicParams` is left at its default of `true`, so the catch-all route
still renders the page on first request. What you lose is everything that
reads the table: no sidebar entry, no prev/next, not in the sitemap, and
not prerendered. 112 of the 299 docs files are in that state right now, so
this is the most common way a page here goes missing rather than appears.

## MDX

`lib/markdown.ts` compiles MDX at build time with `next-mdx-remote/rsc` and
maps HTML tags to components in `components/markdown/` (note, steps, files,
tabs, link-card and so on). Prism handles code highlighting.

Because MDX accepts raw JSX, content is executable. The CSP in
`next.config.mjs` still needs `script-src 'unsafe-inline'` for the
hydration payload and the analytics snippet, so it does not stop a
`<script>` in a content file. A nonce-based `script-src` is the fix, and
it needs the Vercel Analytics components to forward the nonce.

## Images

All images are local, served from `public/`. `next/image` is configured
with a `remotePatterns` allowlist in `next.config.mjs`; a remote `<img>` in
MDX fails at runtime unless its host is added there.

## Deployment

Vercel, connected to `main`. Every route is prerendered
(`generateStaticParams` over `page_routes` and the blog filenames), so a
deploy is a build plus a CDN upload — no runtime compute, no cold starts.

Headers live in `next.config.mjs`: CSP, `X-Content-Type-Options`,
`X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`. The
homepage video is a YouTube embed, so `frame-src` allows
`https://www.youtube.com` and nothing on this origin is framed by us —
which is why `frame-ancestors 'none'` applies to every path.

## Environment variables

| Variable | Required | Used by |
| --- | --- | --- |
| `GOOGLE_SITE_VERIFICATION` | no | `app/layout.tsx`, Google Search Console verification meta tag |

Nothing else. The app has no secrets and makes no authenticated calls; the
only outbound requests are the GitHub star count in the navbar and Vercel
Analytics.

## Checks

`ci.yml` runs lint and build. `readme-claims.yml` fails the build when the
README claims a tool, license, badge or release the repo does not have.
`codeql.yml` and `codacy.yml` scan on push and on a schedule.

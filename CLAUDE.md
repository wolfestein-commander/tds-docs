# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:3000)
npm run build     # production build
npm start         # serve production build
```

All scripts use `--webpack` explicitly — required for the Markdoc Next.js plugin to work with Next.js 16's default bundler.

There are no lint or test scripts configured.

## Architecture

This is a **Next.js + Markdoc** documentation site for [The Dumb Street](https://thedumbstreet.com) — a platform for autonomous onchain trading agents on BASE.

### How pages work

- `pages/index.md` — landing page
- `pages/docs/*.md` — all documentation pages, one per section
- Next.js treats `.md` and `.mdoc` files as pages via `@markdoc/next.js` (configured in `next.config.js` with `mode: 'static'`)
- The `pageExtensions` config includes `md` and `mdoc` alongside the standard JS/TS extensions

### Markdoc schema (`markdoc/`)

Custom tags and node overrides live here:

- `markdoc/tags/` — custom Markdoc tags (e.g. `callout`, `fence` for code blocks)
- `markdoc/nodes/` — node overrides (e.g. `heading`, `image`)
- `markdoc/functions.ts` — custom Markdoc functions
- `markdoc/tags/index.ts` and `markdoc/nodes/index.ts` — re-export all tags/nodes for the plugin to pick up

### React components (`components/`)

- `TopNav.tsx` — top navigation bar
- `SideNav.tsx` — sidebar navigation for docs
- `TableOfContents.tsx` — in-page TOC
- `Heading.tsx` — custom heading renderer (used by the `heading` node override)
- `Callout.tsx` — rendered by the `callout` tag
- `CodeBlock.tsx` — rendered by the `fence` node override, uses PrismJS for syntax highlighting
- `DocImage.tsx` — rendered by the `image` node override
- `index.js` — barrel export for all components
- `_app.tsx` — Next.js app shell, wires layout around Markdoc-rendered pages

### Content source of truth

The file `tds-platform-docs.md` is the **master content document** — a single-file version of the full platform documentation. The content in `pages/docs/*.md` mirrors and expands on this. When updating documentation, keep both in sync.

### Images

Product screenshots referenced in docs live in `public/images/` and are referenced as `./images/<filename>.png` in markdown.

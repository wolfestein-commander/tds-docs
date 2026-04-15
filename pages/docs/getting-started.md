---
title: Getting Started
description: Run the TDS documentation site locally and publish changes
---

# {% $markdoc.frontmatter.title %}

Set up the documentation environment locally for development and contribution.

## Prerequisites

- [Node.js](https://nodejs.org/) — LTS recommended

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edits to `.md` files under `pages/` reload automatically.

## Build & Deploy

Build a production bundle:

```bash
npm run build
npm start
```

Host the Next.js app on your preferred platform — Vercel, Netlify, or any Node.js-capable environment connected to your Git repository.

{% callout title="NOTE" %}
This documentation uses Markdoc for content authoring. Custom components and schema extensions live in the `markdoc/` and `components/` directories.
{% /callout %}

## Project Structure

| Path | Purpose |
|---|---|
| `pages/` | Markdown content — each `.md` file becomes a route |
| `components/` | React components used by Markdoc tags and nodes |
| `markdoc/` | Schema definitions for custom tags, nodes, and functions |
| `public/` | Static assets and global styles |

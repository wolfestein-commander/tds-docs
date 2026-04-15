# The Dumb Street — documentation

Product documentation for **The Dumb Street**, built with [Markdoc](https://markdoc.dev) and [Next.js](https://nextjs.org/) via [`@markdoc/next.js`](https://markdoc.dev/docs/nextjs).

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Scripts use `--webpack` so the Markdoc Next.js plugin works with Next.js 16’s default bundler behavior.

Open [http://localhost:3000](http://localhost:3000).

## Content

- Landing page: `pages/index.md`
- Docs: `pages/docs/*.md`
- Markdoc schema (custom tags/nodes): `markdoc/`

## Production

```bash
npm run build
npm start
```

Deploy the Next.js app to [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), or any Node host.

## Credits

Based on the [Markdoc Next.js starter](https://github.com/markdoc/markdoc-starter).

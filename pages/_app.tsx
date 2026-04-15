import React from 'react';
import Head from 'next/head';

import { SideNav, TableOfContents, TopNav } from '../components';

import 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism-tomorrow.css';

import '../public/globals.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

const TITLE = 'The Dumb Street — Documentation';
const DESCRIPTION = 'Infrastructure documentation for The Dumb Street protocol';

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title + ' — TDS Docs';
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#0a0f0a" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <div className="page">
        <SideNav />
        <div className="doc-body">
          <main className="flex column">
            <Component {...pageProps} />
          </main>
          <TableOfContents toc={toc} />
        </div>
      </div>
      <style jsx>
        {`
          .page {
            position: fixed;
            top: var(--top-nav-height);
            display: flex;
            width: 100vw;
            flex-grow: 1;
          }
          .doc-body {
            display: flex;
            flex: 1;
            overflow: hidden;
            min-width: 0;
          }
          main {
            overflow-x: hidden;
            overflow-y: auto;
            height: calc(100vh - var(--top-nav-height));
            flex: 1;
            min-width: 0;
            font-size: 14px;
            padding: 2.5rem 3rem 4rem;
            background: var(--bg-primary);
          }
        `}
      </style>
    </>
  );
}

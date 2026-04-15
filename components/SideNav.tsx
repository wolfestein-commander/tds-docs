import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'GETTING STARTED',
    links: [
      {href: '/docs', children: 'Introduction'},
      {href: '/docs/concepts', children: 'Concepts & Glossary'},
      {href: '/docs/setup', children: 'Setup Your Agent'},
    ],
  },
  {
    title: 'CONFIGURATION',
    links: [
      {href: '/docs/mcp-auth-token', children: 'MCP Auth Token'},
      {href: '/docs/wallet', children: 'Wallet Setup & Ops'},
    ],
  },
  {
    title: 'TERMINAL',
    links: [
      {href: '/docs/agent-terminal', children: 'Agent Terminal'},
      {href: '/docs/skills', children: 'Skills'},
      {href: '/docs/arena', children: 'Arena'},
    ],
  },
  {
    title: 'TOKEN',
    links: [
      {href: '/docs/token', children: '$TDS Token'},
    ],
  },
  {
    title: 'LEGAL',
    links: [
      {href: '/docs/disclaimer', children: 'Disclaimer'},
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      <div className="nav-content">
        {items.map((item) => (
          <div key={item.title} className="section">
            <span className="section-label">{item.title}</span>
            <ul className="flex column">
              {item.links.map((link) => {
                const active = router.pathname === link.href;
                return (
                  <li key={link.href} className={active ? 'active' : ''}>
                    <span className="link-prefix">{active ? '>' : ' '}</span>
                    <Link {...link} />
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="sidenav-footer">
        <span className="version">v0.1.0-alpha</span>
      </div>
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 220px;
            overflow-y: auto;
            background: var(--bg-secondary);
            border-right: 1px solid var(--green-border);
            display: flex;
            flex-direction: column;
          }
          .nav-content {
            flex: 1;
            padding: 1.75rem 1.25rem;
          }
          .section {
            margin-bottom: 1.5rem;
          }
          .section-label {
            font-family: var(--font-mono);
            font-size: 0.65rem;
            font-weight: 500;
            letter-spacing: 0.15em;
            color: var(--text-muted);
            display: block;
            margin-bottom: 0.75rem;
            padding-left: 0.25rem;
          }
          ul {
            padding: 0;
            margin: 0;
          }
          li {
            list-style: none;
            margin: 0;
            display: flex;
            align-items: center;
          }
          .link-prefix {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: var(--green-primary);
            width: 1rem;
            flex-shrink: 0;
            opacity: 0;
            transition: opacity var(--transition);
          }
          li.active .link-prefix,
          li:hover .link-prefix {
            opacity: 1;
          }
          li :global(a) {
            display: block;
            width: 100%;
            font-family: var(--font-mono);
            font-size: 0.8rem;
            padding: 0.4rem 0.5rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: var(--radius);
            transition: all var(--transition);
          }
          li :global(a:hover) {
            color: var(--green-primary);
            background: var(--green-subtle);
          }
          li.active :global(a) {
            color: var(--green-primary);
            background: var(--green-subtle);
            text-shadow: 0 0 8px var(--green-glow);
          }
          .sidenav-footer {
            padding: 1rem 1.5rem;
            border-top: 1px solid var(--border-color);
          }
          .version {
            font-family: var(--font-mono);
            font-size: 0.65rem;
            color: var(--text-muted);
            letter-spacing: 0.05em;
          }
        `}
      </style>
    </nav>
  );
}

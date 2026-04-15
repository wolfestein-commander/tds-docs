import React from 'react';
import Link from 'next/link';

export function TableOfContents({toc}) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav className="toc">
      <div className="toc-header">ON THIS PAGE</div>
      <ul className="flex column">
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== 'undefined' && window.location.hash === href;
          return (
            <li
              key={item.title}
              className={[
                active ? 'active' : undefined,
                item.level === 3 ? 'padded' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          nav {
            flex: 0 0 200px;
            height: calc(100vh - var(--top-nav-height));
            overflow-y: auto;
            padding: 2.5rem 1.25rem 2.5rem 0;
            border-left: 1px solid var(--border-color);
            background: var(--bg-primary);
          }
          .toc-header {
            font-family: var(--font-mono);
            font-size: 0.6rem;
            font-weight: 500;
            letter-spacing: 0.15em;
            color: var(--text-muted);
            margin-bottom: 0.75rem;
            padding-left: 1rem;
          }
          ul {
            margin: 0;
            padding: 0;
            border-left: 1px solid var(--border-color);
          }
          li {
            list-style-type: none;
            margin: 0;
          }
          li :global(a) {
            display: block;
            font-family: var(--font-mono);
            font-size: 0.72rem;
            line-height: 1.4;
            padding: 0.3rem 1rem;
            color: var(--text-muted);
            text-decoration: none;
            transition: all var(--transition);
            border-left: 1px solid transparent;
            margin-left: -1px;
          }
          li :global(a:hover) {
            color: var(--green-primary);
            border-left-color: var(--green-primary);
          }
          li.active :global(a) {
            color: var(--green-primary);
            border-left-color: var(--green-primary);
          }
          li.padded :global(a) {
            padding-left: 1.75rem;
          }
          @media (max-width: 1023px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}

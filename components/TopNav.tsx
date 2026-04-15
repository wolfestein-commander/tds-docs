import React from 'react';
import Link from 'next/link';

export function TopNav() {
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="flex brand">
          <span className="logo-icon">&#9608;</span>
          <span className="logo-text">THE DUMB STREET</span>
        </Link>
        <section>
          <a href="https://thedumbstreet.xyz" target="_blank" rel="noopener noreferrer">Terminal</a>
          <a href="#" className="soon">Litepaper</a>
          <a href="#" className="soon">Blog</a>
        </section>
      </div>
      <style jsx>
        {`
          nav {
            top: 0;
            position: fixed;
            width: 100%;
            z-index: 100;
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--green-border);
            backdrop-filter: blur(12px);
          }
          .nav-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 0 2rem;
            height: var(--top-nav-height);
            max-width: 100%;
          }
          nav :global(a) {
            text-decoration: none;
          }
          nav :global(a.brand) {
            display: flex;
            align-items: center;
            gap: 0.6rem;
          }
          .logo-icon {
            color: var(--green-primary);
            font-size: 0.9rem;
            text-shadow: 0 0 10px var(--green-glow);
          }
          .logo-text {
            font-family: var(--font-mono);
            font-weight: 700;
            font-size: 0.85rem;
            letter-spacing: 0.15em;
            color: var(--text-bright);
          }
          section {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            padding: 0;
          }
          section :global(a) {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--text-secondary);
            padding: 0.35rem 0.75rem;
            border: 1px solid transparent;
            border-radius: var(--radius);
            transition: all var(--transition);
          }
          section :global(a:hover) {
            color: var(--green-primary);
            border-color: var(--green-border);
            background: var(--green-subtle);
          }
          section :global(a.soon) {
            color: var(--text-muted);
            pointer-events: none;
          }
        `}
      </style>
    </nav>
  );
}

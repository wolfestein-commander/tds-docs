import React from 'react';
import Link from 'next/link';

interface TopNavProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export function TopNav({ onMenuToggle, menuOpen }: TopNavProps) {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-left">
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={onMenuToggle}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <Link href="/" className="flex brand">
            <span className="logo-icon">&#9608;</span>
            <span className="logo-text">THE DUMB STREET</span>
          </Link>
        </div>
        <section>
          <a href="https://thedumbstreet.xyz/x" target="_blank" rel="noopener noreferrer" className="cta">Join TG</a>
          <a href="https://docsend.com/view/vpk7rbvmryuuq7nx" target="_blank" rel="noopener noreferrer">Litepaper</a>
          <a href="https://paragraph.com/@thedumbstreet" target="_blank" rel="noopener noreferrer">Blog</a>
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
          .nav-left {
            display: flex;
            align-items: center;
            gap: 0.75rem;
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
          .hamburger {
            display: none;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            width: 28px;
            height: 28px;
          }
          .hamburger span {
            display: block;
            width: 100%;
            height: 1.5px;
            background: var(--text-secondary);
            border-radius: 1px;
            transition: all 200ms ease;
            transform-origin: center;
          }
          .hamburger.open span:nth-child(1) {
            transform: translateY(6.5px) rotate(45deg);
            background: var(--green-primary);
          }
          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }
          .hamburger.open span:nth-child(3) {
            transform: translateY(-6.5px) rotate(-45deg);
            background: var(--green-primary);
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
          section :global(a.cta) {
            color: var(--bg-primary);
            background: var(--green-primary);
            border-color: var(--green-primary);
            font-weight: 700;
            letter-spacing: 0.1em;
            box-shadow: 0 0 10px var(--green-glow);
          }
          section :global(a.cta:hover) {
            background: #33ff66;
            border-color: #33ff66;
            box-shadow: 0 0 18px rgba(0, 255, 65, 0.4);
            color: var(--bg-primary);
            text-shadow: none;
          }
          @media (max-width: 767px) {
            .hamburger {
              display: flex;
            }
            .nav-inner {
              padding: 0 1rem;
            }
            .logo-text {
              font-size: 0.75rem;
              letter-spacing: 0.08em;
            }
            section :global(a:not(.cta)) {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}

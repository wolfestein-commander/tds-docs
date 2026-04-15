
export function Callout({ title, children }) {
  return (
    <div className="callout">
      <div className="callout-indicator">
        <span className="callout-icon">&#9654;</span>
      </div>
      <div className="callout-content">
        {title && <strong className="callout-title">{title}</strong>}
        <span>{children}</span>
      </div>
      <style jsx>
        {`
          .callout {
            display: flex;
            gap: 0;
            margin: 1.5rem 0;
            background: var(--bg-surface);
            border: 1px solid var(--green-border);
            border-left: 2px solid var(--green-primary);
            border-radius: var(--radius);
            overflow: hidden;
          }
          .callout-indicator {
            display: flex;
            align-items: flex-start;
            padding: 0.9rem 0 0.9rem 0.9rem;
          }
          .callout-icon {
            color: var(--green-primary);
            font-size: 0.55rem;
            text-shadow: 0 0 6px var(--green-glow);
          }
          .callout-content {
            flex: 1;
            padding: 0.75rem 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }
          .callout-title {
            font-family: var(--font-mono);
            font-size: 0.7rem;
            font-weight: 700;
            color: var(--green-primary);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .callout :global(p) {
            margin: 0;
            font-size: 0.8rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }
        `}
      </style>
    </div>
  );
}

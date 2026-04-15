import Prism from 'prismjs';
import * as React from 'react';

export function CodeBlock({children, 'data-language': language}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <div className="code-header">
        <span className="code-lang">{language || 'code'}</span>
        <div className="code-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
      <style jsx>
        {`
          .code {
            position: relative;
            margin: 1.25rem 0 1.5rem;
            border: 1px solid var(--green-border);
            border-radius: var(--radius);
            overflow: hidden;
            background: var(--bg-secondary);
          }
          .code-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1rem;
            background: var(--bg-elevated);
            border-bottom: 1px solid var(--green-border);
          }
          .code-lang {
            font-family: var(--font-mono);
            font-size: 0.65rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--text-muted);
          }
          .code-dots {
            display: flex;
            gap: 4px;
          }
          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--green-dim);
          }

          /* Override Prism styles */
          .code :global(pre[class*='language-']) {
            text-shadow: none;
            border: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            background: transparent !important;
          }
        `}
      </style>
    </div>
  );
}

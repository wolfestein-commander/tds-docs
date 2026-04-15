import React, { useState, useEffect, useCallback } from 'react';

export function DocImage({ src, alt }: { src: string; alt?: string }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="doc-img"
        onClick={() => setOpen(true)}
        title="Click to expand"
      />

      {open && (
        <div className="img-modal-backdrop" onClick={close}>
          <div className="img-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="img-modal-close" onClick={close} aria-label="Close">✕</button>
            <img src={src} alt={alt} className="img-modal-img" />
            {alt && <p className="img-modal-caption">{alt}</p>}
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.doc-img) {
          display: block;
          max-width: 100%;
          height: auto;
          border: 1px solid var(--green-border);
          border-radius: var(--radius);
          cursor: zoom-in;
          transition: border-color var(--transition), opacity var(--transition);
          margin: 0;
        }
        :global(.doc-img:hover) {
          border-color: var(--green-primary);
          opacity: 0.92;
        }

        .img-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0, 0, 0, 0.88);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: zoom-out;
          backdrop-filter: blur(4px);
        }

        .img-modal-inner {
          position: relative;
          max-width: min(92vw, 1200px);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          cursor: default;
        }

        .img-modal-close {
          position: absolute;
          top: -2.25rem;
          right: 0;
          background: none;
          border: 1px solid var(--green-border);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          width: 1.75rem;
          height: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: var(--radius);
          transition: all var(--transition);
        }

        .img-modal-close:hover {
          color: var(--green-primary);
          border-color: var(--green-primary);
        }

        .img-modal-img {
          display: block;
          max-width: 100%;
          max-height: calc(90vh - 3rem);
          height: auto;
          border: 1px solid var(--green-border);
          border-radius: var(--radius);
          object-fit: contain;
        }

        .img-modal-caption {
          margin: 0.6rem 0 0;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-align: center;
        }
      `}</style>
    </>
  );
}

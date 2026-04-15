import * as React from 'react';

export function Heading({id = '', level = 1, children, className}) {
  return React.createElement(
    `h${level}`,
    {
      id,
      className: ['heading', className].filter(Boolean).join(' '),
    },
    level === 1 && React.createElement('span', {
      className: 'heading-accent',
      style: {
        color: 'var(--green-primary)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        marginRight: '0.5rem',
      }
    }, '>'),
    children,
    id && level !== 1 && React.createElement('a', {
      href: `#${id}`,
      className: 'anchor-link',
      'aria-hidden': 'true',
      style: {
        marginLeft: '0.5rem',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        fontWeight: 400,
        fontSize: '0.8em',
        opacity: 0,
        transition: 'opacity 150ms ease',
      }
    }, '#')
  );
}

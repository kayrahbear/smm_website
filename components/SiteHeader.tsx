'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/family',    label: 'Meet the Family' },
  {
    href: '/',
    label: 'Books',
    children: [
      { href: '/books/the-great-ghost-mix-up', label: 'The Great Ghost Mix Up' },
    ],
  },
  { href: '/about',     label: 'About Ashley' },
  { href: '/educators', label: 'For Educators' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sh-root">
      <div className="sh-bar">
        <Link href="/" className="sh-logo" onClick={() => setOpen(false)}>
          <span className="sh-logo-title">Savannah Manor Mysteries</span>
          <span className="sh-logo-sub">Ashley Brewer Books</span>
        </Link>

        <nav className="sh-nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label, children }) =>
            children ? (
              <div key={label} className="sh-dropdown-wrap">
                <button
                  className={`sh-link sh-link--trigger${pathname.startsWith('/books') ? ' sh-link--active' : ''}`}
                >
                  {label} <span className="sh-dropdown-caret">▾</span>
                </button>
                <div className="sh-dropdown">
                  {children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`sh-dropdown-link${pathname === child.href ? ' sh-dropdown-link--active' : ''}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                className={`sh-link${pathname === href ? ' sh-link--active' : ''}`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        <button
          className={`sh-toggle${open ? ' sh-toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="sh-drawer" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label, children }) => (
            <div key={label}>
              {children ? (
                <span className={`sh-drawer-link sh-drawer-link--inert${pathname.startsWith('/books') ? ' sh-drawer-link--active' : ''}`}>
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className={`sh-drawer-link${pathname === href || pathname.startsWith(href + '/') ? ' sh-drawer-link--active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              )}
              {children?.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`sh-drawer-link sh-drawer-link--sub${pathname === child.href ? ' sh-drawer-link--active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

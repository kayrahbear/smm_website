'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/',           label: 'Home' },
  { href: '/family',     label: 'Meet the Family' },
  { href: '/book',       label: 'The Book' },
  { href: '/about',      label: 'About Ashley' },
  { href: '/educators',  label: 'For Educators' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sh-root">
      <div className="sh-bar">
        <Link href="/" className="sh-logo" onClick={() => setOpen(false)}>
          <span className="sh-logo-title">Ashley Brewer Books</span>
          <span className="sh-logo-sub">Savannah Manor Mysteries</span>
        </Link>

        <nav className="sh-nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`sh-link${pathname === href ? ' sh-link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
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
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`sh-drawer-link${pathname === href ? ' sh-drawer-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

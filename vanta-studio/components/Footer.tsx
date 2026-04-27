'use client'

import Link from 'next/link'

const cols = [
  {
    title: 'Studio',
    links: [
      { label: 'Work',     href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'About',    href: '/about' },
      { label: 'Press',    href: '/press' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Inquire',     href: '#contact' },
      { label: 'Email Us',    href: 'mailto:hello@vantastudio.com' },
      { label: 'Careers',     href: '/careers' },
      { label: 'Newsletter',  href: '/newsletter' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'New York, NY',          href: '#' },
      { label: 'London, UK',            href: '#' },
      { label: 'Paris (by appointment)', href: '#' },
    ],
  },
]

const social = ['Instagram', 'Pinterest', 'LinkedIn', '1stDibs']

export function Footer() {
  return (
    <footer
      className="bg-void border-t border-dim pt-20 pb-12"
      role="contentinfo"
    >
      <div className="container-site">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-serif font-light tracking-wider text-ivory leading-none"
              style={{ fontSize: 'var(--text-xl)' }}
              aria-label="Vanta Studio home"
            >
              Vanta<span className="text-gold">.</span>Studio
            </Link>
            <p
              className="font-light text-smoke leading-relaxed"
              style={{ fontSize: 'var(--text-sm)', maxWidth: 260 }}
            >
              Luxury interior design for private residences, hospitality,
              and commercial environments. New York — London.
            </p>
          </div>

          {/* Nav cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="label mb-6">{col.title}</p>
              <ul className="flex flex-col gap-4 list-none">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="t-sm font-light text-smoke hover:text-ivory transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-dim">
          <p className="t-xs text-smoke">
            © {new Date().getFullYear()} Vanta Studio LLC. All rights reserved.
          </p>

          <nav aria-label="Social media" className="flex items-center gap-6">
            {social.map((s) => (
              <a
                key={s}
                href="#"
                className="label text-smoke hover:text-gold transition-colors duration-300"
                aria-label={s}
              >
                {s}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
}

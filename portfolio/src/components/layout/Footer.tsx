import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://behance.net', label: 'Behance' },
  { href: 'https://dribbble.com', label: 'Dribbble' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://instagram.com', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-obsidian">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-sm bg-gold flex items-center justify-center">
                <span className="text-black font-bold text-xs font-sans">E</span>
              </div>
              <span className="font-display text-white text-lg tracking-tight">
                Element<span className="text-gold">UX</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium UI/UX and brand design for businesses that refuse to look ordinary.
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-600 tracking-widest uppercase mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-gray-600 tracking-widest uppercase mb-6">Connect</p>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-gold transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wider">
            © {new Date().getFullYear()} ElementUX Designs. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Available for new projects —{' '}
            <Link href="/contact" className="text-gold hover:underline">
              Let&apos;s talk
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

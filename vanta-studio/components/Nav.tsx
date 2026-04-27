'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Work',     href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process' },
  { label: 'Studio',   href: '#about' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex items-center justify-between',
          'px-gutter transition-[padding] duration-500',
        )}
        animate={{
          paddingTop:    scrolled ? '1rem'  : '1.75rem',
          paddingBottom: scrolled ? '1rem'  : '1.75rem',
          backgroundColor: scrolled
            ? 'rgba(8,8,10,0.82)'
            : 'rgba(8,8,10,0)',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'blur(0px)',
          borderBottomColor: scrolled
            ? 'rgba(46,46,53,0.5)'
            : 'rgba(0,0,0,0)',
        }}
        style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif font-light tracking-wider text-ivory leading-none"
          style={{ fontSize: 'var(--text-lg)' }}
          aria-label="Vanta Studio home"
        >
          Vanta<span className="text-gold">.</span>Studio
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative label text-smoke hover:text-ivory transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px bg-gold w-0 group-hover:w-full transition-[width] duration-500 ease-[var(--ease-silk)]" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex btn-primary"
          data-cursor="true"
        >
          Inquire
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-6"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <motion.span
            className="block h-px bg-ivory origin-center"
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-px bg-ivory"
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px bg-ivory origin-center w-3/5"
            animate={open ? { rotate: -45, y: -11, width: '100%' } : { rotate: 0, y: 0, width: '60%' }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-void flex flex-col justify-center px-gutter lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="list-none flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif font-light text-ivory hover:text-gold transition-colors block"
                    style={{ fontSize: 'var(--text-2xl)' }}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-16"
            >
              <Link href="#contact" onClick={() => setOpen(false)} className="btn-primary">
                Begin a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

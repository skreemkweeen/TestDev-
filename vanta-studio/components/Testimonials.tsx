'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  {
    quote:
      'Working with Vanta Studio was unlike any creative relationship we had known. They didn\'t just design our home — they understood it.',
    name: 'Alexandra & James Thornton',
    role: 'West Village Penthouse, New York',
  },
  {
    quote:
      'The restraint they brought to the Marais project was extraordinary — every decision was made with an almost sculptural precision.',
    name: 'Henri Beaumont',
    role: 'Hôtel Particulier, Paris',
  },
  {
    quote:
      'They have a rare ability to create environments that feel both newly designed and as though they\'ve always existed.',
    name: 'Catherine Wren',
    role: 'Notting Hill Georgian, London',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(
    () => setActive((p) => (p + 1) % quotes.length),
    []
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6500)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <section
      className="bg-void py-section-lg"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="container-site max-w-[880px] text-center"
        style={{ margin: '0 auto' }}
      >

        {/* Large decorative open-quote */}
        <div
          className="font-serif text-gold-dim leading-none mb-[-1rem] select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem,8vw,9rem)', lineHeight: 1 }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Quote carousel */}
        <div className="relative min-h-[14rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-8"
            >
              <blockquote
                className="font-serif font-light italic text-ivory leading-snug tracking-tight text-balance"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                {quotes[active].quote}
              </blockquote>

              <footer className="flex flex-col items-center gap-1.5">
                <cite
                  className="not-italic font-sans font-medium text-parchment tracking-wider"
                  style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.1em' }}
                >
                  {quotes[active].name}
                </cite>
                <span className="label">{quotes[active].role}</span>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div
          className="flex items-center justify-center gap-3 mt-12"
          role="tablist"
          aria-label="Select testimonial"
        >
          {quotes.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className="border-none bg-transparent p-1 cursor-pointer"
            >
              <motion.span
                className="block rounded-full bg-dim"
                animate={{
                  width:           i === active ? 24 : 6,
                  height:          6,
                  backgroundColor: i === active ? '#C09A58' : '#2E2E35',
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

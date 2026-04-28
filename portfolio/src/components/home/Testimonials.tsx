'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '@/components/shared/AnimatedText'

const testimonials = [
  {
    quote:
      'Working with ElementUX completely transformed how the market perceives us. We went from startup-vibes to a brand that investors take seriously. We closed a $18M round within 90 days of the rebrand. I attribute a meaningful portion of that to the brand work.',
    author: 'Marcus Chen',
    role: 'CEO, Nexus Capital',
    industry: 'Fintech',
    initials: 'MC',
    accentColor: '#C9A84C',
  },
  {
    quote:
      "Our checkout abandonment was at 71%. After the redesign it dropped to 29%. I didn't believe those kinds of results were possible from a design project. The work paid for itself in the first month. I wish we'd done it two years earlier.",
    author: 'Sofia Marchetti',
    role: 'Founder, Aria Commerce',
    industry: 'E-Commerce',
    initials: 'SM',
    accentColor: '#B5835A',
  },
  {
    quote:
      "Our product was technically excellent but the UX was losing us deals. Post-redesign, our demo-to-close rate improved by 31%. More importantly, our users actually love the product now — our NPS went from negative territory to +58. Exceptional work.",
    author: 'David Park',
    role: 'CPO, Vaultz Platform',
    industry: 'SaaS',
    initials: 'DP',
    accentColor: '#4A90D9',
  },
  {
    quote:
      "I've worked with many designers over 15 years. ElementUX is in a different category. The strategic thinking behind every creative decision is what separates this work. Our materials finally look as premium as the properties we represent.",
    author: 'Jennifer Walsh',
    role: 'Principal Broker, Summit Properties',
    industry: 'Real Estate',
    initials: 'JW',
    accentColor: '#C9A84C',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-spacing bg-surface border-y border-border">
      <div className="container-wide">
        <div className="mb-16">
          <FadeUp>
            <div className="flex items-center gap-4 mb-8">
              <span className="gold-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Client Results
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-display text-white leading-tight">
              Don&apos;t take my word.
              <br />
              <em className="text-gradient-gold">Take theirs.</em>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Tabs */}
          <div className="lg:col-span-2 flex flex-col gap-0">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left border-b border-border py-6 flex items-center gap-4 group transition-all duration-300 ${
                  active === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 transition-all duration-300"
                  style={{
                    backgroundColor: active === i ? t.accentColor + '30' : '#1a1a1a',
                    border: `1px solid ${active === i ? t.accentColor + '60' : '#2a2a2a'}`,
                    color: active === i ? t.accentColor : '#666',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.author}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="ml-auto text-xs text-gray-600 tracking-widest uppercase">
                  {t.industry}
                </span>
              </button>
            ))}
          </div>

          {/* Quote */}
          <div className="lg:col-span-3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface-2 border border-border p-10 md:p-14 relative"
              >
                {/* Quote mark */}
                <div
                  className="font-display text-8xl leading-none mb-6 select-none"
                  style={{ color: testimonials[active].accentColor + '30' }}
                >
                  &ldquo;
                </div>

                <blockquote className="font-display text-2xl md:text-3xl text-white leading-relaxed font-light mb-10">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{
                      backgroundColor: testimonials[active].accentColor + '20',
                      border: `1px solid ${testimonials[active].accentColor + '40'}`,
                      color: testimonials[active].accentColor,
                    }}
                  >
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonials[active].author}</p>
                    <p className="text-gray-500 text-sm">{testimonials[active].role}</p>
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`w-6 h-0.5 transition-all duration-300 ${
                        active === i ? 'bg-gold w-10' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-20 pt-10 border-t border-border">
          <p className="text-gray-600 text-xs tracking-widest uppercase mb-8 text-center">
            Trusted by brands in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {['Fintech', 'SaaS', 'E-Commerce', 'Real Estate', 'CleanTech', 'Healthcare'].map(
              (industry) => (
                <span
                  key={industry}
                  className="text-gray-600 text-sm tracking-widest uppercase hover:text-gray-400 transition-colors duration-200"
                >
                  {industry}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

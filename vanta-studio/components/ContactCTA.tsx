'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

export function ContactCTA() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section
      id="contact"
      className="relative bg-obsidian py-section-lg overflow-hidden"
      aria-labelledby="cta-headline"
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 110%, rgba(192,154,88,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-site max-w-[860px] text-center relative z-10" style={{ margin: '0 auto' }}>

        <FadeIn>
          <p className="label-gold mb-6">Begin a Conversation</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2
            id="cta-headline"
            className="font-serif font-light text-ivory leading-tight tracking-tight mb-8"
            style={{ fontSize: 'var(--text-3xl)' }}
          >
            Your vision.
            <br />
            <em className="italic text-gold">Our craft.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="t-md font-light text-smoke leading-relaxed max-w-[440px] mx-auto mb-12">
            We accept a limited number of new commissions each year. Share your
            project details and we will be in touch within 48 hours.
          </p>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.2}>
          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif font-light italic text-gold"
              style={{ fontSize: 'var(--text-xl)' }}
            >
              Thank you — we'll be in touch shortly.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-2 max-w-[480px] mx-auto"
            >
              <label htmlFor="cta-email" className="sr-only">
                Your email address
              </label>
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                autoComplete="email"
                className="flex-1 bg-white/5 border border-dim text-ivory placeholder:text-smoke font-sans outline-none transition-colors duration-300 focus:border-gold focus:bg-white/[0.07] px-6 py-4"
                style={{ fontSize: 'var(--text-sm)' }}
              />
              <motion.button
                type="submit"
                className="btn-primary flex-shrink-0 group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="true"
              >
                Send Inquiry
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </form>
          )}
        </FadeIn>

        {/* Contact details */}
        <FadeIn delay={0.26} className="flex items-center justify-center gap-8 flex-wrap mt-10">
          <a
            href="mailto:hello@vantastudio.com"
            className="label text-smoke hover:text-gold transition-colors duration-300"
          >
            hello@vantastudio.com
          </a>
          <span className="text-dim" aria-hidden="true">—</span>
          <a
            href="tel:+12125550110"
            className="label text-smoke hover:text-gold transition-colors duration-300"
          >
            +1 (212) 555–0110
          </a>
        </FadeIn>

      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp } from '@/components/shared/AnimatedText'

export function CTA() {
  return (
    <section className="relative py-40 bg-obsidian overflow-hidden">
      {/* Gold radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/[0.06] blur-[100px]" />
      </div>

      {/* Animated border lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      />

      <div className="container-wide text-center relative z-10">
        <FadeUp>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="gold-line" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Available for New Projects
            </span>
            <span className="gold-line" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display text-display text-white leading-tight mb-8 max-w-4xl mx-auto">
            Ready to build something
            <br />
            <em className="text-gradient-gold">worth paying attention to?</em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-gray-400 text-xl max-w-xl mx-auto leading-relaxed mb-14">
            Serious businesses hire serious designers. Let&apos;s talk about what you&apos;re
            building and whether we&apos;re the right fit.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold text-black px-10 py-5 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              Start a Conversation
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold text-sm tracking-widest uppercase transition-colors duration-200"
            >
              See All Work
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="mt-20 flex flex-wrap justify-center gap-10">
            {[
              { icon: '⚡', label: 'Fast turnaround' },
              { icon: '🎯', label: 'Strategy-led' },
              { icon: '💎', label: 'Premium quality' },
              { icon: '📈', label: 'ROI focused' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-gray-500">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

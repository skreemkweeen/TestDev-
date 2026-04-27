'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'

const steps = [
  {
    num: '01',
    title: 'Discovery & Vision',
    desc: 'We begin with deep listening. A series of in-depth consultations to understand how you live, what moves you, and what the space must ultimately become.',
  },
  {
    num: '02',
    title: 'Concept Development',
    desc: 'A spatial and material concept is developed — mood, palette, proportion, and narrative — presented as a cohesive story rather than a catalog of choices.',
  },
  {
    num: '03',
    title: 'Design Development',
    desc: 'Technical drawings, custom furniture design, material specification, and supplier coordination — every detail resolved before a single wall is touched.',
  },
  {
    num: '04',
    title: 'Installation & Styling',
    desc: 'We oversee every stage of installation personally, including final art placement and object styling — ensuring the space is complete before handover.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="bg-ivory py-section-lg"
      aria-labelledby="process-title"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(4rem,8vw,10rem)] items-start">

          {/* Sticky aside */}
          <FadeIn className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-gold-muted" />
              <span className="label" style={{ color: '#8A6D3B' }}>How We Work</span>
            </div>
            <h2
              id="process-title"
              className="font-serif font-light text-void leading-tight tracking-tight"
              style={{ fontSize: 'var(--text-2xl)' }}
            >
              A considered
              <br />
              process, start
              <br />
              to finish
            </h2>
          </FadeIn>

          {/* Steps */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="grid grid-cols-[auto_1fr] gap-8 py-10 border-b border-linen first:border-t first:border-linen cursor-default"
                  whileHover={{ x: 14 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="font-sans font-medium pt-1 flex-shrink-0"
                    style={{ fontSize: 'var(--text-xs)', color: '#8A6D3B', letterSpacing: '0.1em' }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="font-serif font-light text-void leading-snug tracking-tight mb-3"
                      style={{ fontSize: 'var(--text-lg)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-light leading-relaxed"
                      style={{ fontSize: 'var(--text-sm)', color: '#4A4A54' }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FadeUp } from '@/components/shared/AnimatedText'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    duration: 'Week 1–2',
    description:
      'Deep dive into your business, audience, competition, and goals. I ask uncomfortable questions that surface the real problems — then build a strategic brief that becomes the compass for every creative decision.',
    deliverables: ['Brand audit', 'Competitor analysis', 'Strategic brief', 'Project roadmap'],
  },
  {
    number: '02',
    title: 'Concept & Direction',
    duration: 'Week 2–3',
    description:
      'I explore directions, not just one. You see multiple creative territories, each with clear rationale. We align on the strongest direction before a single pixel gets polished.',
    deliverables: ['Mood boards', 'Creative territories', 'Direction presentation', 'Client alignment'],
  },
  {
    number: '03',
    title: 'Design & Refinement',
    duration: 'Week 3–5',
    description:
      'This is where the work comes alive. Precision craft on every element, iterative refinement through feedback rounds, and a relentless commitment to quality that shows in the final result.',
    deliverables: ['Full design system', 'Polished deliverables', '2 revision rounds', 'QA review'],
  },
  {
    number: '04',
    title: 'Delivery & Launch',
    duration: 'Week 5–6',
    description:
      'Organized, production-ready files. Clear documentation. And I stay available for two weeks post-launch to make sure everything lands exactly as designed.',
    deliverables: ['Production files', 'Brand guidelines', 'Asset library', '14-day support'],
  },
]

export function Process() {
  return (
    <section className="section-spacing bg-obsidian">
      <div className="container-wide">
        <div className="mb-20">
          <FadeUp>
            <div className="flex items-center gap-4 mb-8">
              <span className="gold-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">How I Work</span>
            </div>
          </FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeUp delay={0.1}>
              <h2 className="font-display text-display text-white leading-tight">
                A process built for
                <br />
                <em className="text-gradient-gold">no surprises</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed md:text-right">
                Every project runs on the same proven framework. You always know where we are,
                what&apos;s next, and what to expect.
              </p>
            </FadeUp>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative bg-surface border border-border hover:border-gold/30 p-10 transition-all duration-500 overflow-hidden"
            >
              {/* Background number */}
              <div className="absolute top-4 right-6 font-display text-7xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-gold/[0.05] transition-colors duration-500">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-gold text-lg">{step.number}</span>
                  <span className="text-gray-600 text-xs tracking-widest uppercase border border-gray-800 px-3 py-1">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{step.description}</p>

                <div className="border-t border-border pt-6">
                  <p className="text-xs text-gray-600 tracking-widest uppercase mb-4">
                    Deliverables
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-gray-500 text-xs">
                        <span className="w-1.5 h-1.5 bg-gold/50 rounded-full flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

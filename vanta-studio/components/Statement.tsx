'use client'

import { FadeIn } from '@/components/FadeIn'

const stats = [
  { value: '140+', label: 'Projects Completed' },
  { value: '18',   label: 'Countries' },
  { value: '12',   label: 'Awards' },
  { value: '9',    label: 'Years Studio' },
]

export function Statement() {
  return (
    <section className="bg-void py-section-lg" aria-labelledby="statement-body">
      <div className="container-site max-w-[1100px]">

        <FadeIn className="flex items-center gap-4 mb-12">
          <span className="gold-line" />
          <span className="label">Our Philosophy</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            id="statement-body"
            className="font-serif font-light text-ivory leading-snug tracking-[-0.02em]"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            True luxury is not decoration — it is the feeling of a room that
            has been{' '}
            <em className="text-gold italic">completely understood.</em>{' '}
            We work at the intersection of architecture, craft, and lived
            experience to create interiors that are both timelessly beautiful
            and deeply personal.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="mt-16 pt-12 border-t border-dim flex flex-wrap justify-between gap-y-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span
                className="font-serif font-light text-ivory leading-none tracking-tight"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                {s.value}
              </span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  )
}

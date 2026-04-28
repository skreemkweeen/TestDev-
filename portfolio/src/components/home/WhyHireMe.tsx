'use client'

import { motion } from 'framer-motion'
import { FadeUp } from '@/components/shared/AnimatedText'

const differentiators = [
  {
    number: '01',
    title: 'Strategy first, aesthetics second',
    description:
      "Good design isn't just pretty — it's persuasive. Every decision I make is grounded in user psychology, business goals, and competitive positioning. Your brand will look great and perform.",
  },
  {
    number: '02',
    title: 'You get a strategic partner',
    description:
      "I don't just execute briefs. I ask hard questions, challenge weak assumptions, and bring the perspective of someone who has seen what works across dozens of industries and verticals.",
  },
  {
    number: '03',
    title: 'Premium work at every level',
    description:
      "I treat every file, frame, and pixel with craft. From your brand guidelines to your social templates, everything I deliver is production-ready, systematized, and built to scale.",
  },
  {
    number: '04',
    title: 'ROI you can actually measure',
    description:
      "Design is an investment, not an expense. I track conversion rates, retention metrics, and business outcomes because the goal isn't a beautiful deliverable — it's a successful business.",
  },
]

export function WhyHireMe() {
  return (
    <section className="section-spacing bg-surface border-y border-border relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(201,168,76,0.5) 0px, rgba(201,168,76,0.5) 1px, transparent 1px, transparent 40px)`,
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <span className="gold-line" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Why Work With Me</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-display text-white leading-tight mb-8">
                The difference
                <br />
                <em className="text-gradient-gold">between good</em>
                <br />
                and great design
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Most designers make things look nice. I make things work harder. There&apos;s a clear
                and measurable difference, and my clients feel it in their bottom line.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Projects completed', value: '60+' },
                  { label: 'Years of experience', value: '7+' },
                  { label: 'Industries served', value: '12+' },
                  { label: 'Long-term clients', value: '80%' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-gold/30 pl-4">
                    <p className="font-display text-2xl text-gold mb-0.5">{stat.value}</p>
                    <p className="text-gray-600 text-xs tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — differentiators */}
          <div className="flex flex-col gap-0">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group border-b border-border py-10 first:border-t"
              >
                <div className="flex gap-6 items-start">
                  <span className="font-display text-gold/30 text-2xl group-hover:text-gold/60 transition-colors duration-300 mt-1 min-w-[3ch]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

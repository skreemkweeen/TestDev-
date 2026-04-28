'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeUp, FadeIn } from '@/components/shared/AnimatedText'

const skills = [
  {
    category: 'Brand & Identity',
    items: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines', 'Typography', 'Art Direction'],
  },
  {
    category: 'UX & Product',
    items: ['UX Research', 'User Testing', 'Wireframing', 'Prototyping', 'Design Systems', 'Information Architecture'],
  },
  {
    category: 'UI & Visual',
    items: ['UI Design', 'Motion Design', 'Illustration', 'Print Design', 'Campaign Design', 'Social Media'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Adobe CC', 'After Effects', 'Framer', 'Webflow', 'Lottie'],
  },
]

const timeline = [
  { year: '2024', event: 'Expanded to full-service brand + digital studio', detail: 'Now serving 12+ industries' },
  { year: '2023', event: 'Launched SaaS product design practice', detail: 'First $1M+ design engagement' },
  { year: '2022', event: 'Founded ElementUX as solo studio', detail: 'Focus on premium brand + UX' },
  { year: '2020', event: 'Senior Designer at leading creative agency', detail: 'Led $5M+ client accounts' },
  { year: '2017', event: 'Started career in brand design', detail: 'Graduated with honors, Design' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                rgba(201,168,76,0.5) 0px,
                rgba(201,168,76,0.5) 1px,
                transparent 1px,
                transparent 40px
              )`,
            }}
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <FadeUp>
                <div className="flex items-center gap-4 mb-10">
                  <span className="gold-line" />
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">About</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="font-display text-display text-white leading-tight mb-8">
                  The designer
                  <br />
                  <em className="text-gradient-gold">behind the work</em>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-gray-400 text-xl leading-relaxed mb-6">
                  I&apos;m a UI/UX designer and brand strategist based in the US, with 7+ years
                  building premium digital experiences for growth-stage companies and ambitious
                  entrepreneurs.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  I founded ElementUX because I saw a gap: most designers can execute visually, but
                  few can think strategically about what a brand needs to achieve in the market.
                  I do both, and I charge accordingly.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="flex gap-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
                  >
                    Work Together
                  </Link>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 border border-gray-700 text-gray-300 px-8 py-4 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    View Résumé
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Photo placeholder */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="aspect-[3/4] bg-surface border border-border relative overflow-hidden max-w-md mx-auto">
                  {/* Replace with actual photo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                      <span className="font-display text-3xl text-gold">E</span>
                    </div>
                    <p className="text-gray-600 text-xs tracking-widest uppercase">Photo</p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: 'radial-gradient(ellipse at 30% 40%, rgba(201,168,76,0.3) 0%, transparent 60%)',
                    }}
                  />
                </div>
                {/* Decorative box */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing bg-surface border-y border-border">
        <div className="container-narrow text-center">
          <FadeUp>
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="gold-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Philosophy</span>
              <span className="gold-line" />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <blockquote className="font-display text-3xl md:text-4xl text-white leading-tight mb-8">
              &ldquo;Design is only valuable when it makes something
              <em className="text-gradient-gold"> measurably better</em> for the business
              and the people it serves.&rdquo;
            </blockquote>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-gray-500">— The guiding principle behind every project</p>
          </FadeUp>
        </div>
      </section>

      {/* Skills */}
      <section className="section-spacing bg-obsidian">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-center gap-4 mb-16">
              <span className="gold-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Capabilities</span>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="bg-surface border border-border p-8"
              >
                <h3 className="font-display text-gold text-lg mb-6">{skillGroup.category}</h3>
                <ul className="flex flex-col gap-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold/50 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-surface border-t border-border">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-center gap-4 mb-16">
              <span className="gold-line" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Journey</span>
            </div>
          </FadeUp>
          <h2 className="font-display text-heading text-white mb-16">
            7 years of craft,
            <br />
            <em className="text-gradient-gold">refined to precision</em>
          </h2>
          <div className="flex flex-col gap-0 max-w-2xl">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex gap-8 pb-10 relative group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-gold/50 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-300 mt-1 flex-shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-gold text-sm font-mono mb-1 block">{item.year}</span>
                  <h3 className="text-white text-lg font-medium mb-1">{item.event}</h3>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border text-center">
        <FadeUp>
          <p className="font-display text-3xl text-white mb-6">
            Ready to build something remarkable together?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-black px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
          >
            Let&apos;s Talk
          </Link>
        </FadeUp>
      </section>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'

const services = [
  {
    num: '01',
    title: 'Interior Architecture',
    desc: 'Structural reconfigurations, spatial planning, and the dialogue between architecture and interior — approached as a single unified discipline.',
  },
  {
    num: '02',
    title: 'Residential Design',
    desc: 'Primary residences, weekend retreats, and pied-à-terres designed to feel both elevated and inhabited — spaces that become more beautiful with time.',
  },
  {
    num: '03',
    title: 'Hospitality & Commercial',
    desc: 'Hotels, restaurants, and private members clubs where every touchpoint — from threshold to suite — creates a cohesive narrative experience.',
  },
  {
    num: '04',
    title: 'Furniture & Curation',
    desc: 'Custom furniture commissions, antique sourcing, and the careful curation of objects that give a room its particular intelligence.',
  },
  {
    num: '05',
    title: 'Art Advisory',
    desc: 'We work closely with galleries and artists to build collections that are inseparable from the spaces they inhabit.',
  },
  {
    num: '06',
    title: 'Project Management',
    desc: 'End-to-end coordination with contractors, craftspeople, and suppliers — ensuring zero compromise between vision and execution.',
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  return (
    <FadeIn
      delay={0.05 * (index % 3)}
      className="relative border border-dim overflow-hidden group cursor-default"
    >
      <motion.div
        className="px-8 pt-10 pb-12 h-full flex flex-col"
        whileHover="hover"
      >
        {/* Gold bottom bar */}
        <motion.span
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-muted to-gold-bright"
          variants={{ hover: { scaleX: 1, originX: 0 } }}
          initial={{ scaleX: 0, originX: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%' }}
          aria-hidden="true"
        />

        {/* Large number */}
        <motion.span
          className="font-serif font-light leading-none mb-8 select-none"
          style={{ fontSize: 'var(--text-4xl)', color: '#2E2E35' }}
          variants={{ hover: { color: '#3D2F18' } }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          {service.num}
        </motion.span>

        <h3
          className="font-serif font-light text-ivory leading-snug tracking-tight mb-4"
          style={{ fontSize: 'var(--text-xl)' }}
        >
          {service.title}
        </h3>

        <p className="t-sm font-light text-smoke leading-relaxed">
          {service.desc}
        </p>
      </motion.div>
    </FadeIn>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="bg-void py-section-lg"
      aria-labelledby="services-title"
    >
      <div className="container-site">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="label">What We Offer</span>
            </div>
            <h2
              id="services-title"
              className="font-serif font-light text-ivory leading-tight tracking-tight"
              style={{ fontSize: 'var(--text-3xl)' }}
            >
              Full-spectrum
              <br />
              design services
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="t-md font-light text-smoke leading-relaxed max-w-[400px] lg:ml-auto">
              From initial concept through final installation, we provide a
              seamless, white-glove process tailored to each client's vision.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

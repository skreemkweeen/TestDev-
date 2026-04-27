'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const projects = [
  {
    id: 1,
    category: 'Residential · Penthouse',
    title: 'West Village Penthouse',
    location: 'New York, NY — 2024',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80&auto=format&fit=crop',
    large: true,
  },
  {
    id: 2,
    category: 'Hospitality · Boutique Hotel',
    title: 'Marais Hôtel Particulier',
    location: 'Paris, France — 2023',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop',
    large: false,
  },
  {
    id: 3,
    category: 'Residential · Townhouse',
    title: 'Notting Hill Georgian',
    location: 'London, UK — 2024',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop',
    large: false,
  },
]

function WorkCard({ project }: { project: (typeof projects)[0] }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const cfg = { stiffness: 260, damping: 28 }
  const rx = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), cfg)
  const ry = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), cfg)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width  - 0.5)
    y.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.article
      className="relative overflow-hidden bg-graphite cursor-pointer group"
      style={{ rotateX: ry, rotateY: rx, perspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover="hover"
      tabIndex={0}
      role="article"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${project.large ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
        <motion.div
          className="relative w-full h-full"
          variants={{ hover: { scale: 1.04 } }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={project.large ? '(max-width:1024px) 100vw, 56vw' : '(max-width:1024px) 100vw, 28vw'}
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(8,8,10,0.88) 0%, transparent 55%)',
          }}
          variants={{ hover: { opacity: 1.2 } }}
          initial={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Info */}
      <motion.div
        className="absolute bottom-0 inset-x-0 p-8"
        variants={{ hover: { y: 0 } }}
        initial={{ y: 6 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="label-gold mb-1">{project.category}</p>
        <h3
          className="font-serif font-light text-ivory leading-snug tracking-tight"
          style={{ fontSize: 'var(--text-xl)' }}
        >
          {project.title}
        </h3>
        <p className="t-xs text-parchment mt-1">{project.location}</p>

        <motion.span
          className="inline-flex items-center gap-2 label-gold mt-4"
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          View Project <ArrowRight size={12} />
        </motion.span>
      </motion.div>
    </motion.article>
  )
}

export function WorkGrid() {
  const [hero, ...rest] = projects

  return (
    <section
      id="work"
      className="bg-obsidian py-section-lg"
      aria-labelledby="work-title"
    >
      {/* Header */}
      <div className="container-site flex items-end justify-between gap-8 mb-14">
        <FadeIn>
          <h2
            id="work-title"
            className="font-serif font-light text-ivory leading-tight tracking-tight"
            style={{ fontSize: 'var(--text-3xl)' }}
          >
            Selected
            <br />
            Projects
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 label-gold hover:gap-4 transition-[gap] duration-500"
            data-cursor="true"
          >
            View All Work <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </div>

      {/* Grid */}
      <div className="container-site grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-1.5">
        {/* Hero card — spans 2 rows */}
        <div className="lg:row-span-2">
          <FadeIn className="h-full">
            <WorkCard project={hero} />
          </FadeIn>
        </div>

        {rest.map((p, i) => (
          <FadeIn key={p.id} delay={0.1 + i * 0.08} className="h-full">
            <WorkCard project={p} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

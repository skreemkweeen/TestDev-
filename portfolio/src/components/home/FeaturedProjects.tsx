'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '@/lib/projects'
import { FadeUp } from '@/components/shared/AnimatedText'

export function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <section className="section-spacing bg-obsidian">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="gold-line" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">
                  Selected Work
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-display text-white leading-tight">
                Work that
                <br />
                <em className="text-gradient-gold">speaks for itself</em>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-gold text-sm tracking-widest uppercase transition-colors duration-200 self-start md:self-auto"
            >
              All Projects
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
          </FadeUp>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <FeaturedProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: ReturnType<typeof getFeaturedProjects>[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <Link href={`/work#${project.slug}`} className="group block">
        <div
          className="relative overflow-hidden border border-border hover:border-gold/40 transition-all duration-500"
          style={{ backgroundColor: project.coverColor }}
        >
          {/* Large index number */}
          <div className="absolute top-6 left-8 font-display text-8xl font-bold opacity-[0.06] text-white select-none pointer-events-none">
            {project.index}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[280px]">
            {/* Content side */}
            <div className="lg:col-span-3 p-10 md:p-12 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className="text-xs tracking-widest uppercase px-3 py-1 border"
                    style={{ borderColor: project.accentColor + '40', color: project.accentColor }}
                  >
                    {project.industry}
                  </span>
                  <span className="text-gray-600 text-xs">{project.year}</span>
                </div>
                <h3 className="font-display text-heading text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                  {project.tagline}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.services.slice(0, 3).map((service) => (
                  <span
                    key={service}
                    className="text-xs text-gray-500 border border-gray-800 px-3 py-1"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual side */}
            <div className="lg:col-span-2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse at 60% 50%, ${project.accentColor}60 0%, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <MockupVisual accentColor={project.accentColor} index={index} />
              </div>
            </div>
          </div>

          {/* View project arrow */}
          <div className="absolute bottom-8 right-8 md:right-12 flex items-center gap-3 text-gray-600 group-hover:text-gold transition-colors duration-300">
            <span className="text-xs tracking-widest uppercase">View Case Study</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </motion.svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function MockupVisual({ accentColor, index }: { accentColor: string; index: number }) {
  const patterns = [
    // Brand identity mockup
    <svg key="0" viewBox="0 0 200 140" className="w-full h-full max-w-[200px] opacity-80">
      <rect x="20" y="20" width="80" height="80" rx="4" fill={accentColor} opacity="0.2" />
      <rect x="30" y="30" width="60" height="60" rx="2" fill={accentColor} opacity="0.15" />
      <text x="60" y="68" textAnchor="middle" fill={accentColor} fontSize="24" fontWeight="bold">N</text>
      <rect x="115" y="25" width="65" height="6" rx="3" fill="white" opacity="0.15" />
      <rect x="115" y="40" width="45" height="4" rx="2" fill="white" opacity="0.08" />
      <rect x="115" y="55" width="55" height="4" rx="2" fill="white" opacity="0.08" />
      <rect x="115" y="80" width="65" height="30" rx="2" fill={accentColor} opacity="0.25" />
      <rect x="20" y="120" width="160" height="1" fill="white" opacity="0.06" />
    </svg>,
    // E-commerce mockup
    <svg key="1" viewBox="0 0 200 140" className="w-full h-full max-w-[200px] opacity-80">
      <rect x="10" y="10" width="180" height="120" rx="8" fill="white" opacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
      <rect x="20" y="22" width="80" height="60" rx="4" fill={accentColor} opacity="0.15" />
      <rect x="110" y="22" width="70" height="8" rx="3" fill="white" opacity="0.12" />
      <rect x="110" y="36" width="50" height="5" rx="2" fill="white" opacity="0.07" />
      <rect x="110" y="47" width="60" height="5" rx="2" fill="white" opacity="0.07" />
      <rect x="110" y="65" width="40" height="14" rx="2" fill={accentColor} opacity="0.5" />
      <rect x="20" y="100" width="160" height="1" fill="white" opacity="0.05" />
      <rect x="20" y="110" width="35" height="10" rx="2" fill="white" opacity="0.07" />
      <rect x="65" y="110" width="35" height="10" rx="2" fill="white" opacity="0.07" />
    </svg>,
    // Dashboard mockup
    <svg key="2" viewBox="0 0 200 140" className="w-full h-full max-w-[200px] opacity-80">
      <rect x="10" y="10" width="40" height="120" rx="4" fill="white" opacity="0.04" />
      <rect x="18" y="22" width="24" height="4" rx="2" fill={accentColor} opacity="0.5" />
      <rect x="18" y="34" width="24" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="18" y="46" width="24" height="4" rx="2" fill="white" opacity="0.1" />
      <rect x="58" y="10" width="132" height="50" rx="4" fill="white" opacity="0.04" />
      <rect x="66" y="18" width="60" height="6" rx="2" fill="white" opacity="0.1" />
      <rect x="66" y="30" width="100" height="22" rx="2" fill={accentColor} opacity="0.1" />
      <rect x="58" y="68" width="62" height="62" rx="4" fill="white" opacity="0.04" />
      <circle cx="89" cy="99" r="22" fill="none" stroke={accentColor} strokeWidth="8" strokeOpacity="0.4" strokeDasharray="90 50" />
      <rect x="128" y="68" width="62" height="62" rx="4" fill="white" opacity="0.04" />
      <rect x="136" y="100" width="10" height="22" rx="1" fill={accentColor} opacity="0.5" />
      <rect x="150" y="90" width="10" height="32" rx="1" fill={accentColor} opacity="0.3" />
      <rect x="164" y="95" width="10" height="27" rx="1" fill={accentColor} opacity="0.4" />
    </svg>,
  ]

  return patterns[index % patterns.length]
}

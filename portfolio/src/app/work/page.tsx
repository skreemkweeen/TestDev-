'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/projects'
import { FadeUp } from '@/components/shared/AnimatedText'

const allTags = ['All', 'Branding', 'UX', 'Product Design', 'Campaign', 'Mobile']

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.some((t) => t === activeTag || t.includes(activeTag)))

  return (
    <div className="min-h-screen bg-obsidian pt-32">
      {/* Page header */}
      <div className="container-wide mb-20">
        <FadeUp>
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Portfolio</span>
          </div>
        </FadeUp>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <FadeUp delay={0.1}>
              <h1 className="font-display text-display text-white leading-tight">
                Selected Work
                <br />
                <em className="text-gradient-gold">& Case Studies</em>
              </h1>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
              A curated collection of projects where strategy met craft and produced measurable results.
            </p>
          </FadeUp>
        </div>

        {/* Filter tabs */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap gap-3 mt-14">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                  activeTag === tag
                    ? 'border-gold text-gold bg-gold/5'
                    : 'border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Projects grid */}
      <div className="container-wide">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2"
          >
            {filtered.map((project, i) => (
              <CaseStudyRow key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="container-wide py-32 text-center border-t border-border mt-20">
        <FadeUp>
          <p className="text-gray-500 text-lg mb-6">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-black px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
          >
            Start a Project
          </a>
        </FadeUp>
      </div>
    </div>
  )
}

function CaseStudyRow({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      id={project.slug}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`border border-border hover:border-gold/30 transition-all duration-500 overflow-hidden ${
          expanded ? 'border-gold/30' : ''
        }`}
        style={{ backgroundColor: expanded ? project.coverColor : '' }}
      >
        {/* Row header — always visible */}
        <button
          className="w-full text-left p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="font-display text-gold/40 text-xl min-w-[4ch]">{project.index}</span>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs tracking-widest uppercase text-gray-600">
                {project.industry}
              </span>
              <span className="text-gray-700 text-xs">·</span>
              <span className="text-xs text-gray-600">{project.year}</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-300">
              {project.title}
            </h2>
          </div>

          <p className="text-gray-500 text-sm max-w-xs hidden md:block">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 md:max-w-[200px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-gray-800 px-2 py-0.5 text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 border border-gray-800 flex items-center justify-center flex-shrink-0 text-gray-500"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 4v16M4 12h16"
              />
            </svg>
          </motion.div>
        </button>

        {/* Expanded case study */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-border/40 p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Left column: project info */}
                  <div className="lg:col-span-1 space-y-8">
                    <div>
                      <p className="text-xs text-gray-600 tracking-widest uppercase mb-3">
                        Services
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {project.services.map((s) => (
                          <li key={s} className="text-gray-400 text-sm flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: project.accentColor }}
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs text-gray-600 tracking-widest uppercase mb-3">
                        Client Type
                      </p>
                      <p className="text-gray-400 text-sm">{project.clientType}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-600 tracking-widest uppercase mb-3">
                        Results
                      </p>
                      <ul className="flex flex-col gap-2">
                        {project.results.map((r) => (
                          <li key={r} className="text-gray-300 text-sm flex items-start gap-2">
                            <span
                              className="text-base leading-none mt-0.5"
                              style={{ color: project.accentColor }}
                            >
                              ↑
                            </span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right columns: case study */}
                  <div className="lg:col-span-2 space-y-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="w-6 h-px"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        <p className="text-xs tracking-widest uppercase" style={{ color: project.accentColor }}>
                          The Problem
                        </p>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed">{project.problem}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="w-6 h-px"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        <p className="text-xs tracking-widest uppercase" style={{ color: project.accentColor }}>
                          The Solution
                        </p>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed">{project.solution}</p>
                    </div>

                    {/* Visual mockup area */}
                    <div
                      className="relative h-60 md:h-80 flex items-center justify-center overflow-hidden border border-white/5"
                      style={{ backgroundColor: project.coverColor }}
                    >
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `radial-gradient(ellipse at 50% 50%, ${project.accentColor}40 0%, transparent 70%)`,
                        }}
                      />
                      <div className="relative z-10 text-center">
                        <div
                          className="font-display text-7xl md:text-8xl font-bold mb-4 select-none"
                          style={{ color: project.accentColor + '20' }}
                        >
                          {project.index}
                        </div>
                        <p className="font-display text-2xl text-white">{project.title}</p>
                        <p className="text-xs tracking-widest uppercase mt-2" style={{ color: project.accentColor }}>
                          {project.industry}
                        </p>
                      </div>
                      <div className="absolute bottom-4 right-4 text-xs text-gray-700 tracking-widest uppercase">
                        Mockup / Visual
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

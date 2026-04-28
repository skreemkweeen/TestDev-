'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { gsap } from 'gsap'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!counterRef.current) return
    gsap.from(counterRef.current, {
      textContent: 0,
      duration: 2.5,
      delay: 1.5,
      ease: 'power2.out',
      snap: { textContent: 1 },
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-obsidian">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.04] blur-[120px] pointer-events-none" />

      <div className="container-wide pt-40 pb-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-10"
          >
            <span className="gold-line" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              UI/UX & Brand Design Studio
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              variants={itemVariants}
              className="font-display text-hero text-white leading-[0.92] tracking-tight"
            >
              Design that
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              variants={itemVariants}
              className="font-display text-hero leading-[0.92] tracking-tight text-gradient-gold italic"
            >
              demands attention.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              variants={itemVariants}
              className="font-display text-hero text-white leading-[0.92] tracking-tight"
            >
              Drives results.
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-relaxed mb-14 font-light"
          >
            I build premium brand identities and digital products for companies
            that want to look worth what they charge.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 items-center">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 bg-gold text-black px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300"
            >
              View Selected Work
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
              href="/contact"
              className="inline-flex items-center gap-3 border border-gray-700 text-gray-300 px-8 py-4 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Start a Project
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 pt-10 border-t border-border flex flex-wrap gap-12"
        >
          {[
            { value: '60+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '$2M+', label: 'Revenue Generated for Clients' },
            { value: '5★', label: 'Average Client Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl text-gold font-medium mb-1">
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-8 md:right-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-gray-600 text-xs tracking-[0.2em] uppercase rotate-90 mb-4">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

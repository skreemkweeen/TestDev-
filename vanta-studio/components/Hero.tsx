'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.55 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY   = useTransform(scrollYProgress, [0, 1], ['0%',   '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%',   '12%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-svh flex flex-col justify-end overflow-hidden bg-void"
      aria-labelledby="hero-headline"
    >
      {/* ── Media layer ───────────────────────────────── */}
      <div className="absolute inset-x-0 top-[-15%] bottom-[-15%] z-0">
        <motion.div
          className="relative w-full h-full"
          style={{ y: imageY }}
          initial={{ scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85&auto=format&fit=crop"
            alt="A cinematic luxury interior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* ── Gradient overlays ─────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: [
            'linear-gradient(to right, rgba(8,8,10,0.88) 38%, rgba(8,8,10,0.18) 100%)',
            'linear-gradient(to top,   rgba(8,8,10,0.80) 0%,  transparent 55%)',
          ].join(','),
        }}
      />

      {/* ── Content ───────────────────────────────────── */}
      <motion.div
        className="relative z-20 container-site pb-[clamp(4rem,6vw,9rem)]"
        style={{ y: contentY, opacity }}
      >
        <motion.div
          className="max-w-[700px]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 mb-8"
          >
            <span className="gold-line" />
            <span className="label-gold">Est. 2016 — New York &amp; London</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-headline"
            variants={item}
            className="font-serif font-light text-ivory leading-tight tracking-[-0.02em] mb-7"
            style={{ fontSize: 'var(--text-3xl)' }}
          >
            Spaces that hold
            <br />
            <em className="text-gold not-italic italic">weight and silence</em>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={item}
            className="t-md font-light text-parchment leading-relaxed max-w-[460px] mb-12"
          >
            We design environments where luxury is experienced through
            restraint — every material chosen, every proportion considered.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-5"
          >
            <Link href="#work" className="btn-primary group" data-cursor="true">
              View Our Work
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link href="#contact" className="btn-ghost" data-cursor="true">
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        className="absolute bottom-10 right-gutter z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
        style={{ right: 'var(--gutter)' }}
      >
        <span
          className="label text-smoke"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}
        >
          Scroll
        </span>
        <span
          className="block w-px bg-gradient-to-b from-gold to-transparent animate-scroll-pulse"
          style={{ height: 52 }}
        />
      </motion.div>
    </section>
  )
}

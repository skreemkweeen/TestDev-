'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

const credentials = [
  { val: 'AD100',    key: 'Honoree 2023–24' },
  { val: 'Elle Deco', key: 'Best New Studio 2021' },
  { val: 'BIID',     key: 'Chartered Member' },
]

export function About() {
  return (
    <section
      id="about"
      className="bg-void py-section-lg"
      aria-labelledby="about-title"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,6vw,8rem)] items-center">

          {/* Media */}
          <FadeIn direction="left" className="relative">
            <motion.div
              className="relative overflow-hidden aspect-[4/5]"
              whileHover="hover"
            >
              <motion.div
                className="relative w-full h-full"
                variants={{ hover: { scale: 1.03 } }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&auto=format&fit=crop&crop=faces"
                  alt="Nadia Voss, Founder & Creative Director, Vanta Studio"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Decorative frame */}
            <div
              className="absolute -bottom-6 -right-6 border border-gold-dim pointer-events-none z-[-1]"
              style={{ width: '58%', aspectRatio: '1' }}
              aria-hidden="true"
            />
          </FadeIn>

          {/* Content */}
          <div className="flex flex-col gap-7">

            <FadeIn className="flex items-center gap-4">
              <span className="gold-line" />
              <span className="label">The Studio</span>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h2
                id="about-title"
                className="font-serif font-light text-ivory leading-tight tracking-tight"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                Design rooted in
                <br />
                <em className="text-gold italic">material honesty</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="t-md font-light text-smoke leading-relaxed">
                Vanta Studio was founded by Nadia Voss in 2016 with a
                conviction that the finest interiors emerge from a profound
                respect for craft, material, and the people who will inhabit
                them. Based between New York and London, our team of eight
                designers approaches each project as a collaboration — between
                client, architect, and maker.
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p
                className="font-serif font-light italic text-smoke"
                style={{ fontSize: 'var(--text-xl)' }}
              >
                — Nadia Voss, Founder &amp; Creative Director
              </p>
            </FadeIn>

            <FadeIn
              delay={0.22}
              className="flex flex-wrap gap-8 pt-8 border-t border-dim"
            >
              {credentials.map((c) => (
                <div key={c.val} className="flex flex-col gap-1">
                  <span
                    className="font-serif font-light text-ivory leading-none"
                    style={{ fontSize: 'var(--text-xl)' }}
                  >
                    {c.val}
                  </span>
                  <span className="label">{c.key}</span>
                </div>
              ))}
            </FadeIn>

            <FadeIn delay={0.26}>
              <Link
                href="/about"
                className="btn-ghost self-start group mt-2"
                data-cursor="true"
              >
                Meet the Studio
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  )
}

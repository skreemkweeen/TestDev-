"use client";

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useMousePosition } from "@/hooks/useMousePosition";

const ContactCanvas = lazy(() =>
  import("@/components/canvas/ContactCanvas").then((m) => ({ default: m.ContactCanvas }))
);

const services = [
  "Immersive Web Experiences",
  "Brand Identity Systems",
  "Motion & 3D Design",
  "Product Strategy",
  "Creative Direction",
];

export function Contact() {
  const mouse = useMousePosition();

  return (
    <section id="contact" className="relative min-h-dvh flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-obsidian" />

      {/* Canvas background */}
      <div className="absolute inset-0 z-canvas opacity-60">
        <Suspense fallback={null}>
          <ContactCanvas mouse={mouse} />
        </Suspense>
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-obsidian/60 to-obsidian pointer-events-none" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />

      <div className="relative z-content max-w-5xl mx-auto px-6 md:px-12 py-40 w-full">
        <div className="text-center">
          {/* Eyebrow */}
          <FadeIn delay={0}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-electric-500" />
              <span className="text-label text-electric-500">Start a conversation</span>
              <div className="w-12 h-px bg-electric-500" />
            </div>
          </FadeIn>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-display-hero font-display text-white leading-none">
              <TextReveal splitBy="words" stagger={0.1}>
                Let's create something extraordinary
              </TextReveal>
            </h2>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-graphite-300 text-lg leading-relaxed max-w-xl mx-auto mb-16">
              We take on a limited number of engagements each year to ensure
              every project receives the full weight of our attention.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <MagneticButton
                variant="primary"
                onClick={() => {
                  window.location.href = "mailto:hello@elementux.studio";
                }}
              >
                Get in touch
              </MagneticButton>
              <MagneticButton variant="outline">
                Schedule a call
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Services list */}
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {services.map((service, i) => (
                <span
                  key={service}
                  className="text-label text-graphite-400 text-[10px] px-4 py-2 rounded-full border border-graphite-500/50"
                >
                  {service}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-content border-t border-graphite-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-electric-500/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-electric-500" />
            </div>
            <span className="text-label text-graphite-400 tracking-[0.3em] text-[10px]">ELEMENT UX</span>
          </div>

          <div className="flex items-center gap-8">
            {["Twitter", "Dribbble", "LinkedIn", "Awwwards"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                className="text-label text-graphite-500 hover:text-silver-300 transition-colors duration-300 text-[10px]"
                whileHover={{ y: -2 }}
              >
                {platform}
              </motion.a>
            ))}
          </div>

          <p className="text-label text-graphite-500 text-[10px]">
            © {new Date().getFullYear()} Element UX. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

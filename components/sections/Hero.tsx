"use client";

import { useEffect, useRef, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger, DURATIONS } from "@/lib/gsap-init";
import { useMousePosition } from "@/hooks/useMousePosition";
import { MagneticButton } from "@/components/ui/MagneticButton";

const HeroCanvas = lazy(() =>
  import("@/components/canvas/HeroCanvas").then((m) => ({ default: m.HeroCanvas }))
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.8 });

      tl.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: DURATIONS.cinematic,
        ease: "cinematic",
      })
        .from(
          subtitleRef.current,
          { y: 30, opacity: 0, duration: DURATIONS.slow, ease: "cinematic" },
          "-=0.8"
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: DURATIONS.slow, ease: "cinematic" },
          "-=0.6"
        )
        .from(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.8 },
          "-=0.2"
        );

      // Parallax on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (!headlineRef.current) return;
          gsap.set(headlineRef.current, { y: self.progress * 80 });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Canvas */}
      <div className="absolute inset-0 z-canvas">
        <Suspense fallback={null}>
          <HeroCanvas mouse={mouse} />
        </Suspense>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-obsidian/30 to-obsidian/80 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-content flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <div className="w-8 h-px bg-electric-500" />
          <span className="text-label text-electric-500 tracking-[0.3em]">
            Creative Technology Studio
          </span>
          <div className="w-8 h-px bg-electric-500" />
        </motion.div>

        {/* Headline */}
        <div ref={headlineRef}>
          <h1 className="text-display-hero font-display text-white mb-4 leading-none">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 2.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                We design
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-electric-500 glow-text italic"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 3.0, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                experiences
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-silver-100"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 3.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              >
                that move people
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="max-w-xl mx-auto mt-8 mb-12">
          <p className="text-graphite-300 text-lg leading-relaxed">
            Immersive digital experiences for visionary brands.
            <br />
            <span className="text-silver-200">Where technology meets emotion.</span>
          </p>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton variant="primary" onClick={scrollToProjects}>
            View Our Work
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}>
            Our Story →
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-label text-graphite-400 tracking-[0.3em] text-[9px]">SCROLL</span>
        <div className="w-px h-12 overflow-hidden bg-graphite-600">
          <motion.div
            className="w-full h-full bg-electric-500"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap, ScrollTrigger, DURATIONS } from "@/lib/gsap-init";
import { TextReveal, FadeIn } from "@/components/ui/TextReveal";

const stats = [
  { value: "140+", label: "Projects delivered" },
  { value: "8", label: "Awwwards recognitions" },
  { value: "22", label: "Countries reached" },
  { value: "4", label: "Years pioneering" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll text
      const marquee = sectionRef.current?.querySelector(".marquee-track");
      if (marquee) {
        gsap.to(marquee, {
          x: "-50%",
          duration: 20,
          repeat: -1,
          ease: "none",
        });
      }

      // Stats counter animation
      const counters = sectionRef.current?.querySelectorAll("[data-count]");
      counters?.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.from(el, {
              textContent: "000",
              duration: 1.5,
              ease: "power2.out",
              snap: { textContent: 1 },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-graphite-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-electric-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-content max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow */}
        <FadeIn delay={0}>
          <div className="flex items-center gap-4 mb-20">
            <div className="w-12 h-px bg-electric-500" />
            <span className="text-label text-electric-500">Our story</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: Big statement */}
          <div ref={textBlockRef}>
            <h2 className="text-display-xl font-display text-white leading-none mb-10">
              <TextReveal splitBy="words" stagger={0.06} delay={0.1}>
                We believe the most powerful interfaces are felt before they are understood.
              </TextReveal>
            </h2>

            <FadeIn delay={0.3} direction="up">
              <p className="text-graphite-300 text-lg leading-relaxed mb-6">
                Element UX was founded on the conviction that digital experiences should carry the
                weight of cinema, the precision of engineering, and the soul of art.
              </p>
              <p className="text-graphite-300 text-lg leading-relaxed">
                We craft immersive digital environments for brands that refuse to blend in —
                studios, luxury houses, tech visionaries, and cultural institutions.
              </p>
            </FadeIn>
          </div>

          {/* Right: Stats grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.15 * i} direction="up">
                <div className="glass p-8 rounded-2xl group hover:border-electric-500/20 transition-colors duration-500">
                  <div
                    className="text-display-lg font-display text-white mb-3 group-hover:text-electric-500 transition-colors duration-500"
                    data-count
                  >
                    {stat.value}
                  </div>
                  <div className="text-label text-graphite-300 leading-tight">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Visual divider with marquee */}
        <div className="mt-32 overflow-hidden">
          <div className="h-px bg-graphite-600 mb-10" />
          <div className="relative overflow-hidden h-12 flex items-center">
            <div className="marquee-track flex whitespace-nowrap gap-16 will-change-transform">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-16 items-center">
                  {[
                    "IMMERSIVE", "·", "CINEMATIC", "·", "FUTURISTIC", "·",
                    "INTERACTIVE", "·", "ATMOSPHERIC", "·", "ELEMENTAL", "·",
                  ].map((word, i) => (
                    <span
                      key={`${setIdx}-${i}`}
                      className={`text-label tracking-[0.3em] ${
                        word === "·" ? "text-electric-500" : "text-graphite-400"
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="h-px bg-graphite-600 mt-10" />
        </div>
      </div>
    </section>
  );
}

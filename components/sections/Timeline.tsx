"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/ui/TextReveal";
import { timeline } from "@/data/portfolio";

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="timeline" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-graphite-900" />

      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-graphite-600 hidden md:block" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-electric-500/4 blur-[120px] pointer-events-none" />

      <div className="relative z-content max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeIn delay={0}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-electric-500" />
              <span className="text-label text-electric-500">Our evolution</span>
              <div className="w-12 h-px bg-electric-500" />
            </div>
          </FadeIn>

          <h2 className="text-display-xl font-display text-white leading-none">
            <TextReveal splitBy="words" stagger={0.1}>
              The journey
            </TextReveal>
          </h2>
        </div>

        {/* Timeline items */}
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 py-16"
    >
      {/* Left content */}
      <div className={`flex-1 ${isLeft ? "md:pr-20 md:text-right" : "md:order-3 md:pl-20"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className="text-label text-electric-500 block mb-3">{item.year}</span>
          <h3 className="text-display-md font-display text-white mb-4">{item.title}</h3>
          <p className="text-graphite-300 leading-relaxed mb-3">{item.description}</p>
          <p className="text-graphite-400 text-sm italic">{item.detail}</p>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="relative z-10 md:order-2 flex-shrink-0">
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-electric-500 bg-obsidian flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-electric-500"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Right spacer (alternating) */}
      <div className={`flex-1 hidden md:block ${isLeft ? "md:order-3" : "md:order-1"}`} />
    </div>
  );
}

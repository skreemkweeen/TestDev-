"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/ui/TextReveal";
import { processSteps } from "@/data/portfolio";

export function Process() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="process" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-carbon" />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-content max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-electric-500" />
                <span className="text-label text-electric-500">How we work</span>
              </div>
            </FadeIn>
            <h2 className="text-display-xl font-display text-white leading-none">
              <TextReveal splitBy="words" stagger={0.1}>
                Our process
              </TextReveal>
            </h2>
          </div>

          <FadeIn delay={0.3} direction="left">
            <p className="text-graphite-300 max-w-xs text-sm leading-relaxed md:text-right">
              A rigorous methodology that balances creative intuition with engineering precision.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps list */}
          <div className="space-y-2">
            {processSteps.map((step, i) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={i}
                isActive={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          {/* Detail panel */}
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="glass-strong rounded-3xl p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[80px] font-display font-bold text-electric-500/10 leading-none select-none">
                    {processSteps[active].number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-electric-500/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-electric-500" />
                  </div>
                </div>

                <h3 className="text-display-md font-display text-white mb-4">
                  {processSteps[active].title}
                </h3>
                <p className="text-graphite-300 leading-relaxed mb-6">
                  {processSteps[active].description}
                </p>
                <p className="text-graphite-400 text-sm italic border-l-2 border-electric-500/40 pl-4">
                  {processSteps[active].detail}
                </p>

                {/* Progress dots */}
                <div className="flex gap-2 mt-10">
                  {processSteps.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActive(i)}
                      className="h-1 rounded-full cursor-pointer"
                      animate={{
                        width: active === i ? 24 : 8,
                        backgroundColor: active === i ? "#4a9eff" : "#3a3a3a",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
  isActive,
  onClick,
}: {
  step: (typeof processSteps)[number];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
        isActive ? "glass-strong border-electric-500/20" : "hover:glass"
      }`}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-6">
        <span
          className={`text-label transition-colors duration-300 font-mono text-sm ${
            isActive ? "text-electric-500" : "text-graphite-400"
          }`}
        >
          {step.number}
        </span>

        <div className="flex-1">
          <h3
            className={`text-lg font-display font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-graphite-300 group-hover:text-silver-300"
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`text-sm mt-1 leading-relaxed transition-colors duration-300 ${
              isActive ? "text-graphite-300" : "text-graphite-500"
            }`}
          >
            {step.description}
          </p>
        </div>

        <motion.div
          className="w-2 h-2 rounded-full"
          animate={{ backgroundColor: isActive ? "#4a9eff" : "#3a3a3a", scale: isActive ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Active indicator line */}
      <motion.div
        className="absolute left-0 top-4 bottom-4 w-px bg-electric-500 rounded"
        animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

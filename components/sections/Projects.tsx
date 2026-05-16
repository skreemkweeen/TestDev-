"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeIn, TextReveal } from "@/components/ui/TextReveal";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <FadeIn delay={index * 0.12} direction="up">
      <motion.div
        ref={cardRef}
        className="relative group glass rounded-2xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={onMouseMove}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        data-cursor-hover
      >
        {/* Radial follow light */}
        <motion.div
          className="absolute pointer-events-none inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(74,158,255,0.06) 0%, transparent 70%)`,
          }}
        />

        {/* Number */}
        <div className="px-8 pt-8 flex items-start justify-between">
          <span className="text-label text-graphite-400">
            {project.id}
          </span>
          <motion.div
            className="text-label text-electric-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={hovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          >
            View case →
          </motion.div>
        </div>

        {/* Color bar */}
        <div className="mx-8 mt-6 mb-4 h-px">
          <motion.div
            className="h-full"
            style={{ backgroundColor: project.color }}
            animate={{ width: hovered ? "100%" : "30%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Content */}
        <div className="px-8 pb-8 pt-2">
          <span className="text-label text-graphite-400 block mb-3">
            {project.category}
          </span>

          <h3 className="text-display-md font-display text-white mb-4 group-hover:text-electric-500 transition-colors duration-500">
            {project.title}
          </h3>

          <p className="text-graphite-300 leading-relaxed text-sm mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-graphite-500 text-graphite-300 group-hover:border-electric-500/30 group-hover:text-electric-500/80 transition-colors duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Year badge */}
        <div className="absolute top-8 right-8">
          <span className="text-label text-graphite-500 text-[10px]">{project.year}</span>
        </div>

        {/* Bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: project.color }}
          animate={{ opacity: hovered ? 0.6 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </FadeIn>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="projects" className="relative py-40">
      <div className="absolute inset-0 bg-carbon" />
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-electric-500/4 blur-[80px] pointer-events-none" />

      <div className="relative z-content max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <FadeIn delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-electric-500" />
                <span className="text-label text-electric-500">Selected work</span>
              </div>
            </FadeIn>

            <h2 className="text-display-xl font-display text-white leading-none">
              <TextReveal splitBy="words" stagger={0.08}>
                Featured projects
              </TextReveal>
            </h2>
          </div>

          <FadeIn delay={0.3} direction="left">
            <p className="text-graphite-300 max-w-xs text-sm leading-relaxed md:text-right">
              Each engagement is a bespoke journey from concept to cinematic execution.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <FadeIn delay={0.2} direction="up">
          <div className="mt-20 text-center">
            <p className="text-graphite-400 text-sm mb-6">
              Have something ambitious in mind?
            </p>
            <motion.button
              className="inline-flex items-center gap-3 text-label text-silver-300 border border-graphite-500 px-8 py-4 rounded-full hover:border-electric-500/60 hover:text-electric-500 transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Let's collaborate</span>
              <span className="text-electric-500">→</span>
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Story", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScrollProgress();

  useEffect(() => {
    setScrolled(scrollY > 80);
  }, [scrollY]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-700 ${
          scrolled ? "glass border-b border-white/5" : ""
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("#hero")}
          className="group flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-8 h-8 rounded-full border border-electric-500/60 flex items-center justify-center glow-blue">
            <div className="w-2 h-2 rounded-full bg-electric-500" />
          </div>
          <span className="text-label text-silver-200 tracking-[0.25em]">ELEMENT UX</span>
        </motion.button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <NavLink key={link.label} label={link.label} href={link.href} index={i} onClick={() => scrollTo(link.href)} />
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-6">
          <motion.button
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex text-label text-electric-500 border border-electric-500/40 px-5 py-2.5 rounded-full hover:bg-electric-500/10 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a project
          </motion.button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-px bg-silver-200 block"
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-4 h-px bg-silver-200 block"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-px bg-silver-200 block"
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 glass-strong flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-display-md font-display text-silver-300 hover:text-electric-500 transition-colors cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <ScrollProgressBar />
    </>
  );
}

function NavLink({
  label,
  href,
  index,
  onClick,
}: {
  label: string;
  href: string;
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-label text-graphite-300 hover:text-silver-300 transition-colors duration-300 pb-1 cursor-pointer"
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-electric-500"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </button>
  );
}

function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-px bg-electric-500 z-50"
      style={{ width: `${progress * 100}%` }}
    />
  );
}

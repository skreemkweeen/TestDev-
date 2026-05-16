"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "@/lib/gsap-init";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const progressRef = useRef(0);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const raw = Math.min(elapsed / duration, 1);
      const eased = raw < 0.5 ? 2 * raw * raw : -1 + (4 - 2 * raw) * raw;
      progressRef.current = eased;
      setProgress(Math.floor(eased * 100));

      if (raw < 1) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => setPhase("reveal"), 300);
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 1600);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-loader flex flex-col items-center justify-center bg-obsidian overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-white/3"
              style={{ left: `${(i + 1) * 12.5}%` }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: i * 0.05, duration: 1 }}
            />
          ))}
        </div>

        {/* Logo reveal */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-20 h-20 mx-auto mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border border-electric-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-electric-500/60"
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-electric-500 glow-blue" />
            </div>
          </div>

          <motion.p
            className="text-label text-center text-graphite-300 tracking-[0.4em]"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ELEMENT UX
          </motion.p>
        </motion.div>

        {/* Progress */}
        <div className="w-64 space-y-4">
          <div className="h-px bg-graphite-600 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-electric-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            {/* Glow on progress bar */}
            <motion.div
              className="absolute top-0 h-full w-8 blur-sm bg-electric-500/60"
              style={{ left: `${progress}%`, translateX: "-50%" }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-label text-graphite-400 text-[10px]">Initializing</span>
            <motion.span
              className="font-mono text-electric-500 text-sm font-medium"
              key={progress}
            >
              {progress.toString().padStart(3, "0")}
            </motion.span>
          </div>
        </div>

        {/* Curtain reveal */}
        <AnimatePresence>
          {phase === "reveal" && (
            <>
              <motion.div
                className="absolute top-0 left-0 right-0 bg-obsidian origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                style={{ height: "50vh", transformOrigin: "top" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-obsidian origin-bottom"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                style={{ height: "50vh", transformOrigin: "bottom" }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

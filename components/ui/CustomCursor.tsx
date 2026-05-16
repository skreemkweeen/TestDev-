"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 30 });

  const dotX = useSpring(0, { stiffness: 800, damping: 35 });
  const dotY = useSpring(0, { stiffness: 800, damping: 35 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [isVisible, mouseX, mouseY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-500/60 pointer-events-none mix-blend-difference"
        style={{ x: mouseX, y: mouseY, zIndex: 9998 }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? "rgba(74,158,255,0.9)" : "rgba(74,158,255,0.6)",
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none"
        style={{ x: dotX, y: dotY, zIndex: 9999 }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}

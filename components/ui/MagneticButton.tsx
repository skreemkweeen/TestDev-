"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.4,
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary:
      "bg-electric-500 text-void hover:bg-electric-600 shadow-[0_0_30px_rgba(74,158,255,0.3)]",
    ghost: "bg-transparent text-silver-300 hover:text-white",
    outline:
      "border border-graphite-400 text-silver-300 hover:border-electric-500 hover:text-electric-500",
  };

  return (
    <motion.button
      ref={ref}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-label rounded-full overflow-hidden transition-colors duration-300 cursor-pointer ${variants[variant]} ${className}`}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      <motion.span
        className="relative z-10"
        animate={{ y: isHovered ? -1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>

      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 bg-white/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: "inherit" }}
        />
      )}
    </motion.button>
  );
}

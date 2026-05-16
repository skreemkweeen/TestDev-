"use client";

import { useEffect, useRef, useState } from "react";
import { getLenis } from "./useLenis";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = getLenis();

    const onScroll = ({ scroll, progress }: { scroll: number; progress: number }) => {
      setScrollY(scroll);
      setProgress(progress);
    };

    if (lenis) {
      lenis.on("scroll", onScroll);
      return () => lenis.off("scroll", onScroll);
    }

    const onWindowScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(scrollTop);
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);

  return { progress, scrollY };
}

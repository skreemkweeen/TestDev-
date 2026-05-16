"use client";

import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import { ScrollTrigger } from "@/lib/gsap-init";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Sync Lenis with GSAP ScrollTrigger
    const { getLenis } = require("@/hooks/useLenis");
    const lenis = getLenis();

    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value?: number) {
          if (arguments.length && value !== undefined) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: "transform",
      });

      ScrollTrigger.addEventListener("refresh", () => lenis.resize());
      ScrollTrigger.refresh();
    }
  }, []);

  return <>{children}</>;
}

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { LenisProvider } from "@/components/providers/LenisProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/layout/Navigation";
import { Loader } from "@/components/sections/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <LenisProvider>
        <CustomCursor />
        <Navigation />

        <main>
          <Hero />
          <About />
          <Projects />
          <Timeline />
          <Process />
          <Contact />
        </main>
      </LenisProvider>
    </>
  );
}

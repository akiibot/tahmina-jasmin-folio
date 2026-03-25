"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";

export default function Providers({ children }: { children: ReactNode }) {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const tick = (time: number) => {
      lenis.raf(time);
      rafId.current = window.requestAnimationFrame(tick);
    };

    rafId.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  return children;
}


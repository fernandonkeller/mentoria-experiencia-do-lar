"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [disableScrollReveal, setDisableScrollReveal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const touchQuery = window.matchMedia("(pointer: coarse)");

    const sync = () => {
      setDisableScrollReveal(mobileQuery.matches || touchQuery.matches);
    };

    sync();
    mobileQuery.addEventListener("change", sync);
    touchQuery.addEventListener("change", sync);

    return () => {
      mobileQuery.removeEventListener("change", sync);
      touchQuery.removeEventListener("change", sync);
    };
  }, []);

  const disableAnimation = shouldReduceMotion || disableScrollReveal;

  return (
    <motion.div
      className={className}
      initial={disableAnimation ? false : { opacity: 0, y: 28 }}
      whileInView={disableAnimation ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

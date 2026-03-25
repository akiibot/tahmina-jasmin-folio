"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

export default function SplitText({
  text,
  className,
  as: Component = "span",
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ").filter(Boolean);

  const Comp = Component;

  if (reduce) {
    return (
      <Comp className={className}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`}>{w}{i < words.length - 1 ? " " : ""}</span>
        ))}
      </Comp>
    );
  }

  return (
    <Comp className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block align-baseline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * stagger }}
        >
          <span className="inline-block">{word}{i < words.length - 1 ? " " : ""}</span>
        </motion.span>
      ))}
    </Comp>
  );
}


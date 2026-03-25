"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_30%_20%,rgba(201,165,106,0.20),transparent_60%),radial-gradient(700px_380px_at_70%_60%,rgba(185,130,134,0.14),transparent_60%)]" />
      <motion.div
        className="relative rounded-3xl border border-stroke/60 bg-surface/25 px-8 py-7 text-center"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-xs tracking-[0.18em] text-muted">
          TAHMINA JASMIN
        </div>
        <div className="mt-3 font-display text-2xl leading-[1.1]">
          Loading your cinematic feed
        </div>
        <div className="mt-6 h-1.5 w-56 overflow-hidden rounded-full bg-foreground/10">
          <motion.div
            className="h-full w-1/3 bg-gold"
            animate={{ x: ["-60%", 180] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}


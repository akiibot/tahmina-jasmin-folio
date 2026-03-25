"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-b from-gold/85 to-gold/55 text-background shadow-[0_0_45px_rgba(201,165,106,0.20)] hover:from-gold/95 hover:to-gold/65",
    outline:
      "border border-stroke/80 bg-surface/40 text-foreground/90 hover:bg-surface-2/60",
    ghost: "text-foreground/85 hover:text-foreground bg-transparent",
  };

  const cls = cn(base, styles[variant], className);

  if (href) {
    return (
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }}>
        <Link href={href} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }} className={cls}>
      {children}
    </motion.button>
  );
}


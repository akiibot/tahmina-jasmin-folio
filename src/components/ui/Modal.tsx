"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] px-4 sm:px-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-label="Close modal overlay"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative mx-auto mt-[8vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-stroke/70 bg-background/95 backdrop-blur shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
            style={{ maxHeight: "calc(100svh - 16vh)" }}
            initial={{ y: 18, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-stroke/50 p-5 sm:p-6">
              <div>
                <div className="text-xs tracking-[0.18em] text-muted">CASE STUDY</div>
                <h3 className="mt-2 font-display text-2xl leading-[1.1]">
                  {title}
                </h3>
              </div>
              <button
                className="rounded-full border border-stroke/70 bg-surface/40 px-3 py-2 text-sm text-foreground/90 hover:bg-surface-2/60"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


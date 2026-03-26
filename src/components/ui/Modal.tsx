"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], area[href], iframe, button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), [contenteditable="true"], [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled"));
}

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
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusDialogStart = () => {
      const focusable = getFocusableElements(dialog);
      const first = focusable[0] ?? dialog;
      first.focus();
    };
    focusDialogStart();
    const rafId = window.requestAnimationFrame(focusDialogStart);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusableElements(dialog);
      const first = focusable[0] ?? dialog;
      const last = focusable[focusable.length - 1] ?? dialog;
      const active = document.activeElement as HTMLElement | null;
      if (focusable.length === 0) {
        e.preventDefault();
        dialog.focus();
        return;
      }

      if (!active || !dialog.contains(active)) {
        e.preventDefault();
        first.focus();
        return;
      }

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || typeof document === "undefined") return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto p-2 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-label="Close modal overlay"
            type="button"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative flex w-full max-w-6xl min-h-0 flex-col overflow-hidden rounded-3xl border border-stroke/70 bg-background/95 backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.45)] max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)]"
            initial={{ y: 18, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            tabIndex={-1}
            ref={dialogRef}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-stroke/50 bg-background/95 p-4 sm:p-6">
              <div>
                <h3
                  id={titleId}
                  className="font-display text-[clamp(1.85rem,3vw,2.6rem)] leading-[1.08]"
                >
                  {title}
                </h3>
              </div>
              <button
                className="shrink-0 rounded-full border border-stroke/70 bg-surface/40 px-4 py-2 text-sm text-foreground/90 hover:bg-surface-2/60"
                onClick={onClose}
                type="button"
              >
                Close
              </button>
            </div>

            <div id={descriptionId} className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

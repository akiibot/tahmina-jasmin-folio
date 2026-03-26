"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const htmlTheme = document.documentElement.dataset.theme;
    if (htmlTheme === "light" || htmlTheme === "dark") return htmlTheme;
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return "dark";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
  };

  const scrollToSection = useCallback((href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const headerHeight = headerRef.current?.offsetHeight ?? 64;
    const top =
      target.getBoundingClientRect().top + window.scrollY - (headerHeight + 18);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reduceMotion ? "auto" : "smooth",
    });
    if (window.location.hash !== href) {
      window.history.replaceState(null, "", href);
    }
  }, []);

  const onNavLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);
      window.requestAnimationFrame(() => {
        scrollToSection(href);
      });
    },
    [scrollToSection]
  );

  const brandMark = useMemo(
    () => (
      <span className="inline-flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_30px_rgba(201,165,106,0.4)]"
        />
        <span className="tracking-[0.14em] text-xs text-muted">TAHMINA</span>
      </span>
    ),
    []
  );

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50",
        scrolled
          ? "bg-background/70 backdrop-blur border-b border-stroke/60"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Go to home"
            onClick={() => setOpen(false)}
          >
            {brandMark}
            <span
              className={cn(
                "hidden sm:inline text-sm tracking-wide text-foreground/85",
                "transition-colors group-hover:text-foreground"
              )}
            >
              Creative Multimedia Storyteller
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => onNavLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-full border border-stroke/80 bg-surface/40 px-4 py-2 text-sm text-foreground/90 transition hover:bg-surface-2/60"
              onClick={(e) => onNavLinkClick(e, "#contact")}
            >
              Let&apos;s Connect
            </a>

            <button
              type="button"
              className="ml-1 inline-flex items-center justify-center rounded-full border border-stroke/80 bg-surface/40 p-3 text-foreground/90 transition hover:bg-surface-2/60"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </nav>

          <div className="md:hidden inline-flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-stroke/80 bg-surface/40 p-3 text-foreground/90 transition hover:bg-surface-2/60"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-stroke/80 bg-surface/40 p-3"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="mobile-menu"
              className="absolute bottom-2 right-2 top-2 w-[min(380px,calc(100%-1rem))] overflow-y-auto rounded-2xl border border-stroke/60 bg-background/95 p-4 backdrop-blur md:right-3 md:top-3 md:bottom-3 md:w-[min(360px,calc(100%-24px))]"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">{brandMark}</div>
                <button
                  type="button"
                  className="rounded-full border border-stroke/80 bg-surface/40 p-3"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-stroke/60 bg-surface/30 px-4 py-3 text-sm text-foreground/90 transition hover:bg-surface/60"
                    onClick={(e) => onNavLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 rounded-xl border border-gold/50 bg-gradient-to-b from-gold/18 to-transparent px-4 py-3 text-sm text-foreground/95 transition hover:from-gold/26"
                  onClick={(e) => onNavLinkClick(e, "#contact")}
                >
                  Let&apos;s Connect
                </a>
              </div>

              <div className="mt-8 text-xs leading-relaxed text-muted">
                Cinematic storytelling for brands, communities, and digital
                platforms.
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

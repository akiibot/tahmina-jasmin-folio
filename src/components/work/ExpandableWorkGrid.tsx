"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { X, ExternalLink, Play } from "lucide-react";
import type { WorkItem } from "@/types/portfolio";
import FacebookVideoEmbed from "./FacebookVideoEmbed";
import { cn } from "@/lib/cn";

interface ExpandableWorkGridProps {
  items: WorkItem[];
}

export default function ExpandableWorkGrid({ items }: ExpandableWorkGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  const activeId = searchParams.get("work");
  const activeItem = items.find((w) => w.id === activeId) ?? null;

  const setActiveId = useCallback(
    (id: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (id) {
        params.set("work", id);
      } else {
        params.delete("work");
      }
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Keyboard escape handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeId) {
        setActiveId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId, setActiveId]);

  // Scroll expanded card into view
  useEffect(() => {
    if (activeId && expandedRef.current) {
      expandedRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeId]);

  return (
    <LayoutGroup>
      <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const hasActive = activeId !== null;
          const isInactive = hasActive && !isActive;

          return (
            <motion.div
              key={item.id}
              layoutId={item.id}
              ref={isActive ? expandedRef : undefined}
              className={cn(
                "relative",
                isActive && "sm:col-span-2 lg:col-span-3 z-20"
              )}
              transition={{
                layout: { duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              {isActive ? (
                <ExpandedCard item={item} onClose={() => setActiveId(null)} />
              ) : (
                <CollapsedCard
                  item={item}
                  onClick={() => setActiveId(item.id)}
                  dimmed={isInactive}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

function CollapsedCard({
  item,
  onClick,
  dimmed,
}: {
  item: WorkItem;
  onClick: () => void;
  dimmed: boolean;
}) {
  const reduce = useReducedMotion();
  const variant = item.poster.variant;

  const gradients: Record<number, string> = {
    1: "from-gold/22 via-surface/10 to-rose/14",
    2: "from-rose/18 via-surface/10 to-gold/16",
    3: "from-gold/18 via-surface/10 to-foreground/10",
    4: "from-rose/16 via-surface/10 to-gold/14",
    5: "from-gold/20 via-surface/10 to-rose/12",
    6: "from-foreground/10 via-surface/10 to-gold/18",
  };

  return (
    <motion.button
      type="button"
      className={cn(
        "group relative h-full w-full rounded-3xl text-left transition-all duration-300",
        dimmed && "opacity-50 scale-[0.98] pointer-events-none"
      )}
      onClick={onClick}
      aria-label={`Play ${item.title}`}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-stroke/60 bg-surface/25">
        {/* Background gradient */}
        <div className={cn("absolute inset-0 bg-gradient-to-b", gradients[variant])} />
        <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06)_1px,transparent_1px,transparent_8px)] [mix-blend-mode:overlay]" />

        {/* Hover glow */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_360px_at_20%_0%,rgba(201,165,106,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative p-5">
          <div className="text-xs tracking-[0.18em] text-muted">{item.category}</div>
          <div className="mt-2 font-display text-xl leading-[1.1]">{item.title}</div>
          <div className="mt-2 text-xs text-foreground/75">{item.year} • {item.role.split("•")[0].trim()}</div>

          {/* Play indicator */}
          <div className="mt-5 flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
              <Play className="h-4 w-4 ml-0.5" />
            </span>
            <span className="text-xs text-muted group-hover:text-foreground/80 transition-colors">
              Click to play
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ExpandedCard({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-hidden rounded-3xl border border-stroke/70 bg-surface/40 backdrop-blur-sm"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke/60 bg-background/80 text-foreground/70 transition hover:bg-background hover:text-foreground"
        aria-label="Close player"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="grid gap-6 p-5 lg:grid-cols-12 lg:items-start lg:p-6">
        {/* Video Player */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <FacebookVideoEmbed item={item} aspectClassName="aspect-video" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="space-y-4 lg:col-span-5">
          <div>
            <div className="text-xs tracking-[0.18em] text-muted">{item.category}</div>
            <h3 className="mt-2 font-display text-2xl leading-[1.1]">{item.title}</h3>
          </div>

          <p className="text-sm leading-relaxed text-foreground/78 line-clamp-3">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-stroke/60 bg-background/15 px-3 py-1 text-xs text-foreground/80">
              {item.year}
            </span>
            <span className="rounded-full border border-stroke/60 bg-background/15 px-3 py-1 text-xs text-foreground/80">
              {item.role.split("•")[0].trim()}
            </span>
          </div>

          {/* Highlights */}
          <div>
            <div className="text-xs tracking-[0.18em] text-muted">HIGHLIGHTS</div>
            <ul className="mt-2 space-y-1.5">
              {item.highlights.slice(0, 2).map((h) => (
                <li key={h} className="flex gap-2 text-sm text-foreground/80">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span className="line-clamp-1">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <div className="text-xs tracking-[0.18em] text-muted">TOOLS</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tools.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-stroke/50 bg-background/10 px-2.5 py-0.5 text-[11px] text-foreground/70"
                >
                  {tool}
                </span>
              ))}
              {item.tools.length > 4 && (
                <span className="rounded-full border border-stroke/50 bg-background/10 px-2.5 py-0.5 text-[11px] text-foreground/70">
                  +{item.tools.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={item.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stroke/70 bg-surface/40 px-4 py-2 text-sm transition hover:bg-surface-2/60"
            >
              <ExternalLink className="h-4 w-4" />
              Open on Facebook
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

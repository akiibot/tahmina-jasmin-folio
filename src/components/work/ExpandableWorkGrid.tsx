"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Maximize2, X } from "lucide-react";
import type { WorkItem } from "@/types/portfolio";
import FacebookVideoEmbed from "./FacebookVideoEmbed";
import { cn } from "@/lib/cn";

interface ExpandableWorkGridProps {
  items: WorkItem[];
}

export default function ExpandableWorkGrid({ items }: ExpandableWorkGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <>
      {/* Main grid with inline playable videos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: reduce ? 0 : 0.5,
              delay: reduce ? 0 : index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <WorkCard
              item={item}
              onExpand={() => setExpandedId(item.id)}
            />
          </motion.div>
        ))}
      </div>

      {/* Expanded overlay modal for details */}
      {expandedId && (
        <ExpandedOverlay
          item={items.find((w) => w.id === expandedId)!}
          onClose={() => setExpandedId(null)}
        />
      )}
    </>
  );
}

function WorkCard({
  item,
  onExpand,
}: {
  item: WorkItem;
  onExpand: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-stroke/50 bg-surface/20 backdrop-blur-sm"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {/* Video embed - directly playable */}
      <div className="relative">
        <FacebookVideoEmbed
          item={item}
          aspectClassName="aspect-[9/16]"
        />
        
        {/* Hover overlay with expand button */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={onExpand}
            className="inline-flex items-center gap-2 rounded-full border border-stroke/70 bg-background/90 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface"
            aria-label={`View details for ${item.title}`}
          >
            <Maximize2 className="h-4 w-4" />
            View Details
          </button>
        </div>
      </div>

      {/* Card info */}
      <div className="p-4">
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
          {item.category}
        </div>
        <h3 className="mt-1.5 font-display text-lg leading-tight text-foreground line-clamp-2">
          {item.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted">
            {item.year} • {item.role.split("•")[0].trim()}
          </span>
          <a
            href={item.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-stroke/50 text-muted transition hover:border-gold/50 hover:text-gold"
            aria-label={`Open ${item.title} on Facebook`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ExpandedOverlay({
  item,
  onClose,
}: {
  item: WorkItem;
  onClose: () => void;
}) {
  // Close on escape key
  if (typeof window !== "undefined") {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup handled by component unmount
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-3xl border border-stroke/60 bg-surface/60 backdrop-blur-xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke/60 bg-background/80 text-foreground/70 transition hover:bg-background hover:text-foreground"
          aria-label="Close details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-6 p-6 lg:grid-cols-12 lg:items-start lg:p-8">
          {/* Video Player - larger in modal */}
          <div className="lg:col-span-7">
            <FacebookVideoEmbed item={item} aspectClassName="aspect-video" />
          </div>

          {/* Details */}
          <div className="space-y-5 lg:col-span-5">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                {item.category}
              </div>
              <h3 className="mt-2 font-display text-2xl leading-tight lg:text-3xl">
                {item.title}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-foreground/80">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-stroke/60 bg-background/20 px-3 py-1 text-xs text-foreground/80">
                {item.year}
              </span>
              <span className="rounded-full border border-stroke/60 bg-background/20 px-3 py-1 text-xs text-foreground/80">
                {item.role.split("•")[0].trim()}
              </span>
            </div>

            {/* Highlights */}
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Highlights
              </div>
              <ul className="mt-2 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-foreground/80">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Tools
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-stroke/50 bg-background/15 px-2.5 py-0.5 text-[11px] text-foreground/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={item.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold transition hover:bg-gold/20"
              >
                <ExternalLink className="h-4 w-4" />
                Open on Facebook
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

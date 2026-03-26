"use client";

import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal";
import WorkPoster from "@/components/work/WorkPoster";
import type { WorkItem } from "@/types/portfolio";
import FacebookVideoEmbed from "@/components/work/FacebookVideoEmbed";
import { ExternalLink } from "lucide-react";

export default function WorkModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: WorkItem | null;
}) {
  if (!item) return null;

  return (
    <Modal open={open} onClose={onClose} title={item.title}>
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <WorkPoster item={item} />
        </div>

        <div className="space-y-4 lg:col-span-7">
          <VideoPlayerBlock item={item} />

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-stroke/70 bg-surface/35 px-3 py-1 text-xs text-foreground/85">
              {item.category}
            </span>
            <span className="rounded-full border border-stroke/70 bg-surface/35 px-3 py-1 text-xs text-foreground/85">
              {item.year}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-foreground/78">
            {item.description}
          </p>

          <div className="space-y-4">
            <div>
              <div className="text-xs tracking-[0.18em] text-muted">ROLE</div>
              <div className="mt-2 text-sm text-foreground/85">
                {item.role}
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.18em] text-muted">
                HIGHLIGHTS
              </div>
              <ul className="mt-3 space-y-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-foreground/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-gold"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-[0.18em] text-muted">
                DELIVERABLES
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-stroke/60 bg-background/15 px-3 py-1 text-xs text-foreground/80"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.18em] text-muted">TOOLS</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-stroke/60 bg-background/15 px-3 py-1 text-xs text-foreground/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            initial={false}
            whileHover={{}}
          >
            <a
              href={item.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stroke/80 bg-surface/40 px-5 py-2.5 text-sm font-medium tracking-wide transition hover:bg-surface-2/60"
              aria-label="Open video on Facebook in a new tab"
            >
              <ExternalLink className="h-4 w-4" />
              Open on Facebook
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold/85 to-gold/55 px-5 py-2.5 text-sm font-medium tracking-wide text-background shadow-[0_0_45px_rgba(201,165,106,0.20)] transition hover:from-gold/95 hover:to-gold/65"
            >
              Request a Similar Project
            </a>
          </motion.div>
        </div>
      </div>
    </Modal>
  );
}

function VideoPlayerBlock({ item }: { item: WorkItem }) {
  return (
    <div className="space-y-4">
      <motion.div
        key="video"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <FacebookVideoEmbed item={item} aspectClassName="aspect-[9/16] lg:aspect-[16/9]" />
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import WorkPoster from "@/components/work/WorkPoster";
import type { WorkItem } from "@/types/portfolio";

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
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <WorkPoster item={item} className="lg:sticky lg:top-6" />
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-stroke/70 bg-surface/35 px-3 py-1 text-xs text-foreground/85">
              {item.category}
            </span>
            <span className="rounded-full border border-stroke/70 bg-surface/35 px-3 py-1 text-xs text-foreground/85">
              {item.year}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-foreground/78">
            {item.description}
          </p>

          <div className="mt-5 space-y-4">
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
            className="mt-7 flex flex-wrap items-center gap-3"
            initial={false}
            whileHover={{}}
          >
            <Button href={item.facebookUrl} variant="outline" className="border-stroke/80">
              Open Reel / Video
            </Button>
            <Button href="#contact" className="border-gold/50">
              Request a Similar Project
            </Button>
          </motion.div>
        </div>
      </div>
    </Modal>
  );
}


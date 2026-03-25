"use client";

import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/ui/Modal";
import WorkPoster from "@/components/work/WorkPoster";
import type { WorkItem } from "@/types/portfolio";
import FacebookVideoEmbed from "@/components/work/FacebookVideoEmbed";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

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
          <VideoPlayerBlock item={item} />

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
  // Lazy render the iframe only after user interaction.
  const [playing, setPlaying] = useState(false);

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div
            key="video"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <FacebookVideoEmbed item={item} />
          </motion.div>
        ) : (
          <motion.div
            key="poster"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-stroke/60 bg-background/15">
              <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_30%_20%,rgba(201,165,106,0.20),transparent_60%),radial-gradient(600px_380px_at_70%_60%,rgba(185,130,134,0.14),transparent_60%)]" />
              <div className="absolute inset-0 opacity-60 [background:repeating-linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_7px)] [mix-blend-mode:overlay]" />

              <button
                type="button"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-left"
                onClick={() => setPlaying(true)}
                aria-label="Play video"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-stroke/70 bg-background/25 backdrop-blur shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                  <Play className="h-6 w-6 text-gold" />
                </span>
                <span className="text-xs tracking-[0.18em] text-muted">
                  TAP TO PLAY
                </span>
                <span className="max-w-[85%] text-sm leading-relaxed text-foreground/85">
                  A cinematic preview of the reel.
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


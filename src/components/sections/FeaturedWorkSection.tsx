"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { workItems } from "@/content/projects";
import WorkPoster from "@/components/work/WorkPoster";
import WorkModal from "@/components/work/WorkModal";
import { cn } from "@/lib/cn";
import { ExternalLink } from "lucide-react";

export default function FeaturedWorkSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = useMemo(() => {
    return workItems.find((w) => w.id === activeId) ?? null;
  }, [activeId]);

  return (
    <section id="work" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="FEATURED WORK"
            title="Premium edits, voice-led reels, and brand storytelling."
            subtitle="Selected case study highlights—crafted to feel cinematic, editorial, and audience-first."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, i) => (
            <Reveal key={item.id} delayMs={i * 70}>
              <motion.button
                type="button"
                className="group relative h-full w-full rounded-3xl text-left"
                onClick={() => setActiveId(item.id)}
                aria-label={`Open case study: ${item.title}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-stroke/60 bg-surface/25">
                  <div className="absolute inset-0 bg-[radial-gradient(1000px_360px_at_20%_0%,rgba(201,165,106,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/30" />

                  <div className="relative p-3">
                    <motion.div
                      className="scale-[1.02]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.35 }}
                    >
                      <WorkPoster item={item} className="h-[220px]" />
                    </motion.div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <motion.div
                      className={cn(
                        "rounded-2xl border border-stroke/60 bg-background/75 p-3 backdrop-blur sm:p-4",
                        "opacity-100 translate-y-0 md:opacity-0 md:translate-y-6 transition-all duration-300",
                        "md:group-hover:opacity-100 md:group-hover:translate-y-0"
                      )}
                    >
                      <div className="text-xs tracking-[0.18em] text-muted">
                        {item.category}
                      </div>
                      <div className="mt-2 font-display text-lg leading-[1.12]">
                        {item.title}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-foreground/75">
                          {item.year} • View details
                        </span>
                        <span className="inline-flex items-center gap-2 text-xs text-gold">
                          <ExternalLink className="h-4 w-4" />
                          Facebook
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <AnimatePresence>
          <WorkModal
            open={activeId !== null}
            onClose={() => setActiveId(null)}
            item={activeItem}
          />
        </AnimatePresence>
      </Section>
    </section>
  );
}

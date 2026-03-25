"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Landmark, Megaphone, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { affiliations } from "@/content/affiliations";

const icons = [Landmark, ShieldCheck, HeartHandshake, Megaphone] as const;

export default function AffiliationsSection() {
  return (
    <section id="affiliations" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="ORGANIZATIONS & COMMUNITY WORK"
            title="Community involvement that shaped her communication style."
            subtitle="From leadership and volunteering to debate and event support—Tahmina builds confidence through participation and mindful engagement."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {affiliations.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.id} delayMs={i * 90}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-stroke/60 bg-surface/25 p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-2xl border border-stroke/60 bg-background/15 p-3">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div className="text-xs tracking-[0.18em] text-muted">
                      {a.period ?? "—"}
                    </div>
                  </div>
                  <div className="mt-4 font-display text-2xl leading-[1.05] tracking-[var(--track-tight)]">
                    {a.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/78">
                    {a.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </section>
  );
}


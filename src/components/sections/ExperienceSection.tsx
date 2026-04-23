"use client";

import { motion } from "framer-motion";
import { Mic2, Users, Film, Megaphone } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/content/experience";

const roleIcons: Record<string, typeof Mic2> = {
  "exp-1": Mic2,
  "exp-2": Users,
  "exp-3": Film,
  "exp-4": Megaphone,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="EXPERIENCE"
            title="Roles that shaped voice, edits, and promotion."
            subtitle="A storytelling-led career from narration to brand content."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {experience.map((role, idx) => {
            const Icon = roleIcons[role.id] || Mic2;
            return (
              <Reveal key={role.id} delayMs={idx * 80}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-3xl border border-stroke/60 bg-surface/25 p-5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_100%,rgba(185,130,134,0.12),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-stroke/50 bg-background/30 text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-stroke/50 bg-background/15 px-3 py-1 text-xs text-muted">
                        {role.period}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg leading-[1.15]">
                      {role.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-2">
                      {role.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {role.focus.slice(0, 2).map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-stroke/50 bg-background/15 px-2.5 py-0.5 text-[11px] text-foreground/70"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </section>
  );
}

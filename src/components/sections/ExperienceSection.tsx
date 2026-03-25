"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/content/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="EXPERIENCE"
            title="Roles that shaped her voice, her edits, and her promotion craft."
            subtitle="A storytelling-led career path—built from narration, community engagement, cinematic editing, and brand-forward communication."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <motion.div
              className="rounded-3xl border border-stroke/60 bg-surface/25 p-6 lg:sticky lg:top-24"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs tracking-[0.18em] text-muted">
                STORYING THROUGH WORK
              </div>
              <div className="mt-4 font-display text-2xl leading-[1.12] tracking-[var(--track-tight)]">
                Voice + Visual Rhythm
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/78">
                Each role contributed something essential: tone, timing, trust,
                community clarity, and the craft of turning attention into action.
              </p>

              <div className="mt-5 rounded-2xl border border-stroke/50 bg-background/15 p-4">
                <div className="text-xs tracking-[0.18em] text-muted">FOCUS</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Narration", "Editing", "Promotion", "Moderation"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-stroke/60 bg-surface/30 px-3 py-1 text-xs text-foreground/80"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative pl-6 space-y-6">
              <div className="absolute left-2 top-3 bottom-3 w-px bg-stroke/60" />
              {experience.map((role, idx) => (
                <Reveal key={role.id} delayMs={idx * 90}>
                  <div className="relative rounded-3xl border border-stroke/60 bg-surface/25 p-6">
                    <div className="absolute left-[-0.4rem] top-6 flex h-10 w-10 items-center justify-center">
                      <span className="h-3.5 w-3.5 rounded-full bg-gold shadow-[0_0_30px_rgba(201,165,106,0.35)]" />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs tracking-[0.18em] text-muted">
                          {role.period}
                        </div>
                        <div className="mt-2 font-display text-xl leading-[1.1]">
                          {role.title}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/78">
                      {role.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-stroke/60 bg-background/15 px-3 py-1 text-xs text-foreground/80"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}


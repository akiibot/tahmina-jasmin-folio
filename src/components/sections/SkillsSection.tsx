"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/content/skills";
import type { SkillItem } from "@/types/portfolio";
import { cn } from "@/lib/cn";

function ToolPill({ name }: { name: SkillItem["tools"][number] }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stroke/60 bg-surface/30 px-3 py-1 text-xs text-foreground/80">
      {name}
    </span>
  );
}

function SkillCard({ item }: { item: SkillItem }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-stroke/60 bg-surface/25"
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_20%_0%,rgba(201,165,106,0.18),transparent_52%),radial-gradient(700px_220px_at_90%_80%,rgba(185,130,134,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.18em] text-muted">
              EXPERTISE
            </div>
            <h3
              className={cn(
                "mt-2 font-display text-xl leading-[1.1] tracking-[var(--track-tight)]"
              )}
            >
              {item.title}
            </h3>
          </div>
          <div className="hidden sm:block h-10 w-10 rounded-2xl border border-stroke/60 bg-background/15" />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-foreground/78">
          {item.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="md:hidden w-full">
            <div className="mb-2 text-xs tracking-[0.18em] text-muted">
              TOOLS
            </div>
          </div>
          {item.tools.map((tool) => (
            <div key={tool} className="md:hidden">
              <ToolPill name={tool} />
            </div>
          ))}
        </div>

        <motion.div
          className="mt-5 hidden md:block"
          initial={false}
          animate={false}
        >
          <motion.div
            className="rounded-2xl border border-stroke/50 bg-background/15 p-4 opacity-0 translate-y-2 transition-all duration-250 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-xs tracking-[0.18em] text-muted">TOOLS</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <ToolPill key={tool} name={tool} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="SKILLS / EXPERTISE"
            title="A creative workflow built for voice, motion, and meaning."
            subtitle="From video & audio editing to brand promotion and AI-assisted production—Tahmina’s approach stays editorial, cinematic, and audience-first."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <Reveal key={s.id} delayMs={120} className="">
              <SkillCard item={s} />
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}

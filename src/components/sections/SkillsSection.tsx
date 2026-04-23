"use client";

import { motion } from "framer-motion";
import { Video, Headphones, Mic2, Film, Megaphone, TrendingUp, Shield, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/content/skills";
import type { SkillItem } from "@/types/portfolio";
import { cn } from "@/lib/cn";

const skillIcons: Record<string, typeof Video> = {
  "video-editing": Video,
  "audio-editing": Headphones,
  "commercial-narration": Mic2,
  "cinematic-video": Film,
  "brand-promotion": Megaphone,
  "digital-marketing": TrendingUp,
  "content-moderation": Shield,
  "ai-assisted": Sparkles,
};

function SkillCard({ item }: { item: SkillItem }) {
  const Icon = skillIcons[item.id] || Sparkles;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-stroke/60 bg-surface/25 h-full"
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(201,165,106,0.14),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-stroke/50 bg-background/30 text-gold">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <h3 className="mt-4 font-display text-lg leading-[1.1]">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-2">
          {item.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-stroke/50 bg-background/15 px-2.5 py-0.5 text-[11px] text-foreground/70"
            >
              {tool}
            </span>
          ))}
          {item.tools.length > 3 && (
            <span className="rounded-full border border-stroke/50 bg-background/15 px-2.5 py-0.5 text-[11px] text-foreground/70">
              +{item.tools.length - 3}
            </span>
          )}
        </div>
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
            kicker="SKILLS"
            title="Voice, motion, and meaning."
            subtitle="Editorial workflow for video, audio, and brand storytelling."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.id} delayMs={i * 60}>
              <SkillCard item={s} />
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}

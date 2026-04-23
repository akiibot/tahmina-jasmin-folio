"use client";

import Image from "next/image";
import { Mic2, Clapperboard, Palette } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const pillars = [
  {
    icon: Mic2,
    title: "Narrate",
    body: "Voice-led storytelling with warmth, clarity, and confident delivery for brand promos.",
    color: "text-gold",
  },
  {
    icon: Clapperboard,
    title: "Edit",
    body: "Cinematic pacing and editorial rhythm that keeps audiences engaged from hook to close.",
    color: "text-rose",
  },
  {
    icon: Palette,
    title: "Design",
    body: "Caption-ready visuals, brand-safe typography, and polished thumbnails that build trust.",
    color: "text-gold",
  },
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left column with heading and portrait */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-start gap-5">
                {/* Circular portrait inset */}
                <div className="relative hidden shrink-0 sm:block">
                  <div
                    className="absolute -inset-1 rounded-full blur-md opacity-50"
                    style={{ background: "linear-gradient(135deg, var(--aurora-gold), var(--aurora-rose))" }}
                    aria-hidden="true"
                  />
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border border-gold/30">
                    <Image
                      src="/images/tahmina-portrait.jpg"
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <SectionHeading
                    kicker="ABOUT"
                    title="Sociology mindset, cinematic voice."
                    subtitle="Dhaka-based creative blending narration, editing, and brand promotion."
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <p className="mt-6 text-sm leading-relaxed text-foreground/78 max-w-md">
                With a Sociology background from University of Chittagong, Tahmina brings
                human-centered storytelling to every project — voice-led promos, cinematic
                edits, and audience-first digital content.
              </p>
            </Reveal>
          </div>

          {/* Right column with pillars */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delayMs={150 + i * 80}>
                  <div className="group rounded-3xl border border-stroke/55 bg-surface/30 p-5 transition-colors hover:bg-surface/40">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-stroke/50 bg-background/30 ${pillar.color}`}>
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-display text-xl leading-[1.1]">
                      {pillar.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Quick facts row */}
            <Reveal delayMs={400}>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Dhaka, Bangladesh
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                  Sociology Background
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Storytelling-Led Work
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </section>
  );
}

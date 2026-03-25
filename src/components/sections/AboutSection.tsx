"use client";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/content/profile";

const stats = [
  { k: "Dhaka", v: "Based in Bangladesh", note: "Local insight + global fluency" },
  {
    k: "University of Chittagong",
    v: "Sociology (2001)",
    note: "Story, people, and communication",
  },
  {
    k: "Multimedia Focus",
    v: "Video • Audio • Narration",
    note: "Editorial rhythm for real audiences",
  },
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                kicker="ABOUT"
                title="A sociology mindset with a cinematic creative voice."
                subtitle={
                  <>
                    Tahmina Jasmin is a Dhaka-based creative professional with a
                    background in Sociology from the University of Chittagong.
                    She combines narration, digital promotion, and multimedia
                    editing to craft meaningful visual and branded content.
                  </>
                }
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              <Reveal delayMs={120}>
                <p className="text-base leading-relaxed text-foreground/80">
                  Her work blends cinematic style, emotional tone, and audience-focused
                  communication—for businesses, communities, and digital platforms.
                  From voice-led promos to caption-ready reels, every piece is designed
                  to feel human, clear, and premium.
                </p>
              </Reveal>

              <Reveal delayMs={180}>
                <div className="rounded-3xl border border-stroke/60 bg-surface/30 p-6">
                  <div className="text-xs tracking-[0.18em] text-muted">
                    CURRENT POSITION
                  </div>
                  <div className="mt-2 font-display text-2xl leading-[1.15]">
                    {profile.headline}
                  </div>
                  <div className="mt-3 text-sm text-foreground/78 leading-relaxed">
                    Transition into digital creativity through promotion, narration,
                    community engagement, and cinematic editing—always guided by
                    storytelling discipline.
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((s, i) => (
                  <Reveal key={s.k} delayMs={260 + i * 100}>
                    <div className="rounded-3xl border border-stroke/55 bg-background/25 p-5">
                      <div className="text-xs tracking-[0.18em] text-muted">
                        {s.k}
                      </div>
                      <div className="mt-3 font-display text-xl leading-[1.15]">
                        {s.v}
                      </div>
                      <div className="mt-2 text-sm text-foreground/74">
                        {s.note}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}


"use client";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { education } from "@/content/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="EDUCATION"
            title="Academic foundations for storytelling clarity."
            subtitle="Sociology as a lens for people and culture—paired with consistent performance and disciplined communication."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.id} delayMs={i * 90}>
              <div className="rounded-3xl border border-stroke/60 bg-surface/25 p-6">
                <div className="text-xs tracking-[0.18em] text-muted">
                  {e.period}
                </div>
                <div className="mt-3 font-display text-2xl leading-[1.1] tracking-[var(--track-tight)]">
                  {e.school}
                </div>
                <div className="mt-2 text-sm text-foreground/80">{e.degree}</div>
                <div className="mt-4 rounded-2xl border border-stroke/50 bg-background/15 p-4">
                  <div className="text-xs tracking-[0.18em] text-muted">
                    RESULT
                  </div>
                  <div className="mt-2 text-lg font-medium text-foreground/90">
                    {e.result}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}


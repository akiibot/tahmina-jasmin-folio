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

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4">
            <div className="rounded-3xl border border-stroke/60 bg-surface/25 p-6 lg:sticky lg:top-24">
              <div className="text-xs tracking-[0.18em] text-muted">
                ACADEMIC ARC
              </div>
              <div className="mt-3 font-display text-3xl leading-[1.02] tracking-[var(--track-tight)]">
                Sociology-first storytelling discipline.
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/82">
                A strong academic foundation in people, communication, and social
                understanding now powers her editorial and promotional work.
              </p>
            </div>
          </Reveal>

          <div className="relative lg:col-span-8">
            <div className="absolute left-2 top-3 bottom-3 w-px bg-stroke/60" />
            <div className="space-y-7 pl-8">
              {education.map((e, i) => (
                <Reveal key={e.id} delayMs={i * 90}>
                  <article className="relative border-b border-stroke/40 pb-6 last:border-b-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-8 top-2 h-3.5 w-3.5 rounded-full bg-gold shadow-[0_0_20px_rgba(201,165,106,0.32)]"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-2xl leading-[1.06] tracking-[var(--track-tight)]">
                        {e.school}
                      </h3>
                      <span className="text-xs tracking-[0.18em] text-muted">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/84">{e.degree}</p>
                    <p className="mt-3 text-sm text-foreground/80">
                      Result: <span className="text-foreground/92">{e.result}</span>
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}

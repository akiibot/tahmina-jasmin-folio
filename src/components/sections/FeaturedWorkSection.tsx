"use client";

import { Suspense } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { workItems } from "@/content/projects";
import ExpandableWorkGrid from "@/components/work/ExpandableWorkGrid";

function FeaturedWorkContent() {
  return (
    <section id="work" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="FEATURED WORK"
            title="Cinematic edits and voice-led storytelling."
            subtitle="Videos play directly below. Hover for details."
          />
        </Reveal>

        <div className="mt-12">
          <ExpandableWorkGrid items={workItems} />
        </div>
      </Section>
    </section>
  );
}

export default function FeaturedWorkSection() {
  return (
    <Suspense fallback={<FeaturedWorkSectionSkeleton />}>
      <FeaturedWorkContent />
    </Suspense>
  );
}

function FeaturedWorkSectionSkeleton() {
  return (
    <section id="work" className="py-24 sm:py-28">
      <Section>
        <div className="animate-pulse">
          <div className="h-4 w-32 rounded bg-surface/40" />
          <div className="mt-4 h-8 w-64 rounded bg-surface/40" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 rounded-3xl bg-surface/30" />
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}

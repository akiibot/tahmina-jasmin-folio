"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/content/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="CERTIFICATIONS"
            title="Credibility through focused training."
            subtitle="Digital marketing and spoken English certifications that support her voice, strategy, and audience-ready communication."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delayMs={i * 90}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-stroke/60 bg-surface/25 p-6"
              >
                <div className="text-xs tracking-[0.18em] text-muted">
                  {c.period}
                </div>
                <div className="mt-3 font-display text-2xl leading-[1.12] tracking-[var(--track-tight)]">
                  {c.title}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {c.issuer}
                </div>

                <div className="mt-6 h-[1px] w-full bg-stroke/50" />

                <div className="mt-5 text-sm text-foreground/78">
                  Used in practice: content planning, narration tone, and digital
                  reach.
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}


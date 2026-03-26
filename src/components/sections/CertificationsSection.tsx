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

        <div className="mt-12 space-y-3">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delayMs={i * 90}>
              <motion.article
                whileHover={{ y: -2 }}
                className="grid gap-4 border border-stroke/55 bg-surface/20 px-5 py-5 sm:px-6 md:grid-cols-[120px_1fr_auto] md:items-start"
              >
                <div className="text-xs tracking-[0.18em] text-muted">
                  {c.period}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.45rem,2.7vw,2rem)] leading-[1.1] tracking-[var(--track-tight)]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/84">
                    {c.issuer}
                  </p>
                </div>
                <div className="self-start justify-self-start rounded-full border border-gold/35 bg-gold/8 px-3 py-1 text-xs text-foreground/88 md:justify-self-end">
                  In active use
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
  const [featured, ...others] = testimonials;

  if (!featured) return null;

  return (
    <section id="testimonials" className="py-24 sm:py-28">
      <Section>
        <Reveal>
          <SectionHeading
            kicker="TRUST"
            title="Professional, creative, and consistent delivery."
            subtitle="A few words that reflect Tahmina’s storytelling craft and digital fluency."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <motion.blockquote
              whileHover={{ y: -3 }}
              className="border-l-2 border-gold/60 bg-surface/20 px-6 py-7 sm:px-8 sm:py-9"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-stroke/60 bg-background/15 p-3">
                  <Quote className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.18em] text-muted">
                    FEATURED TESTIMONIAL
                  </div>
                  <p className="mt-4 font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.15] tracking-[var(--track-tight)]">
                    “{featured.quote}”
                  </p>
                  <footer className="mt-6 border-t border-stroke/50 pt-4">
                    <div className="font-medium text-foreground/92">
                      {featured.name}
                    </div>
                    <div className="mt-1 text-xs text-muted">{featured.title}</div>
                  </footer>
                </div>
              </div>
            </motion.blockquote>
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            {others.map((t, i) => (
              <Reveal key={t.id} delayMs={i * 90}>
                <motion.article
                  whileHover={{ y: -2 }}
                  className="border border-stroke/55 bg-surface/20 px-5 py-4"
                >
                  <div className="text-xs tracking-[0.18em] text-muted">
                    TESTIMONIAL
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/84">
                    “{t.quote}”
                  </p>
                  <div className="mt-4 border-t border-stroke/45 pt-3">
                    <div className="font-medium text-foreground/92">{t.name}</div>
                    <div className="mt-1 text-xs text-muted">{t.title}</div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}

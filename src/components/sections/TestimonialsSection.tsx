"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsSection() {
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

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delayMs={i * 90}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-stroke/60 bg-surface/25 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-stroke/60 bg-background/15 p-3">
                    <Quote className="h-5 w-5 text-gold" />
                  </div>
                  <div className="text-xs tracking-[0.18em] text-muted">
                    TESTIMONIAL
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  “{t.quote}”
                </p>
                <div className="mt-5 border-t border-stroke/50 pt-4">
                  <div className="font-medium text-foreground/90">
                    {t.name}
                  </div>
                  <div className="mt-1 text-xs text-muted">{t.title}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}


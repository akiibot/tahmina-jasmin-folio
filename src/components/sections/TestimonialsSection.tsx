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
            title="Consistent, creative delivery."
            subtitle="Words from collaborators and clients."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <motion.blockquote
              whileHover={{ y: -3 }}
              className="relative overflow-hidden rounded-3xl border border-stroke/60 bg-surface/25 p-6 sm:p-8"
            >
              <div className="absolute top-6 right-6">
                <div className="rounded-2xl border border-stroke/50 bg-background/15 p-2.5">
                  <Quote className="h-5 w-5 text-gold" />
                </div>
              </div>

              <div className="text-xs tracking-[0.18em] text-muted">FEATURED</div>

              <p className="mt-4 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2]">
                &ldquo;{featured.quote}&rdquo;
              </p>

              <footer className="mt-6 border-t border-stroke/50 pt-4">
                <div className="font-medium text-foreground/90">{featured.name}</div>
                <div className="mt-1 text-xs text-muted">{featured.title}</div>
              </footer>
            </motion.blockquote>
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            {others.map((t, i) => (
              <Reveal key={t.id} delayMs={i * 80}>
                <motion.article
                  whileHover={{ y: -2 }}
                  className="rounded-3xl border border-stroke/55 bg-surface/20 p-5"
                >
                  <p className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-stroke/45 pt-3">
                    <div className="font-medium text-foreground/90">{t.name}</div>
                    <div className="mt-0.5 text-xs text-muted">{t.title}</div>
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

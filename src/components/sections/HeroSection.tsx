"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SplitText from "@/components/typography/SplitText";
import { profile } from "@/content/profile";
import { ArrowDownRight, Video, Mic, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const taglines = [
  "Voice-led narration, cinematic edits, bold brand stories.",
  "Warm tone, premium pacing, digital storytelling.",
  "Story-first visuals, audience-aware promotion.",
] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 0.6], [0, -70]);
  const bgScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.03]);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setTaglineIndex((v) => (v + 1) % taglines.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section aria-label="Hero" className="relative">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(980px_620px_at_28%_8%,rgba(201,165,106,0.18),transparent_56%),radial-gradient(760px_460px_at_80%_60%,rgba(185,130,134,0.14),transparent_60%)]"
          style={{
            y: reduce ? undefined : bgY,
            scale: reduce ? undefined : bgScale,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />
      </div>

      <Section className="min-h-[calc(100svh-4rem)] flex flex-col justify-center py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Text Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs tracking-[0.18em] text-muted">
                CREATIVE MULTIMEDIA STORYTELLER
              </div>

              <h1 className="mt-5 font-display text-[clamp(2.35rem,8vw,5rem)] leading-[0.98] tracking-[var(--track-tight)]">
                <SplitText text={profile.name} className="block" stagger={0.045} />
              </h1>

              <p className="mt-4 text-[clamp(1rem,2.2vw,1.3rem)] leading-relaxed text-foreground/85">
                <span className="font-medium text-gold">{profile.headline}</span>
              </p>

              {/* Rotating tagline */}
              <div className="mt-5">
                <div className="relative overflow-hidden rounded-2xl border border-stroke/50 bg-surface/30">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={taglineIndex}
                      className="px-5 py-3 max-w-xl text-sm leading-relaxed text-foreground/78"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {taglines[taglineIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#work">View Work</Button>
                <Button href="#contact" variant="outline" className="border-gold/50">
                  Let&apos;s Connect
                </Button>
              </div>

              {/* Quick chips */}
              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Video className="h-3.5 w-3.5 text-gold" />
                  Video Editor
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mic className="h-3.5 w-3.5 text-rose" />
                  Narrator
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  Brand Promoter
                </span>
              </div>
            </motion.div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-[320px] lg:max-w-none"
            >
              {/* Aurora glow behind portrait */}
              <div
                className="absolute -inset-6 rounded-[2.5rem] blur-[40px] opacity-60"
                style={{ background: "linear-gradient(135deg, var(--aurora-gold), var(--aurora-rose))" }}
                aria-hidden="true"
              />

              {/* Portrait frame */}
              <motion.div
                className="relative overflow-hidden rounded-[2rem] border border-gold/30 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/tahmina-portrait.jpg"
                  alt="Tahmina Jasmin — Creative Multimedia Storyteller"
                  width={400}
                  height={500}
                  priority
                  className="aspect-[4/5] w-full object-cover"
                />

                {/* Subtle gradient overlay at bottom */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-4 -right-2 rounded-2xl border border-stroke/70 bg-surface/80 px-4 py-2 backdrop-blur-sm shadow-lg"
              >
                <div className="text-xs text-muted">Based in</div>
                <div className="font-medium text-foreground">{profile.location}</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full border border-stroke/60 bg-surface/25 px-4 py-2 text-xs tracking-[0.18em] text-muted hover:text-foreground transition-colors"
          >
            <span>SCROLL</span>
            <motion.span
              className="inline-flex items-center justify-center"
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDownRight className="h-4 w-4 text-gold group-hover:text-rose transition-colors" />
            </motion.span>
          </a>
        </motion.div>
      </Section>
    </section>
  );
}

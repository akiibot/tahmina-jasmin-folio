"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SplitText from "@/components/typography/SplitText";
import { profile } from "@/content/profile";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

const subPhrases = [
  "Crafting cinematic visuals, compelling voice, and digital brand presence.",
  "Story-first edits, voice-led narration, and audience-aware promotion.",
  "Warm tone, premium pacing, and confident digital storytelling.",
] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 0.6], [0, -70]);
  const bgScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.03]);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setPhraseIndex((v) => (v + 1) % subPhrases.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section aria-label="Hero" className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(980px_620px_at_28%_8%,rgba(201,165,106,0.18),transparent_56%),radial-gradient(760px_460px_at_80%_60%,rgba(185,130,134,0.14),transparent_60%)]"
          style={{
            y: reduce ? undefined : bgY,
            scale: reduce ? undefined : bgScale,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />

        <div className="heroLight absolute left-[10%] top-[18%] hidden h-[200px] w-[420px] rounded-[999px] bg-gold/14 blur-[30px] sm:block" />
        <div className="heroLight absolute right-[6%] top-[38%] hidden h-[220px] w-[420px] rounded-[999px] bg-rose/10 blur-[32px] sm:block" />
      </div>

      <Section className="min-h-[calc(100svh-4rem)] flex flex-col justify-center py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs tracking-[0.18em] text-muted">
                CREATIVE MULTIMEDIA
              </div>

              <h1 className="mt-6 font-display text-[clamp(3.1rem,5.5vw,5.2rem)] leading-[0.98] tracking-[var(--track-tight)]">
                <SplitText
                  text={profile.name}
                  className="block"
                  stagger={0.045}
                />
              </h1>

              <p className="mt-5 text-[clamp(1.02rem,2.2vw,1.4rem)] leading-relaxed text-foreground/85">
                <span className="font-medium text-gold">{profile.headline}</span>
              </p>

              <div className="mt-5">
                <div className="relative mt-3 overflow-hidden rounded-2xl border border-stroke/50 bg-surface/30">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={phraseIndex}
                      className="px-5 py-3 max-w-xl text-sm leading-relaxed text-foreground/78"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {subPhrases[phraseIndex]}
                    </motion.p>
                  </AnimatePresence>

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/0 via-background/35 to-background/0"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="#work">View Work</Button>
                <Button
                  href="#contact"
                  variant="outline"
                  className="border-gold/50"
                >
                  Let&apos;s Connect
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-muted">
                <span className="inline-flex h-2 w-2 rounded-full bg-rose" />
                Dhaka-based creative professional • Sociology background •
                Storytelling-led creative digital work
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-b from-gold/14 to-rose/8 blur-[14px]" />

              <div className="relative overflow-hidden rounded-[28px] border border-stroke/70 bg-surface/30 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_30%_20%,rgba(201,165,106,0.18),transparent_60%),radial-gradient(600px_380px_at_70%_60%,rgba(185,130,134,0.12),transparent_60%)]" />
                <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_6px)] [mix-blend-mode:overlay]" />

                <motion.div
                  className="relative p-6"
                  style={{ y: reduce ? 0 : undefined }}
                >
                  <div className="text-xs tracking-[0.18em] text-muted">
                    CINEMATIC PROFILE FRAME
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {[
                      { label: "Editing", value: "Video + Audio" },
                      { label: "Narration", value: "Voice-led Story" },
                      { label: "Promotion", value: "Brand-forward" },
                      { label: "Marketing", value: "Digital Presence" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-stroke/60 bg-background/20 p-4"
                      >
                        <div className="text-xs text-muted">{item.label}</div>
                        <div className="mt-1 font-medium text-foreground/90">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-6 rounded-2xl border border-stroke/50 bg-surface/40 p-4"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.7 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs tracking-[0.18em] text-muted">
                          FEATURED MOOD
                        </div>
                        <div className="mt-2 font-display text-2xl leading-[1.05]">
                          Editorial • Cinematic • Warm
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <div className="h-12 w-12 rounded-2xl border border-stroke/60 bg-gradient-to-b from-gold/20 to-rose/10" />
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-foreground/78 leading-relaxed">
                      Motion that supports story—never noise.
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
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
              <ArrowDownRight className="h-4 w-4 text-gold group-hover:text-rose" />
            </motion.span>
          </a>
        </motion.div>
      </Section>
    </section>
  );
}

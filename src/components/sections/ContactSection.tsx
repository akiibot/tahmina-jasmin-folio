"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/typography/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

function buildMailto({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const subject = `Portfolio inquiry — ${name}`;
  const body = `Hi Tahmina,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}\nLocation: Dhaka\n`;
  return `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const canSend = useMemo(() => {
    const hasName = name.trim().length >= 2;
    const hasEmail = email.includes("@") && email.includes(".");
    const hasMsg = message.trim().length >= 10;
    return hasName && hasEmail && hasMsg;
  }, [name, email, message]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) {
      setStatus("idle");
      return;
    }
    const href = buildMailto({ name: name.trim(), email: email.trim(), message: message.trim() });
    setStatus("ready");
    window.location.href = href;
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                kicker="CONTACT"
                title="Let’s create meaningful digital stories together."
                subtitle="Available for brand promotion, narration, multimedia editing, and creative collaborations."
              />

              <div className="mt-8 space-y-4 rounded-3xl border border-stroke/60 bg-surface/25 p-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs tracking-[0.18em] text-muted">EMAIL</div>
                    <a
                      className="mt-1 block break-all text-sm text-foreground/90 transition-colors hover:text-foreground"
                      href={`mailto:${profile.email}`}
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs tracking-[0.18em] text-muted">CONTACT</div>
                    <a
                      className="mt-1 block text-sm text-foreground/90 hover:text-foreground transition-colors"
                      href={`tel:${profile.phone}`}
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs tracking-[0.18em] text-muted">LOCATION</div>
                    <div className="mt-1 text-sm text-foreground/90">{profile.location}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stroke/50">
                  <div className="text-xs tracking-[0.18em] text-muted">LINKEDIN</div>
                  <div className="mt-2 text-sm text-foreground/78">
                    LinkedIn not provided yet.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delayMs={120}>
              <motion.div
                className="rounded-3xl border border-stroke/60 bg-surface/25 p-6 sm:p-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-xs tracking-[0.18em] text-muted">
                  SEND A MESSAGE
                </div>
                <div className="mt-4 font-display text-2xl leading-[1.12] tracking-[var(--track-tight)]">
                  Tell me what you’re building.
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/78">
                  This form opens your email client with a polished message—so we
                  can move fast without losing warmth and clarity.
                </p>

                <form onSubmit={onSubmit} className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-xs tracking-[0.18em] text-muted">
                        YOUR NAME
                      </span>
                      <input
                        className="w-full rounded-2xl border border-stroke/60 bg-background/15 px-4 py-3 text-sm text-foreground/90 outline-none focus:border-gold/60"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        name="name"
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-xs tracking-[0.18em] text-muted">
                        EMAIL
                      </span>
                      <input
                        type="email"
                        className="w-full rounded-2xl border border-stroke/60 bg-background/15 px-4 py-3 text-sm text-foreground/90 outline-none focus:border-gold/60"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                      />
                    </label>
                  </div>

                  <label className="space-y-2">
                    <span className="text-xs tracking-[0.18em] text-muted">
                      MESSAGE
                    </span>
                    <textarea
                      className="min-h-[130px] w-full resize-none rounded-2xl border border-stroke/60 bg-background/15 px-4 py-3 text-sm text-foreground/90 outline-none focus:border-gold/60"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What kind of video/reel/narration do you need? Timeline, brand goals, and any references are welcome."
                      name="message"
                      autoComplete="off"
                      required
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-muted">
                      {status === "ready"
                        ? "Opening email…"
                        : "We’ll keep it simple and professional."}
                    </div>
                    <motion.button
                      type="submit"
                      disabled={!canSend}
                      whileHover={canSend ? { y: -1 } : undefined}
                      whileTap={canSend ? { scale: 0.99 } : undefined}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition",
                        "bg-gradient-to-b from-gold/85 to-gold/55 text-background shadow-[0_0_45px_rgba(201,165,106,0.20)]",
                        "hover:from-gold/95 hover:to-gold/65",
                        !canSend
                          ? "cursor-not-allowed opacity-60"
                          : "focus:outline-none"
                      )}
                    >
                      Send via Email
                    </motion.button>
                  </div>

                  <div className="pt-2 text-xs text-muted">
                    By sending, you agree to be contacted by email regarding your inquiry.
                  </div>
                </form>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </Section>
    </section>
  );
}

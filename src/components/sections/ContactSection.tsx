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
  const body = `Hi Tahmina,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
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
                title="Let&apos;s create together."
                subtitle="Available for brand promotion, narration, and multimedia collaborations."
              />

              <div className="mt-6 space-y-3 rounded-3xl border border-stroke/60 bg-surface/25 p-5">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <a
                    className="text-sm text-foreground/90 hover:text-foreground transition-colors"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <a
                    className="text-sm text-foreground/90 hover:text-foreground transition-colors"
                    href={`tel:${profile.phone}`}
                  >
                    {profile.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-sm text-foreground/90">{profile.location}</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delayMs={100}>
              <motion.div
                className="rounded-3xl border border-stroke/60 bg-surface/25 p-6"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.18em] text-muted">SEND A MESSAGE</div>
                <h3 className="mt-2 font-display text-xl leading-[1.15]">
                  Tell me about your project.
                </h3>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-1.5">
                      <span className="text-xs tracking-[0.12em] text-muted">NAME</span>
                      <input
                        className="w-full rounded-2xl border border-stroke/60 bg-background/15 px-4 py-2.5 text-sm text-foreground/90 outline-none focus:border-gold/60"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        name="name"
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="space-y-1.5">
                      <span className="text-xs tracking-[0.12em] text-muted">EMAIL</span>
                      <input
                        type="email"
                        className="w-full rounded-2xl border border-stroke/60 bg-background/15 px-4 py-2.5 text-sm text-foreground/90 outline-none focus:border-gold/60"
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

                  <label className="space-y-1.5">
                    <span className="text-xs tracking-[0.12em] text-muted">MESSAGE</span>
                    <textarea
                      className="min-h-[100px] w-full resize-none rounded-2xl border border-stroke/60 bg-background/15 px-4 py-2.5 text-sm text-foreground/90 outline-none focus:border-gold/60"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Project type, timeline, and any references..."
                      name="message"
                      autoComplete="off"
                      required
                    />
                  </label>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-muted">
                      {status === "ready" ? "Opening email..." : "Opens your email client."}
                    </span>
                    <motion.button
                      type="submit"
                      disabled={!canSend}
                      whileHover={canSend ? { y: -1 } : undefined}
                      whileTap={canSend ? { scale: 0.99 } : undefined}
                      className={cn(
                        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition",
                        "bg-gradient-to-b from-gold/85 to-gold/55 text-background shadow-[0_0_40px_rgba(201,165,106,0.18)]",
                        "hover:from-gold/95 hover:to-gold/65",
                        !canSend && "cursor-not-allowed opacity-60"
                      )}
                    >
                      Send via Email
                    </motion.button>
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

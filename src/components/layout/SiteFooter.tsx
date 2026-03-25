import { Mail, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-stroke/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-xs tracking-[0.18em] text-muted">
              TAHMINA JASMIN
            </div>
            <div className="text-base text-foreground/85 leading-relaxed">
              Premium multimedia storytelling with cinematic visuals, voice-led
              narration, and brand-forward promotion.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs tracking-[0.18em] text-muted">CONTACT</div>
            <div className="flex items-start gap-3 text-sm text-foreground/85">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <a
                href="mailto:tahminajasmin1985@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                tahminajasmin1985@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm text-foreground/85">
              <div className="mt-0.5">
                <span className="inline-flex h-2 w-2 rounded-full bg-gold" />
              </div>
              <div>
                <a href="tel:01876230172" className="hover:text-foreground">
                  01876230172
                </a>
                <div className="mt-1 flex items-center gap-2 text-muted">
                  <MapPin className="h-4 w-4" />
                  Dhaka
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:text-right">
            <div className="text-xs tracking-[0.18em] text-muted">SOCIAL</div>
            <div className="text-sm text-muted leading-relaxed">
              LinkedIn not provided yet.
            </div>
            <div className="text-xs text-muted">
              Built for clarity, warmth, and digital fluency.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stroke/50 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-muted">
            © {new Date().getFullYear()} Tahmina Jasmin. All rights reserved.
          </div>
          <div className="text-xs text-muted">
            Crafted with restraint and editorial motion.
          </div>
        </div>
      </div>
    </footer>
  );
}


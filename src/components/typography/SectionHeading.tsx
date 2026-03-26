import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {kicker ? (
        <div className="text-xs tracking-[0.18em] text-muted">{kicker}</div>
      ) : null}
      <h2
        className={cn(
          "font-display font-semibold leading-[0.98]",
          "text-[clamp(2rem,4vw,3.1rem)] tracking-[var(--track-tight)]"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-foreground/84">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

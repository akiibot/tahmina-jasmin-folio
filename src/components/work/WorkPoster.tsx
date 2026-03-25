import type { WorkItem } from "@/types/portfolio";
import { cn } from "@/lib/cn";

export default function WorkPoster({
  item,
  className,
}: {
  item: WorkItem;
  className?: string;
}) {
  const variant = item.poster.variant;
  const label = item.poster.label;

  const gradients: Record<number, string> = {
    1: "from-gold/22 via-surface/10 to-rose/14",
    2: "from-rose/18 via-surface/10 to-gold/16",
    3: "from-gold/18 via-surface/10 to-foreground/10",
    4: "from-rose/16 via-surface/10 to-gold/14",
    5: "from-gold/20 via-surface/10 to-rose/12",
    6: "from-foreground/10 via-surface/10 to-gold/18",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-stroke/60 bg-surface/25",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          gradients[variant]
        )}
      />
      <div className="absolute inset-0 opacity-60 [background:repeating-linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06)_1px,transparent_1px,transparent_8px)] [mix-blend-mode:overlay]" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-[20px]" />
      <div className="absolute -left-12 -bottom-16 h-48 w-48 rounded-full bg-rose/10 blur-[22px]" />

      <div className="relative p-5">
        <div className="text-xs tracking-[0.18em] text-muted">FEATURED</div>
        <div className="mt-2 font-display text-xl leading-[1.1]">
          {label}
        </div>
        <div className="mt-2 text-xs text-foreground/75">
          {item.year} • {item.category}
        </div>

        <div className="mt-6 h-[10px] w-full rounded-full bg-foreground/10">
          <div className="h-full w-[68%] rounded-full bg-gold/60" />
        </div>
      </div>
    </div>
  );
}


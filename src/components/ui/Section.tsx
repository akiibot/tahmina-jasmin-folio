import type { ReactNode } from "react";

export default function Section({
  id,
  children,
  className,
  ariaLabel,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={[
        "relative scroll-mt-24",
        "mx-auto w-full max-w-6xl px-4 sm:px-6",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </section>
  );
}


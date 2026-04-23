"use client";

export default function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Gold blob - top left area */}
      <div
        className="aurora-blob-1 absolute -left-[20%] -top-[10%] h-[60vh] w-[50vw] rounded-full blur-[120px]"
        style={{ background: "var(--aurora-gold)" }}
      />

      {/* Rose blob - center right area */}
      <div
        className="aurora-blob-2 absolute -right-[15%] top-[20%] h-[50vh] w-[45vw] rounded-full blur-[100px]"
        style={{ background: "var(--aurora-rose)" }}
      />

      {/* Plum blob - bottom area */}
      <div
        className="aurora-blob-3 absolute -bottom-[20%] left-[10%] h-[55vh] w-[55vw] rounded-full blur-[140px]"
        style={{ background: "var(--aurora-plum)" }}
      />

      {/* Subtle conic gradient halo behind hero area */}
      <div
        className="absolute left-1/2 top-0 h-[80vh] w-[120vw] -translate-x-1/2 opacity-20"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent, var(--aurora-gold), transparent, var(--aurora-rose), transparent)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

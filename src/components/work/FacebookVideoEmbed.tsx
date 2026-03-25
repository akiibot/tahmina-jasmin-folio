"use client";

import type { WorkItem } from "@/types/portfolio";

function facebookPluginSrc(facebookUrl: string) {
  // Facebook's plugin expects the original reel/video URL.
  // Some inputs come as /share/v/... or /share/r/... URLs; we normalize them to /reel/<id>.
  const normalizedHref = normalizeToReelUrl(facebookUrl);
  const href = encodeURIComponent(normalizedHref);
  return `https://www.facebook.com/plugins/video.php?href=${href}&show_text=false&width=560`;
}

function normalizeToReelUrl(facebookUrl: string) {
  try {
    const u = new URL(facebookUrl);
    const parts = u.pathname.split("/").filter(Boolean);
    // Typical formats we might get:
    // - /share/v/<id>
    // - /share/r/<id>
    // - /reel/<id>
    if (parts.length >= 3 && parts[0] === "share" && (parts[1] === "v" || parts[1] === "r")) {
      const id = parts[2];
      if (id) return `${u.origin}/reel/${id}`;
    }
    return facebookUrl;
  } catch {
    return facebookUrl;
  }
}

export default function FacebookVideoEmbed({
  item,
}: {
  item: WorkItem;
}) {
  const src = facebookPluginSrc(item.facebookUrl);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-stroke/60 bg-background/15">
      <div className="relative aspect-[9/16] w-full">
        <iframe
          title={`Facebook reel: ${item.title}`}
          className="absolute inset-0 h-full w-full"
          src={src}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}


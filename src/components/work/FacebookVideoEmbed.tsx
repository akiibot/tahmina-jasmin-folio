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
    const cleaned = ensureHttps(stripHash(facebookUrl));
    const u = new URL(cleaned);
    const parts = u.pathname.split("/").filter(Boolean);
    // Typical formats we might get:
    // - /share/v/<id>
    // - /share/r/<id>
    // - /reel/<id>
    if (parts.length >= 3 && parts[0] === "share" && (parts[1] === "v" || parts[1] === "r")) {
      const id = parts[2];
      if (id) return `${u.origin}/reel/${id}`;
    }
    return cleaned;
  } catch {
    return ensureHttps(stripHash(facebookUrl));
  }
}

function stripHash(url: string) {
  const i = url.indexOf("#");
  return i >= 0 ? url.slice(0, i) : url;
}

function ensureHttps(url: string) {
  const trimmed = url.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return `https://${trimmed.replace(/^\/+/, "")}`;
}

export default function FacebookVideoEmbed({
  item,
  aspectClassName = "aspect-[9/16] lg:aspect-[16/9]",
}: {
  item: WorkItem;
  aspectClassName?: string;
}) {
  const src = facebookPluginSrc(item.facebookUrl);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-stroke/60 bg-background/15">
      <div className={`relative w-full ${aspectClassName}`}>
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


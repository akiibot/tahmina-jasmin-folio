import type { ToolName, WorkItem } from "@/types/portfolio";

const poster = (label: string, variant: 1 | 2 | 3 | 4 | 5 | 6) => ({
  label,
  variant,
});

const t = (v: ToolName[]) => v;

export const workItems: WorkItem[] = [
  {
    id: "work-1",
    title: "Voice-led Brand Promotion Reel",
    category: "Brand Promotion",
    facebookUrl: "https://www.facebook.com/reel/1239931281688808",
    year: "2025",
    role: "Narration • Editing • Caption Direction",
    description:
      "A warm, confident promo reel designed to feel like an invitation—clean pacing, editorial captions, and voice narration that turns features into emotion.",
    highlights: [
      "Hook-first opening designed for mobile retention",
      "Cinematic pacing with editorial caption rhythm",
      "Brand-safe tone with audience-focused CTA placement",
    ],
    deliverables: [
      "1 vertical promo reel (caption-ready)",
      "Narration script refinement + voice direction",
      "Thumbnail/promo poster frame",
      "Caption styling for clarity and trust",
    ],
    tools: t(["CapCut", "Canva", "Audacity", "Veed Captions", "ChatGPT"]),
    poster: poster("Brand Promotion", 1),
  },
  {
    id: "work-2",
    title: "Cinematic Visual Teaser Edit",
    category: "Cinematic Video",
    facebookUrl: "https://www.facebook.com/reel/843296321832183",
    year: "2025",
    role: "Cinematic Editing • Visual Storyboarding",
    description:
      "A cinematic teaser built with layered transitions, thoughtful color mood, and a narrative arc that feels premium from the first frame to the final call.",
    highlights: [
      "Cinematic continuity across scenes and cuts",
      "Muted, elegant color treatment for a premium feel",
      "Text overlays balanced for readability",
    ],
    deliverables: [
      "1 cinematic teaser reel",
      "Caption + lower-third style pack",
      "Export variants for feed + reels",
    ],
    tools: t(["VN", "CapCut", "Canva", "Google AI Studio"]),
    poster: poster("Cinematic Teaser", 2),
  },
  {
    id: "work-3",
    title: "Social Reel — Community Spotlight",
    category: "Social Media Reel",
    facebookUrl: "https://www.facebook.com/reel/889900937026896",
    year: "2024",
    role: "Editing • Caption Strategy • Promotion",
    description:
      "A community-centered reel that highlights real moments with editorial typography and caption structure—built for shareability and trust.",
    highlights: [
      "Caption-first storytelling for fast comprehension",
      "Audience-friendly pacing and clean sound levels",
      "Share-ready ending frame with CTA",
    ],
    deliverables: [
      "1 social media reel",
      "Caption set + title card",
      "Promotion angle notes for posting",
    ],
    tools: t(["CapCut", "Veed Captions", "Canva", "ChatGPT"]),
    poster: poster("Community Spotlight", 3),
  },
  {
    id: "work-4",
    title: "Narration / Promotional Content Package",
    category: "Narration / Promotional Content",
    facebookUrl: "https://www.facebook.com/reel/2381394252294480",
    year: "2024",
    role: "Narration • Script Support • Post Edit",
    description:
      "A voice-led promotional package focused on clarity, emotional tone, and brand confidence—scripting, narration direction, and polished post-edit output.",
    highlights: [
      "Voice clarity improved through audio editing",
      "Scripting that keeps messages short and persuasive",
      "Premium typography overlays for credibility",
    ],
    deliverables: [
      "Narration script refinement",
      "Voice polishing + final mixdown",
      "Promo reel edit with caption overlays",
    ],
    tools: t(["Audacity", "ChatGPT", "CapCut", "Canva", "Grok"]),
    poster: poster("Narration Package", 4),
  },
  {
    id: "reel-1",
    title: "B2B2C Brand Reach — Quick Reel",
    category: "Brand Promotion",
    facebookUrl: "https://www.facebook.com/reel/2381394252294480",
    year: "2025",
    role: "Brand Promotion • Reel Edit",
    description:
      "A concise brand reach reel built for performance: editorial hook, clear value framing, and a confident ending designed to prompt action.",
    highlights: [
      "Value communicated within the first seconds",
      "Consistent brand tone across overlays",
      "Caption timing tuned for readability",
    ],
    deliverables: ["1 fast reel", "Caption + CTA overlay kit"],
    tools: t(["Gemini Business V.3", "CapCut", "Veed Captions", "Canva"]),
    poster: poster("Quick Brand Reach", 5),
  },
  {
    id: "reel-2",
    title: "Product Benefit Reel — Cinematic Edit",
    category: "Cinematic Video",
    facebookUrl: "https://www.facebook.com/reel/1990212875063266",
    year: "2024",
    role: "Cinematic Editing • Audio & Caption Polish",
    description:
      "A cinematic benefit reel with refined audio clarity, premium pacing, and elegant captions to keep the message trustworthy and easy to follow.",
    highlights: [
      "Audio leveled for voice-first clarity",
      "Cinematic pacing with tasteful overlays",
      "Caption polish for multilingual-friendly clarity",
    ],
    deliverables: ["1 benefit reel", "Caption overlays + poster frame"],
    tools: t(["VN", "Audacity", "Veed Captions", "Canva", "Grok"]),
    poster: poster("Cinematic Benefit", 6),
  },
] as WorkItem[];


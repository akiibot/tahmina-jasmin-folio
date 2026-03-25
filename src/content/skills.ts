import type { SkillItem, ToolName } from "@/types/portfolio";

const t = (v: ToolName[]) => v;

export const skills = [
  {
    id: "video-editing",
    title: "Video Editing",
    summary:
      "Cinematic pacing, clean transitions, caption-ready framing, and platform-optimized cuts for reels and brand films.",
    tools: t(["CapCut", "VN", "Canva"]),
  },
  {
    id: "audio-editing",
    title: "Audio Editing",
    summary:
      "Dialogue cleanup, leveling, subtle sound design, and voice-first clarity that keeps narration warm and intelligible.",
    tools: t(["Audacity", "Veed Captions", "Canva"]),
  },
  {
    id: "commercial-narration",
    title: "Commercial Narration",
    summary:
      "Voice-led promotional storytelling with emotional tone, rhythm, and audience-centered messaging.",
    tools: t(["Audacity", "ChatGPT", "Gemini Business V.3"]),
  },
  {
    id: "cinematic-video",
    title: "Cinematic Video Making",
    summary:
      "Editorial composition, cinematic color mood, and narrative continuity designed for trust and conversions.",
    tools: t(["CapCut", "VN", "Google AI Studio"]),
  },
  {
    id: "brand-promotion",
    title: "Brand Promotion",
    summary:
      "Message-to-visual translation: campaign concepts, hooks, and branded storytelling that feels human.",
    tools: t(["Canva", "ChatGPT", "Grok"]),
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "Content strategy, posting direction, audience tone, and digital promotion workflows for sustained reach.",
    tools: t(["Gemini Business V.3", "ChatGPT", "Canva"]),
  },
  {
    id: "content-moderation",
    title: "Content Moderation",
    summary:
      "Community-safe review practices, tone consistency, and moderation that protects trust while supporting growth.",
    tools: t(["Google AI Studio", "ChatGPT", "Grok"]),
  },
  {
    id: "ai-assisted",
    title: "AI-assisted Content Production",
    summary:
      "AI support for scripting, captions, structure, and ideation—always refined with human storytelling judgment.",
    tools: t([
      "Google AI Studio",
      "Grok",
      "Gemini Business V.3",
      "ChatGPT",
      "Veed Captions",
    ]),
  },
] as SkillItem[];


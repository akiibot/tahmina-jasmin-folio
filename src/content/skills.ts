import type { SkillItem, ToolName } from "@/types/portfolio";

const t = (v: ToolName[]) => v;

export const skills = [
  {
    id: "video-editing",
    title: "Video Editing",
    summary: "Cinematic pacing, clean transitions, and platform-optimized cuts.",
    tools: t(["CapCut", "VN", "Canva"]),
  },
  {
    id: "audio-editing",
    title: "Audio Editing",
    summary: "Dialogue cleanup, leveling, and voice-first clarity.",
    tools: t(["Audacity", "Veed Captions", "Canva"]),
  },
  {
    id: "commercial-narration",
    title: "Narration",
    summary: "Voice-led storytelling with emotional tone and rhythm.",
    tools: t(["Audacity", "ChatGPT", "Gemini Business V.3"]),
  },
  {
    id: "cinematic-video",
    title: "Cinematic Video",
    summary: "Editorial composition and narrative continuity.",
    tools: t(["CapCut", "VN", "Google AI Studio"]),
  },
  {
    id: "brand-promotion",
    title: "Brand Promotion",
    summary: "Campaign concepts, hooks, and branded storytelling.",
    tools: t(["Canva", "ChatGPT", "Grok"]),
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    summary: "Content strategy, audience tone, and promotional workflows.",
    tools: t(["Gemini Business V.3", "ChatGPT", "Canva"]),
  },
  {
    id: "content-moderation",
    title: "Content Moderation",
    summary: "Community-safe review and tone consistency.",
    tools: t(["Google AI Studio", "ChatGPT", "Grok"]),
  },
  {
    id: "ai-assisted",
    title: "AI-Assisted Production",
    summary: "AI support for scripting, captions, and ideation.",
    tools: t(["Google AI Studio", "Grok", "Gemini Business V.3", "ChatGPT", "Veed Captions"]),
  },
] as SkillItem[];

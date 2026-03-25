import type { ToolName } from "@/types/portfolio";

export const profile = {
  name: "Tahmina Jasmin",
  location: "Dhaka",
  email: "tahminajasmin1985@gmail.com",
  phone: "01876230172",
  headline: "Creative Multimedia Storyteller, Narrator & Brand Promoter",
  closing: "Let’s create meaningful digital stories together.",
  availableFor:
    "Available for brand promotion, narration, multimedia editing, and creative collaborations.",
  educationNote:
    "Sociology background from the University of Chittagong — storytelling as a craft, and communication as a responsibility.",
  tools: [
    "Google AI Studio",
    "CapCut",
    "Canva",
    "Grok",
    "Gemini Business V.3",
    "ChatGPT",
    "Audacity",
    "Veed Captions",
    "VN",
  ] as ToolName[],
} as const;


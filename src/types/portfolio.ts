export type WorkCategory =
  | "Brand Promotion"
  | "Cinematic Video"
  | "Social Media Reel"
  | "Narration / Promotional Content";

export type ToolName =
  | "Google AI Studio"
  | "CapCut"
  | "Canva"
  | "Grok"
  | "Gemini Business V.3"
  | "ChatGPT"
  | "Audacity"
  | "Veed Captions"
  | "VN";

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  facebookUrl: string;
  year: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  tools: ToolName[];
  role: string;
  poster: {
    label: string;
    variant: 1 | 2 | 3 | 4 | 5 | 6;
  };
}

export interface SkillItem {
  id: string;
  title: string;
  summary: string;
  tools: ToolName[];
}

export interface TimelineRole {
  id: string;
  title: string;
  period: string;
  description: string;
  focus: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  result: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
}

export interface AffiliationItem {
  id: string;
  title: string;
  period?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}


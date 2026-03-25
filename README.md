# Tahmina Jasmin — Premium Cinematic Portfolio (Next.js 15+/App Router)

This is a premium, editorial portfolio site built with:
Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open:
`http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Customization Guide

### 1) Portfolio content (recommended)

Edit the data in:

- `src/content/profile.ts` (name, headline, location, contact copy)
- `src/content/projects.ts` (case studies + Facebook reel links)
- `src/content/skills.ts` (skills + tool pills)
- `src/content/experience.ts` (timeline roles)
- `src/content/education.ts`
- `src/content/certifications.ts`
- `src/content/affiliations.ts`
- `src/content/testimonials.ts`

UI components are built to be data-driven—so you can update copy, tools, categories,
and links without touching the UI structure.

### 2) Brand look & colors

Theme tokens live in:

- `src/app/globals.css`

Primary accents to adjust:

- `--gold`
- `--rose`
- `--bg` / `--fg`

### 3) Typography

Fonts are defined in:

- `src/app/layout.tsx`

If you want to swap the display font or body font, update the `next/font/google`
imports and keep the `variable` mapping.

### 4) Motion / smooth scrolling

- Smooth scrolling uses Lenis in `src/app/providers.tsx`
- Scroll reveals use `src/components/ui/Reveal.tsx`
- Cinematic motion elements use Framer Motion

Reduced-motion is respected via Framer Motion’s `useReducedMotion()`.

## Architecture Notes

Reusable UI:

- `src/components/ui/*` (Section, Button, Reveal, Modal)
- `src/components/typography/*` (SectionHeading, SplitText)

Section components:

- `src/components/sections/*` (Hero, About, Skills, Work, Experience, Education, Certifications, Affiliations, Testimonials, Contact)

## Social / Links

LinkedIn is currently shown as “not provided”. Add it by editing:

- `src/content/profile.ts`
- `src/components/sections/ContactSection.tsx`

# Serenova

Next.js 16 + Contentful CMS — marketing/resort website architecture.

---

## Tech Stack

- **Next.js 16** — App Router, TypeScript, server components
- **Contentful** — headless CMS, single source of truth for all content
- **Tailwind CSS v4** — utility-first styling via `@theme` tokens
- **TypeScript** — strict mode

---

## Project Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your Contentful credentials:

```bash
cp .env.local.example .env.local
```

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_api_token
CONTENTFUL_ENVIRONMENT=master

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Find these in **Contentful → Settings → API Keys**.

### 3. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Commands

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start development server      |
| `npm run build` | Production build + type check |
| `npm run start` | Start production server       |
| `npm run lint`  | Run ESLint                    |

---

## Folder Structure

```
src/
├── app/                   # Routes, layouts, metadata only
├── components/
│   ├── layout/            # Header, Footer, Navigation, MobileMenu
│   ├── sections/          # Page Builder section components
│   └── ui/                # Reusable UI primitives
├── contentful/            # All CMS communication (only folder that knows Contentful exists)
│   ├── client.ts          # Contentful SDK client
│   ├── queries.ts         # Content type ID constants
│   ├── mappers.ts         # Raw Contentful data → typed models
│   ├── page.service.ts    # Page fetching
│   └── section.service.ts # Section fetching
├── page-builder/
│   ├── PageRenderer.tsx   # Renders page sections list
│   ├── SectionRenderer.tsx# Resolves section type → component
│   └── sectionRegistry.ts # Maps content type ID → React component
├── types/                 # Shared TypeScript types
├── config/                # App, Contentful, navigation config
├── utils/                 # Pure utility functions
├── styles/                # Global CSS / Tailwind tokens
└── constants/             # App-wide constants
```

---

## Architecture Rules

### Data flow

```
Contentful → page.service → PageRenderer → SectionRenderer → Section Component
```

### Golden rules

1. **Pages are minimal** — call `getPageBySlug`, pass sections to `PageRenderer`. No logic in `app/`.
2. **No hardcoded content** — all copy lives in Contentful.
3. **Components receive data, never fetch it** — fetching happens in services only.
4. **Only `contentful/` knows Contentful exists** — no Contentful SDK imports in components.
5. **Reusable sections** — one `HeroSection` configured by content, not `HomeHero` + `AboutHero`.
6. **Contentful is replaceable** — swapping CMS only requires changes inside `contentful/`.

### Every new section requires

1. Create content type in Contentful
2. Add content type ID to `src/contentful/queries.ts`
3. Add TypeScript type to `src/types/section.ts`
4. Create React component in `src/components/sections/SectionName/`
5. Register in `src/page-builder/sectionRegistry.ts`

---

## Naming Conventions

| Thing                       | Convention | Example                           |
| --------------------------- | ---------- | --------------------------------- |
| Components                  | PascalCase | `HeroSection.tsx`                 |
| Component folders           | PascalCase | `HeroSection/`                    |
| Utilities                   | camelCase  | `formatDate.ts`                   |
| Services                    | camelCase  | `page.service.ts`                 |
| Types / Interfaces          | PascalCase | `PageSection`, `HeroSectionProps` |
| Contentful content type IDs | camelCase  | `heroSection`, `ctaBannerSection` |

---

## Adding a New Section

```tsx
// 1. src/contentful/queries.ts
export const CONTENT_TYPE =
  {
    // ...existing
    MY_NEW_SECTION: 'myNewSection',
  } |
  // 2. src/types/section.ts — add to SectionType union
  'myNewSection'

// 3. Create src/components/sections/MyNewSection/MyNewSection.tsx
// 4. src/page-builder/sectionRegistry.ts
import { MyNewSection } from '@/components/sections/MyNewSection/MyNewSection'

export const sectionRegistry = {
  // ...existing
  myNewSection: MyNewSection,
}
```

---

## Environment Variables Reference

| Variable                   | Required | Description                |
| -------------------------- | -------- | -------------------------- |
| `CONTENTFUL_SPACE_ID`      | Yes      | Contentful space ID        |
| `CONTENTFUL_ACCESS_TOKEN`  | Yes      | Content Delivery API token |
| `CONTENTFUL_PREVIEW_TOKEN` | No       | Content Preview API token  |
| `CONTENTFUL_ENVIRONMENT`   | No       | Defaults to `master`       |
| `NEXT_PUBLIC_SITE_URL`     | No       | Used for metadata/OG URLs  |

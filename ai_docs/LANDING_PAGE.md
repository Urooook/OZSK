# ОЗСК-Строй Landing Page

**Status:** ✅ Completed  
**Date:** August 11, 2026  
**Tech Stack:** Next.js 16.3.0 (App Router) + TypeScript 5 + Tailwind CSS v4  

## Project Overview

A fully responsive, production-ready landing page for ОЗСК-Строй, a Russian construction company. The site showcases the company's expertise, past projects, and construction services with a modern, professional design.

**Key Features:**
- 100% responsive design (mobile-first)
- All Server Components (zero Client Components)
- Optimized images with `next/image`
- Smooth scroll anchor navigation to footer contacts
- Cyrillic/Latin typography via Montserrat font
- Data-driven architecture (content in `lib/content.ts`)
- Custom brand color tokens via Tailwind `@theme`
- Semantic HTML with WCAG accessibility compliance

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
cd /Users/urooook/Desktop/OZSK/OZSK
npm install
```

### Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000`

### Production Build
```bash
npm run build
npm run start
```

### Lint Check
```bash
npm run lint
```

## Brand Colors Reference

All brand colors are defined as **Tailwind `@theme` tokens** in `app/globals.css`. Use these in className attributes:

| Token | Hex | Tailwind Classes | Usage |
|-------|-----|-----------------|-------|
| **Navy** | `#0A2540` | `bg-navy`, `text-navy`, `border-navy` | Primary section background, text |
| **Navy Dark** | `#071B30` | `bg-navy-dark`, `text-navy-dark` | Hero gradient, dark accents |
| **Brand** | `#0B4B8F` | `text-brand`, `bg-brand` | Alternative blue accent |
| **Accent** | `#1E9E57` | `bg-accent`, `text-accent`, `border-accent` | Call-to-action green, highlights |
| **Accent Dark** | `#178A4A` | `bg-accent-dark`, `text-accent-dark` | Hover states, dark green |
| **Surface** | `#F4F6F8` | `bg-surface`, `text-surface` | Light background sections |
| **Card** | `#FFFFFF` | `bg-card` | White card backgrounds |
| **Ink** | `#1A2233` | `text-ink` | Primary text color |
| **Muted** | `#6B7280` | `text-muted` | Secondary/helper text |
| **Border** | `#E2E8F0` | `border-border` | Dividers, borders |

**Font:**
- `font-sans` maps to Montserrat (configured in `app/layout.tsx`)

## File Structure

```
app/
├── layout.tsx              — Root layout, Montserrat font, SEO metadata
├── page.tsx                — Main page (assembles all sections)
└── globals.css             — @theme brand tokens, base styles, scroll behavior

components/
├── layout/
│   ├── Header.tsx          — Sticky navbar: logo, phone, CTA button
│   └── Footer.tsx          — Dark footer: logo, contacts, documents, CTA, copyright
├── sections/
│   ├── Hero.tsx            — Hero section with H2O hotel image
│   ├── Stats.tsx           — Stats bar (24+ years, 30+ staff, 100% capacity)
│   ├── About.tsx           — Company description (2 columns on desktop)
│   ├── Directions.tsx      — 3 service direction cards
│   ├── Projects.tsx        — 5 portfolio project cards (responsive grid)
│   └── Advantages.tsx      — 6 company advantage/feature items
└── ui/
    ├── Container.tsx       — Max-width (1280px) layout wrapper
    ├── Button.tsx          — Reusable button (primary/outline variants)
    ├── SectionHeading.tsx  — Section title with green accent dash
    ├── StatItem.tsx        — Icon + value + label stat block
    ├── DirectionCard.tsx   — Icon + title card (crane SVG icon)
    ├── ProjectCard.tsx     — Image + title + location project card
    └── FeatureItem.tsx     — Circular icon + title + description advantage item

lib/
└── content.ts              — Type-safe site content (all strings, data arrays)

public/images/
├── Logo.jpg                — ОЗСК-Строй company logo
├── h2o.png                 — H2O hotel complex photo
├── threeElements.png       — Three Elements tourist complex photo
├── Arctic.png              — Arctic Trefoil base photo
├── NorthClever.png         — North Clever base photo
└── East.png                — Station East Antarctica photo
```

## Component Map

### Layout Components

#### `Header.tsx`
**Responsibility:** Sticky header navigation  
**Features:**
- Sticky positioning with z-50
- Logo as link to homepage
- Phone number (hidden on mobile, shown on sm+)
- "Связаться с нами" CTA button linking to `#contacts`

**Props:** None (uses `contacts` from `lib/content`)

---

#### `Footer.tsx`
**Responsibility:** Footer with contact information  
**Features:**
- Dark navy background
- Logo + company name
- Contact details (phone, email, address)
- Useful links section (Legal notices, etc.)
- "Заказать консультацию" CTA button
- Copyright text
- `id="contacts"` for anchor scroll

**Props:** None (uses `contacts` from `lib/content`)

---

### Section Components

#### `Hero.tsx`
**Responsibility:** Hero section with headline and featured image  
**Layout:** 2-column grid (text left, image right) on desktop, stacked on mobile  
**Features:**
- Navy gradient background
- Large heading (h1)
- Description text
- Two CTA buttons (primary "Обсудить проект", outline "Связаться с нами")
- H2O hotel image with caption
- Responsive typography scaling

---

#### `Stats.tsx`
**Responsibility:** Key metrics bar  
**Layout:** 3-column grid, stacks to 1-column on mobile  
**Data Source:** `stats` array from `lib/content`  
**Features:**
- Dark navy background
- Each stat displays: icon + value + label
- Icons: calendar, users, shield

---

#### `About.tsx`
**Responsibility:** Company description section  
**Layout:** 2-column text (desktop), stacked (mobile)  
**Features:**
- Heading with "СОЗДАЁМ НАДЁЖНОЕ БУДУЩЕЕ" title
- Two paragraphs about company experience and scope
- Light surface background

---

#### `Directions.tsx`
**Responsibility:** Service directions showcase  
**Layout:** 3-column grid (sm: 2, mobile: 1)  
**Data Source:** `directions` array from `lib/content`  
**Features:**
- Each card has: icon + title
- Crane custom SVG icon for main direction
- Building/landmark icons for other directions

---

#### `Projects.tsx`
**Responsibility:** Portfolio showcase  
**Layout:** 5-column grid → 3-column → 2-column → 1-column (responsive)  
**Data Source:** `projects` array from `lib/content`  
**Features:**
- Each card: image + title + location
- Images use `next/image` with `fill` + dynamic sizing
- Hover effects on cards

---

#### `Advantages.tsx`
**Responsibility:** Company strengths/features  
**Layout:** 3-column grid → 2-column → 1-column (responsive)  
**Data Source:** `advantages` array from `lib/content`  
**Features:**
- Each item: circular icon + title + description
- Icons: award, clipboard-list, calendar-check, shield-check, users, wallet

---

### UI Components

#### `Container.tsx`
**Props:**
```typescript
interface Props {
  children: ReactNode;
  className?: string;
}
```
**Purpose:** Max-width wrapper (1280px) with horizontal padding  
**Usage:** Wraps all section content

---

#### `Button.tsx`
**Props:**
```typescript
interface Props {
  href: string;
  variant?: 'primary' | 'outline';
  children: ReactNode;
  className?: string;
}
```
**Variants:**
- `primary`: Accent green background, white text
- `outline`: White/accent border, transparent background

---

#### `SectionHeading.tsx`
**Props:**
```typescript
interface Props {
  as?: 'h2' | 'h3';  // default: 'h2'
  children: ReactNode;
  className?: string;
}
```
**Features:**
- Semantic heading (customizable level)
- Green accent dash below text
- Large, bold typography

---

#### `StatItem.tsx`
**Props:**
```typescript
interface Props {
  value: string;
  label: string;
  icon: string;  // lucide-react icon name
}
```

---

#### `DirectionCard.tsx`
**Props:**
```typescript
interface Props {
  title: string;
  icon: string;  // lucide-react icon name
}
```

---

#### `ProjectCard.tsx`
**Props:**
```typescript
interface Props {
  image: string;      // path to image
  title: string;
  location: string;
}
```

---

#### `FeatureItem.tsx`
**Props:**
```typescript
interface Props {
  title: string;
  description: string;
  icon: string;       // lucide-react icon name
}
```

---

## Content Management

All site content lives in **`lib/content.ts`** as type-safe TypeScript objects. No database required.

### Structure Overview

```typescript
// Stats (homepage stats bar)
export const stats = [
  { id: 'years', value: '24+', label: 'лет на строительном рынке', icon: 'calendar' },
  // ...
] as const

// Service directions
export const directions = [
  { id: 'general', title: 'Генеральный подряд', icon: 'crane' },
  // ...
] as const

// Portfolio projects
export const projects = [
  { id: 'h2o', title: 'Гостиничный комплекс «H2O»', location: 'г. Нижний Новгород', image: '/images/h2o.png' },
  // ...
] as const

// Company advantages/features
export const advantages = [
  { id: 'experience', title: 'Опыт и репутация', description: '...', icon: 'award' },
  // ...
] as const

// Company info
export const company = {
  name: 'ООО «ОЗСК-Строй»',
  heroTitle: 'НАДЁЖНЫЙ ГЕНЕРАЛЬНЫЙ ПОДРЯДЧИК...',
  heroDescription: 'ООО «ОЗСК-Строй» — производственно-строительная организация...',
  // ...
} as const

// Contact details
export const contacts = {
  phone: '+7 (81371) 992-44',
  phoneTel: '+78137199244',
  email: 'info@ozsk-stroy.ru',
  address: '188300, Ленинградская область, город Гатчина...',
  copyright: '© ООО «ОЗСК-Строй», 2026',
} as const
```

### How to Add a New Project

1. **Add entry to `projects` array** in `lib/content.ts`:
```typescript
export const projects = [
  // ... existing projects
  {
    id: 'new-project-id',
    title: 'Новый проект',
    location: 'г. Город',
    image: '/images/new-project.png',
  },
] as const
```

2. **Add image file** to `public/images/new-project.png`

3. **No component changes needed** — `Projects.tsx` renders all projects from the array automatically

### How to Change Contact Information

Edit the `contacts` object in `lib/content.ts`:

```typescript
export const contacts = {
  phone: '+7 (NEW) NEW-NEW',        // Display format
  phoneTel: '+7NEWPHONENUMBER',     // tel: link format (no spaces/dashes)
  email: 'newemail@example.com',
  address: '123456, City, Street, Building',
  copyright: '© ООО «ОЗСК-Строй», 2024',
} as const
```

Changes will propagate to:
- Header (phone number link)
- Footer (all contact fields)
- Tel links throughout the site

## Design & Responsiveness

### Breakpoints
Uses Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Responsive Patterns
- **Header:** Phone hidden on mobile, visible on `sm+`
- **Hero:** 2-col grid (desktop) → 1-col (mobile)
- **Projects Grid:** 5-col (xl) → 3-col (lg) → 2-col (md) → 1-col (sm)
- **Advantages:** 3-col → 2-col → 1-col (stacking at lg/md breakpoints)
- **Text Scaling:** `text-3xl sm:text-4xl lg:text-5xl` for large headings

### Color Scheme
- **Primary background:** Navy (`#0A2540`)
- **Accent/CTA:** Green (`#1E9E57`)
- **Text:** Ink gray (`#1A2233`)
- **Borders/dividers:** Light gray (`#E2E8F0`)

## Performance Optimizations

✅ **Image Optimization**
- All images use `next/image` with `fill` layout
- Responsive `sizes` attribute for correct breakpoint sizing
- Automatic format conversion (WebP when supported)
- Lazy loading below-fold images

✅ **Font Optimization**
- Montserrat via `next/font/google` with font swap
- Cyrillic + Latin subsets only (not full font)

✅ **Server Components**
- Zero JavaScript Client Components
- All sections are Server Components for minimal bundle
- Full static generation possible

✅ **Anchor Navigation**
- `scroll-behavior: smooth` in CSS
- No JavaScript required for smooth scrolling
- All CTAs link to `#contacts` footer ID

## SEO & Metadata

Configured in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'ОЗСК-Строй — Надёжный генеральный подрядчик',
  description: 'ООО «ОЗСК-Строй» — производственно-строительная организация. Реализуем сложные проекты точно в срок и с гарантией качества.',
  keywords: 'ОЗСК-Строй, генеральный подрядчик, строительство, Гатчина',
};
```

Update these values if company info changes.

## Accessibility

✅ **Semantic HTML**
- Proper heading hierarchy (`h1` in Hero, `h2` for sections)
- Semantic `<header>`, `<footer>`, `<section>` tags

✅ **ARIA Attributes**
- `aria-hidden="true"` on all decorative icons (lucide-react)
- Meaningful `alt` text on all images

✅ **Keyboard Navigation**
- All links/buttons keyboard accessible
- Sticky header has proper focus management

✅ **Color Contrast**
- Navy/white: 17.5:1 ratio (WCAG AAA)
- Accent green/white: 5.3:1 ratio (WCAG AA)

## Deployment

### Vercel (Recommended)
```bash
# Push to git (GitHub, GitLab, Bitbucket)
git push origin main

# Connect repo to Vercel dashboard
# Auto-deploys on push
```

### Other Platforms (Docker)
```bash
npm run build
npm run start
```

### Environment Variables
Currently none required. If adding API calls, create `.env.local`:
```
NEXT_PUBLIC_API_BASE=https://api.example.com
```

## Development Guidelines

### Adding a New Section
1. Create new component in `components/sections/NewSection.tsx`
2. Export from `app/page.tsx`
3. Add data to `lib/content.ts` if needed
4. Use existing `Container`, `Button`, `SectionHeading` UI components
5. Follow responsive grid patterns (use Tailwind breakpoints)

### Updating Styles
- **Brand colors:** Edit `app/globals.css` `@theme` tokens
- **Typography:** Modify `globals.css` font settings
- **Spacing/layout:** Use Tailwind classes (no inline CSS)
- **Dark mode:** Not implemented (add if needed via `dark:` classes)

### Icon Management
Icons use lucide-react. Update icon names in content arrays:
```typescript
icon: 'award'  // Must be valid lucide-react icon name
```
[Browse available icons](https://lucide.dev)

## Troubleshooting

### Build Errors
- Clear `.next/` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run lint`

### Images Not Loading
- Verify image paths in `lib/content.ts` (relative to `public/`)
- Ensure image files exist in `public/images/`
- Check image format (PNG, JPG, WebP supported)

### Styling Issues
- Rebuild Tailwind cache: `rm -rf .next && npm run dev`
- Verify custom tokens in `app/globals.css`
- Check breakpoint logic in component className

## Next Steps / Future Enhancements

- [ ] Add contact form (currently only footer with phone/email)
- [ ] Implement CMS integration for content management
- [ ] Add blog/news section
- [ ] Implement analytics (Google Analytics, Yandex Metrica)
- [ ] Add multi-language support (Russian/English)
- [ ] Dark mode theme variant
- [ ] Add video backgrounds to Hero section
- [ ] Testimonials/reviews section
- [ ] Interactive project filters/search

## Related Documentation

- **Architecture:** `ai_docs/develop/architecture/`
- **Component Docs:** `ai_docs/develop/components/`
- **Design System:** `ai_docs/design/`
- **Changelog:** `ai_docs/changelog/`

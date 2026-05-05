# Viky Fandreano Portfolio — Senior Interactive Edition

Next.js portfolio website with mobile-first UX, Framer Motion scroll animation, featured case studies, and project detail pages.

## Run locally

```bash
npm install
npm run dev
```

## Latest upgrade included

- Added CoffeeShop Interactive Website as a new project
- Added CoffeeShop as a Featured Project
- Added a full case-study detail page via dynamic route `/projects/coffeeshop-interactive`
- Added live project link to the card and case-study page
- Improved hero mobile heading so the name no longer gets cut off
- Updated stats, skills, and copy to include interactive web work
- Added previous/next case-study navigation on detail pages

## Main files changed

- `src/data/portfolio.ts`
- `src/components/Hero.tsx`
- `src/components/Sections.tsx`
- `src/app/projects/[slug]/page.tsx`

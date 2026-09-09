# ShopEasy (v1.0)

A small, static e-commerce-style demo application built with Next.js and
TypeScript. This is the stable baseline version used for a classroom
demonstration of a software release workflow (branching, PRs, deployment,
rollback).

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- No database, no authentication, no external APIs

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Production build:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout (Header + Footer wrapper)
  page.tsx           Home page
  products/page.tsx  Products listing page
  search/page.tsx    Search page
  profile/page.tsx   Static profile page
components/
  Header.tsx         Site navigation
  Footer.tsx         Site footer
  ProductCard.tsx     Reusable product card
data/
  products.ts         Static product catalog (id, name, category, price, description)
lib/
  search.ts           Search logic (name/category match) - edit here to change search behavior
```

## Notes for the demo

- Product data lives in `data/products.ts`, separate from UI components.
- Search matching logic is isolated in `lib/search.ts` for easy modification
  in a later branch.
- No feature flags, recommendations, cart, or auth are implemented in this
  version by design - it is the stable v1.0 baseline.

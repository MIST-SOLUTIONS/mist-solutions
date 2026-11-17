# Mist Solutions: studio website

The marketing site for **Mist Solutions**, a product studio in Antwerp, Belgium. It presents the studio's approach and its products, including [Assess4me](https://assess4me.com): gamified recruitment assessments powered by AI.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Highlights

- **Next.js 16 App Router** with React 19 and TypeScript
- **Tailwind CSS 4** with fluid `clamp()` typography and a custom editorial layout
- **Framer Motion** scroll-reveal animations through a reusable `<Reveal>` component
- **Strict Content Security Policy**: `middleware.ts` generates a new nonce for every request and sets a locked-down CSP (`default-src 'self'`, no frames, no inline scripts)
- **Vercel Analytics and Speed Insights** for real-user performance monitoring

## Structure

```
app/            Root layout, page, metadata and icons
components/     Page sections (Hero, WhatWeDo, Products, Vision, About, Collaboration, …)
components/ui/  Shared UI primitives (Reveal)
middleware.ts   Per-request CSP nonce and security headers
```

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Deployed on Vercel.

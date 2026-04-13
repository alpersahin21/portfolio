# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel.

## Commands

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm run start` — Run production server
- `npm run lint` — ESLint with Next.js rules

No test framework is configured.

## Architecture

**Routing**: Next.js App Router under `src/app/`. Pages: home (`/`), about (`/about`), projects (`/projects`), dynamic project detail (`/projects/[slug]`). Static generation via `generateStaticParams()` for project pages.

**Components**: Organized under `src/components/` into `layout/` (Header, Footer) and `sections/` (grouped by page — `home/`, `about/`, `projects/`).

**Data**: All content is hardcoded in TypeScript — project data lives in `src/data/projects.ts` with a `Project` interface. About page content (education, experience, skills, etc.) is hardcoded directly in their respective section components.

**Client vs Server Components**: Most components are server components. `"use client"` is used only where needed (Hero.tsx for interactive profile image, Header.tsx for mobile menu state).

**Path alias**: `@/*` maps to `./src/*`.

## Styling

- Tailwind CSS v4 with `@import "tailwindcss"` and `@theme` directive in `globals.css`
- Color scheme: sage green primary (`#7D9D9C`), always light theme (dark mode overridden)
- Fonts: Geist Sans (body) and Geist Mono (monospace), loaded via `next/font/local`
- Custom CSS animations in `globals.css`: profile image rotation/pulse, card hover effects
- Fixed header layout — main content uses `pt-24 md:pt-32` to offset

## Key Patterns

- Mobile-first responsive design with Tailwind breakpoints
- Vercel Analytics integrated in root layout
- Public assets: profile image at `/public/images/`, CV PDF at `/public/files/`

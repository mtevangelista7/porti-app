# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Tech Stack & Architecture

This is a Next.js 15 application using the App Router architecture with the following key technologies:

### Core Framework
- **Next.js 15** with App Router (`app/` directory structure)
- **React 19** with TypeScript
- **Turbopack** for fast development builds

### Styling & UI
- **Tailwind CSS 4** for styling
- **shadcn/ui** components configured (see `components.json`)
- **Lucide React** for icons
- **CVA (Class Variance Authority)** for component variants
- Custom CSS utilities in `lib/utils.ts` using `clsx` and `tailwind-merge`

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts
  - `page.tsx` - Home page component
  - `globals.css` - Global styles and Tailwind imports
- `lib/` - Shared utilities and helpers
- `components/` - Reusable UI components (configured for shadcn/ui)
- `public/` - Static assets

### Key Configuration
- **TypeScript** configured with strict mode and path aliases (`@/*` maps to `./*`)
- **shadcn/ui** configured with:
  - New York style
  - Stone base color
  - CSS variables enabled
  - Components aliased to `@/components`
  - Utils aliased to `@/lib/utils`

### Development Notes
- The project uses Geist Sans and Geist Mono fonts from Google Fonts
- Turbopack is enabled for faster development builds
- Path aliases are configured for clean imports (`@/` prefix)
- The application supports dark mode through Tailwind CSS
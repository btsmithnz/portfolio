# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server on port 3000
pnpm build        # Production build
pnpm test         # Run tests with Vitest
pnpm check        # Lint and format check (Biome)
pnpm lint         # Lint only
pnpm format       # Format only
```

## Architecture

This is a personal portfolio site built with **TanStack Start** (React meta-framework with SSR) and deployed on Vercel.

### Tech Stack
- **Framework**: TanStack Start (React 19 + Vite + Nitro for SSR)
- **Routing**: TanStack Router with file-based routes in `src/routes/`
- **Styling**: Tailwind CSS v4 with dark mode
- **State**: TanStack Query for server state
- **React Compiler**: Enabled via babel-plugin-react-compiler

### Key Files
- `src/routes/__root.tsx` - Root layout with Header, devtools, and Vercel Analytics
- `src/routes/index.tsx` - Main portfolio page with all content (profile, experience, projects defined as constants at top)
- `src/router.tsx` - Router configuration with SSR query integration
- `vite.config.ts` - Vite config with TanStack Start, Tailwind, Nitro, and React Compiler plugins
- `src/routeTree.gen.ts` - Auto-generated route tree (do not edit manually)

### Adding Routes
Create files in `src/routes/`. The route tree is auto-generated. Use `createFileRoute` for pages and `createRootRouteWithContext` for layouts.

## Code Style

- **Formatting**: Biome with tabs, double quotes for JS strings
- **UI Components**: Use shadcn/ui - install with `pnpm dlx shadcn@latest add <component>`
- **Icons**: lucide-react
- **Class utilities**: `clsx` and `tailwind-merge` (via `src/lib/utils.ts`)

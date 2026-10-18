# AGENTS.md

Partner ("socios") portal for Club Estudiantes de La Plata. Astro 7 SSR (`output: 'server'`) + Tailwind v4, single pnpm package. All user-facing copy is Spanish (`lang='es'`); code comments are often Spanish too.

## Commands

- `pnpm dev` — dev server, bound to `--host` (LAN-accessible)
- `pnpm build` / `pnpm preview` — production build / preview
- No lint/format npm scripts exist. Run directly:
  - `pnpm exec eslint .`
  - `pnpm exec prettier --check <only-the-files-you-touched>`

## Gotchas

- **Do not run `prettier --write .` repo-wide.** ~55 files currently fail `prettier --check`; blanket formatting creates a huge unrelated diff. Format only files you edit.
- No test suite and no `astro check` (`@astrojs/check` is not installed) — validation is `pnpm build` + `eslint .`.
- tsconfig extends `astro/tsconfigs/strictest` with `verbatimModuleSyntax` → use `import type` for type-only imports.
- Path alias: `~/*` → `./src/*` (defined in tsconfig; Astro resolves it natively).
- Style enforced by `eslint-config-love` + Prettier: no semicolons (`semi: never`/`semi: false`), single quotes, `arrowParens: avoid`, `printWidth: 100`, `singleAttributePerLine` (one JSX/HTML attr per line), `experimentalTernaries`.

## Architecture

- `src/pages/<route>/index.astro` files are thin wrappers: they import `~/layouts/Layout.astro` and render exactly one section from `src/sections/<route>/`. Put page-specific markup/logic in `src/sections/`, not in pages.
- Reusable components live in `src/components/ui/`. `Layout.astro` composes Header + Footer + WhatsApp bubble + SEO and accepts `headerVariant: 'full' | 'minimal'`.
- There is no real backend. `src/database/fake-database-partner.json` and `info.json` are placeholder/mocks; `src/pages/api/db.ts` returns the fake partner JSON as an `APIRoute`. Treat `src/database/` contents as throwaway until real integration.
- `src/constants/index.ts` holds static content arrays (nav, news, sponsors) typed with `satisfies` — several are intentionally empty placeholders kept for type shape.
- No client-side scripts beyond what components import themselves (e.g. `Atropos.astro` bundles its own `<script>`). Pages are otherwise fully server-rendered.

## Styling

- Tailwind v4 CSS-first: no `tailwind.config` file. Theme tokens (club colors `edlp-*`, `warm-beige-*` scale, font families) are defined in `@theme` inside `src/styles/global.css`; add new tokens there.
- Brand fonts: GT America (self-hosted in `public/fonts`, loaded via `src/styles/font-face.css`) and Archivo Black (fetched by Astro's font config in `astro.config.mjs`, exposed as `--font-archivo-black`).

## Agent setup

Installed agent skills live in `.agents/skills/` (tracked by `skills-lock.json`), including a repo-specific `astro` skill — prefer it for framework questions.

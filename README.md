# Karl Cusi Portfolio

Single-page portfolio. React 18 + Vite + Tailwind, no router, no backend.

## Commands

```bash
pnpm dev        # local dev server
pnpm typecheck  # tsc -b --noEmit
pnpm lint       # eslint
pnpm build      # typecheck + production build to dist/
```

## Environment

Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY`, or the contact form
falls back to showing its mailto error path.

## Content

All copy lives in `src/data/`, not in components:

- `profile.ts` — name, pitch, links, and the **availability flag** the sidebar
  badge reads. Flip `availability.open` to `false` when you stop taking work.
- `experiences.ts` — ordered most recent first, current roles at the top.
  `endYear: null` is what renders "Present"; there is no second date field.
- `projects.ts` — `link: null` plus `linkNote` renders a "no public demo" badge
  instead of a dead link. `highlight` is the one line meant to survive a
  seven-second scan.

## Images

Screenshots are committed as WebP in two sizes: `name-thumb.webp` (480w, used in
the strip, lazy loaded) and `name.webp` (1600w, loaded only when the lightbox
opens). Regenerate from PNG sources with Pillow if you add a project; keep both
sizes or the lightbox will upscale a thumbnail.

## Design constraints

- `#AAC7D8` is **1.77:1 on white**. It is `accent`, for rules, borders and rings
  only. When the accent has to be read, use `accent-ink` (`#3F6B87`).
- Every text token in `tailwind.config.js` clears WCAG AA (4.5:1) against all
  three surfaces it can sit on: white, `canvas`, and `accent-wash`.
- Inter is self-hosted and subset to latin (`src/assets/fonts/`, ~27 KB, weights
  400–800). It is not loaded from a CDN.
- Ambient effects (particles, cursor gradient) render only on wide screens with
  a fine pointer and no `prefers-reduced-motion`. tsparticles is a lazy chunk.

## Design inspiration

Layout owes its two-column shape to
[Brittany Chiang's portfolio](https://brittanychiang.com).

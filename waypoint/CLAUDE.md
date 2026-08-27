@AGENTS.md

## Working in this repo

Waypoint is a fictional 2-page travel site: an Explore page and a Destination
detail page. It exists as a design playground for practicing the branch → PR
→ review → merge → live workflow — see `WORKFLOW.md` and `ISSUES_BACKLOG.md`
at the repo root (if present) for the process this project follows.

### Stack

- Next.js (App Router), TypeScript, Tailwind CSS v4
- Hand-rolled shadcn/ui-style primitives in `src/components/ui/` (button,
  card, badge, input, separator) — same pattern as the shadcn CLI generates.
  `components.json` is now configured, so new primitives should be pulled
  with the real CLI: `npx shadcn@2.10.0 add <component>` (pin to `2.10.0` —
  `@latest` resolves to an incompatible newer major version with a different
  design system). Re-skin whatever it generates to the Waypoint tokens in
  `DESIGN_SYSTEM.md`, and follow the same conventions (`cva` for variants,
  `cn()` for class merging) as the existing five.
- Icons: `lucide-react`
- No test framework configured yet — keep changes visually verifiable via
  `npm run dev`.

### Where things live

- `src/data/destinations.ts` — all destination content (name, region, price,
  itinerary, gallery, testimonial). Add or edit destinations here; both pages
  read from this single source.
- `src/app/page.tsx` — Explore/home page (hero + search + filter + grid).
- `src/app/destinations/[slug]/page.tsx` — destination detail page.
- `src/components/destination-card.tsx` — the "boarding pass" card, the
  signature visual element. Reused implicitly by both pages.
- `src/components/explore-grid.tsx` — client component holding search/filter
  state for the Explore page.
- `src/app/globals.css` — design tokens (CSS variables) and the custom
  utility class (`.tear-line` for the perforated divider). Change tokens
  here, not by hardcoding hex values in components.

### Design language — read before making visual changes

**Full reference: `DESIGN_SYSTEM.md` at the repo root.** Read it before touching
any styling, component, or new UI — it has the complete token table, every
component's variants/states, and the do's/don'ts. This paragraph is just the
one-line summary; that file is the actual source of truth, and it should be
updated in the same PR whenever a component changes or a new one is added.

Waypoint's visual identity is a "boarding pass / travel ticket" aesthetic:
warm paper background, deep ink navy text, a petrol-teal primary color, and
a mustard-gold accent. Destination cards use a dashed perforation
(`.tear-line`) and a monospace airport-style 3-letter code badge. Keep new
UI consistent with this — avoid generic SaaS-dashboard styling (no default
blue links, no drop shadows beyond `shadow-sm`, no gradients).

- Display font: serif, via the `font-display` utility (headings, destination
  names, quotes).
- Body font: system sans, default.
- Monospace: used deliberately for "ticket data" (prices, codes, dates,
  tags) via the `font-mono` utility — not for general body text.

### Conventions

- Server components by default; add `"use client"` only when you need
  interactivity (state, event handlers) — see `explore-grid.tsx` for the
  pattern.
- Images use `next/image` with `picsum.photos` as placeholder source
  (already allow-listed in `next.config.ts`). Replace with real photos by
  swapping the URL in `destinations.ts`, no other config changes needed.
- Use the existing `src/components/ui/*` primitives instead of raw HTML
  elements where one exists (e.g. `<Button>` not `<button>`).
- Run `npm run build` before opening a PR — it catches type errors that
  `next dev` sometimes doesn't surface immediately.

@AGENTS.md

## Working in this repo

Waypoint is a fictional 2-page travel site: an Explore page and a Destination
detail page. It exists as a design playground for practicing the branch → PR
→ review → merge → live workflow — see `WORKFLOW.md` and `ISSUES_BACKLOG.md`
at the repo root (if present) for the process this project follows.

### Stack

- Next.js (App Router), TypeScript, Tailwind CSS v4
- Hand-rolled shadcn/ui-style primitives in `src/components/ui/` (button,
  card, badge, input, separator) — same pattern as the shadcn CLI generates,
  added by hand since this sandbox couldn't reach the shadcn registry. Follow
  the same conventions (`cva` for variants, `cn()` for class merging) if you
  add more primitives.
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

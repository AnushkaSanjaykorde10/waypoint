# Waypoint Design System

This is the source of truth for Waypoint's visual language — colors, type, spacing,
and every reusable component. Read this before making any visual change, whether
you're a designer using Claude to make the edit, or Claude working from the backlog
directly. `CLAUDE.md` points here for exactly this reason: this file is what keeps
every PR consistent with the last one, regardless of who (or what) made it.

If you add or change a component, update this file in the same PR. An undocumented
component doesn't count as part of the system yet.

---

## 1. Concept

Waypoint's identity is a **boarding pass / travel ticket** aesthetic: warm paper,
deep ink navy text, a petrol-teal primary, and a mustard-gold accent. Cards use a
dashed perforation (the "tear line") and a monospace airport-code badge, echoing an
actual ticket stub.

**Avoid:** default blue links, drop shadows beyond `shadow-sm`, gradients, generic
SaaS-dashboard styling. If a new pattern doesn't feel like it could print on a ticket,
it's probably off-brand.

---

## 2. Tokens

All tokens are CSS variables in `src/app/globals.css`, exposed to Tailwind via
`@theme inline`. **Never hardcode a hex value in a component** — every color a
component uses should resolve to one of these.

### Color

| Token | Light | Dark | Use for |
|---|---|---|---|
| `background` | `#faf7f1` | `#10161c` | Page background |
| `foreground` | `#1c2530` | `#f5f1e6` | Body text |
| `card` | `#ffffff` | `#161e27` | Card/surface background |
| `card-foreground` | `#1c2530` | `#f5f1e6` | Text on cards |
| `primary` | `#1f6f66` (petrol teal) | `#3fa79c` | Primary actions, links, focus ring |
| `primary-foreground` | `#faf7f1` | `#10161c` | Text/icons on primary |
| `secondary` | `#efe7d8` | `#202a33` | Secondary buttons, tag chips |
| `muted` | `#f0ece2` | `#202a33` | Subtle backgrounds (empty states, dividers) |
| `muted-foreground` | `#6b6459` | `#9aa3ab` | Captions, metadata |
| `accent` | `#c98a2c` (mustard gold) | `#d9a24b` | Sparingly — the one warm highlight |
| `destructive` | `#b3261e` | `#e5847c` | Errors, destructive actions only |
| `border` / `input` | `#ddd6c7` | `#2a343e` | Borders, dividers, input outlines |
| `ring` | `#1f6f66` | `#3fa79c` | Focus rings |

`accent` is a highlight, not a second primary — one accent element per view, not
scattered across a page. If everything is gold, nothing is.

### Typography

| Role | Token | Stack | Used for |
|---|---|---|---|
| Display | `font-display` | Georgia, "Times New Roman", serif | Headings, destination names, quotes |
| Body | `font-sans` | System sans (`-apple-system`, Segoe UI, etc.) | Everything else, default |
| Data | `font-mono` | System mono (SF Mono, Menlo, etc.) | Prices, dates, airport codes, tags — deliberately, not for body text |

### Radius & shape

| Token | Value | Notes |
|---|---|---|
| `radius` | `0.5rem` | Base; `radius-sm/md/lg/xl` derive from it |
| `.tear-line` | utility class | Dashed perforation with punch-hole circles either end — the signature card divider. Use for any stub/body split, not just destination cards. |

### Elevation

Only `shadow-sm` by default; `shadow-md` on hover for interactive cards
(see `DestinationCard`). No heavier shadows — flat, paper-like depth is the point.

---

## 3. Components

### Button (`src/components/ui/button.tsx`)

| Variant | Use when |
|---|---|
| `default` | Primary action (teal fill) |
| `secondary` | Supporting action, doesn't compete with primary |
| `outline` | Low-emphasis action next to a primary one |
| `ghost` | Toolbar/icon actions, minimal chrome |
| `link` | Inline text-styled action |
| `accent` | Rare — a single moment of gold emphasis ("Plan this trip") |
| `destructive` | Irreversible/removal actions only (e.g. "Remove destination") |

**Sizes:** `sm` (h-9, 36px — dense/secondary contexts only) · `default` (h-11, 44px)
· `lg` (h-12, 48px — comfortable primary-CTA touch target) · `icon` (square, h-11 w-11).

**States:** hover (`opacity-90`/background shift per variant), focus-visible
(2px `ring` + offset), disabled (`opacity-50`, pointer-events none). No loading
state exists yet — flagged as an open gap below.

**Do:** use `accent` for the single most important CTA on a page, at most once.
**Don't:** use `accent` on more than one button per view, or use `default` and
`accent` next to each other (they'll fight).

### Card (`src/components/ui/card.tsx`)

Composable primitive: `Card`, `CardHeader`, `CardTitle`, `CardDescription`,
`CardContent`, `CardFooter`. Generic container — the destination card
(`destination-card.tsx`) is a *pattern* built on top of it with the tear-line and
airport-code badge, not this primitive directly. Use `Card` for any future
container that doesn't need the full ticket treatment (e.g. a settings panel).

### Badge (`src/components/ui/badge.tsx`)

| Variant | Use when |
|---|---|
| `default` | Teal-filled, general labeling |
| `secondary` | Neutral tag (this is what destination tags use) |
| `accent` | Gold-filled — status/highlight only, not for routine tags |
| `outline` | Lowest-emphasis label |
| `destructive` | Error/removed-status labeling only |

### Input (`src/components/ui/input.tsx`)

Single text input, `h-11`, focus ring via `ring` token. No error/validation state
styled yet — flagged below.

### Separator (`src/components/ui/separator.tsx`)

Radix-based hairline divider, horizontal or vertical, using the `border` token.
Use this for a plain rule; use `.tear-line` when the divider should read as part
of the ticket motif (card stub/body splits).

---

## 4. Patterns

### Destination card (`src/components/destination-card.tsx`)

The signature pattern: airport-code badge (`font-mono`, top-left over the image) →
`.tear-line` → name (`font-display`) + region → tagline → up to 2 tags (`Badge
variant="secondary"`) → footer row (days · price, `font-mono`). Reused implicitly
by both the Explore grid and is the visual seed for the detail page hero.

### Not yet built (from `ISSUES_BACKLOG.md` — design before implementing)

- **Empty state** for zero filter results — no pattern exists yet; don't improvise
  one inline, design it here first so it's reusable.
- **Dark mode toggle** — tokens already exist (`.dark` class in `globals.css`) but
  nothing switches it yet.
- **Button loading state** — no spinner/disabled-while-pending pattern defined.
- **Input error/validation state** — no invalid-state styling defined.

---

## 5. Do's and Don'ts (system-wide)

| ✅ Do | ❌ Don't |
|---|---|
| Pull every color from a token | Hardcode a hex value in a component |
| Use `font-mono` for prices/dates/codes | Use `font-mono` for paragraph text |
| One `accent`-colored element per view | Multiple gold elements competing for attention |
| Extend `Card`/`Badge`/`Button` via existing variants | Add a one-off inline style that duplicates an existing variant |
| Add new shadcn components with `npx shadcn@2.10.0 add ...` (see `components.json`) | Use `npx shadcn@latest` — resolves to an incompatible newer CLI, see PR #for the shadcn-config change |

---

## 6. External influences

Occasionally another product's published design principles are worth studying —
but studying is not copying. When pulling in an outside reference:

- **Adopt the reasoning, not the brand.** A competitor's exact color, named brand
  color, or licensed font is off-limits — Waypoint keeps its own palette and type
  regardless of inspiration source. What's fair game is the underlying *why*: how
  they think about density, restraint, hierarchy, or accessibility.
- **Document what was actually taken**, so it's traceable later.

**Airbnb's public DESIGN.md** (reviewed 2026) was the source for one change so far:
their buttons hold a fixed, generous touch-target height (48px) for primary
actions — above the WCAG AAA minimum — on the reasoning that "the brand trusts
[...] generous [sizing]" for comfortable tapping over cramming more on screen.
Waypoint's `Button` `default` size was `h-10` (40px, under AAA); it's now `h-11`
(44px, meeting AAA), with `lg` raised to `h-12` (48px) to match Airbnb's number
for the most important CTAs. No color, font, or layout from that source was
carried over — Waypoint's palette, type, and shadow/spacing rules stay as
Section 1–2 define them.

Two more of their principles are worth a look later, as their *own* backlog
items with a visual check before shipping (not applied here):

- **Tighter vertical rhythm between page sections** than a typical generic
  layout default, reasoned from needing higher card density per scroll on a
  browse-heavy page — could apply to the Explore grid's section spacing.
- **A full-pill search input** (as opposed to the current `rounded-md` box) —
  worth trying on the Explore page's search bar specifically, not as a
  system-wide `Input` change, since a pill reads differently against the
  ticket motif than the filter chips do.

---

## 7. Adding a new component

1. Check this file first — does a variant of an existing component already cover it?
2. If genuinely new, pull it via `npx shadcn@2.10.0 add <component>` where possible,
   then re-skin it to the tokens above (it'll arrive with generic shadcn colors —
   swap them for the Waypoint tokens, same as the existing five components).
3. Document it here in the same PR: variants, states, do's/don'ts — follow the
   shape of the sections above.

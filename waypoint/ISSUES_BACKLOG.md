# Practice Backlog

Small, scoped tasks for the Waypoint playground. Each one should fit in a single
branch → PR → review → merge cycle (roughly 20–60 min of work). Pick one, create
a branch (`feature/short-name`), work with Claude Code, open a PR using the
template, get it reviewed, merge, check it live.

Sizes: 🟢 small (content/copy) · 🟡 medium (styling/layout) · 🔴 large (new component/composition)

---

## Content edits

- 🟢 **Add a new destination** — Add one new entry to the destinations data file
  (name, region, blurb, price-from, image, tags). Confirm it shows up correctly
  on both the Explore grid and its own detail page.
- 🟢 **Rewrite the hero copy** — The homepage hero headline/subhead feels generic.
  Rewrite it to sound more like a specific, opinionated travel brand rather than
  a stock template.
- 🟢 **Fix inconsistent tone in blurbs** — A few destination blurbs read
  differently in voice/length from the others. Normalize them.
- 🟢 **Add alt text everywhere** — Audit all images across both pages and add
  meaningful alt text (not just filenames).
- 🟡 **Add a "best time to visit" field** — Add this as new structured data per
  destination and surface it on the detail page.

## Styling / layout tweaks

- 🟡 **Restyle the destination cards** — Try a different card layout (e.g. image
  full-bleed with overlay text vs. image-on-top-text-below). Keep it consistent
  across the grid.
- 🟡 **Fix mobile spacing on the detail page** — Gallery, description, and CTA
  card currently feel cramped under ~400px width. Improve spacing/stacking.
- 🟡 **Improve the filter bar** — Turn the current filter controls into pill/chip
  style toggles with a clear active state.
- 🟡 **Add a sticky booking CTA on mobile** — On the detail page, make the
  "Plan this trip" CTA stick to the bottom of the viewport on small screens.
- 🟡 **Dark mode pass** — Add a dark theme toggle and make sure both pages hold
  up (contrast, image treatment, card backgrounds).
- 🟡 **Empty state for filters** — When a filter combination returns zero
  destinations, design and implement a proper empty state instead of a blank grid.

## New components / composition

- 🔴 **Add a testimonials section** — New section on the detail page with 2-3
  fake traveler quotes, avatar, name, short attribution.
- 🔴 **Add an itinerary/day-by-day component** — Expandable list of days with a
  short description each, for the detail page.
- 🔴 **Add a "similar destinations" carousel** — At the bottom of the detail
  page, show 3-4 related destinations with horizontal scroll.
- 🔴 **Add a trip-length filter** — New filter dimension (weekend / 1 week / 2+
  weeks) that actually filters the Explore grid, not just decorative.
- 🔴 **Add a currency toggle** — Let users switch displayed prices between
  USD/EUR/GBP (fake conversion rates are fine).
- 🔴 **Build a simple "compare" mode** — Let a user select 2 destinations from
  the grid and see them side-by-side.

## Bug-fix style (seed these intentionally)

- 🟢 **Broken image fallback** — One destination's image URL is broken on
  purpose; add a graceful fallback/placeholder.
- 🟡 **Fix card layout shift** — Cards with longer blurbs currently push the grid
  out of alignment; fix so all cards stay equal height.
- 🟡 **Fix keyboard focus states** — Buttons/links currently have no visible
  focus ring; add accessible focus styles across both pages.

---

## Suggested first few (good on-ramp order)

1. Add a new destination (🟢) — lowest risk, teaches the data model
2. Rewrite the hero copy (🟢) — pure content, fast PR cycle
3. Restyle the destination cards (🟡) — first real styling PR
4. Add a testimonials section (🔴) — first "new component" PR

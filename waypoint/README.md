# Waypoint

A fictional travel inspiration site — two pages, built as a design
playground for practicing the branch → PR → review → merge → live workflow
with Claude Code.

This is **not** a real booking service. Destinations, prices, and
itineraries are all illustrative.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui-style components (hand-added — see `CLAUDE.md` for why)
- [lucide-react](https://lucide.dev) icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Explore page is the
home page; click any destination card to see the detail page at
`/destinations/[slug]`.

To check the production build (recommended before opening a PR):

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    page.tsx                       Explore / home page
    destinations/[slug]/page.tsx   Destination detail page
    layout.tsx                     Root layout (header/footer, metadata)
    globals.css                    Design tokens + custom utility classes
  components/
    ui/                            shadcn/ui-style primitives
    destination-card.tsx           The "boarding pass" card (signature UI)
    explore-grid.tsx               Search + filter + grid (client component)
    site-header.tsx / site-footer.tsx
  data/
    destinations.ts                All destination content lives here
```

## Making a change

This project is meant to be edited with Claude Code, following the workflow
described in `WORKFLOW.md` (if included in your copy of this repo) —
branch, edit, push, open a PR, get it reviewed, merge, confirm it's live.
See `CLAUDE.md` for the design conventions to follow when making changes,
and `ISSUES_BACKLOG.md` for a ready-made list of small practice tasks.

## Deploying

Connect this repo to [Vercel](https://vercel.com) or
[Netlify](https://netlify.com) for automatic preview deployments on every
PR and automatic production deployment on every merge to `main`. No special
build configuration is needed — both platforms detect Next.js automatically.

## Notes on this scaffold

- Destination photos use [picsum.photos](https://picsum.photos) as a
  placeholder image source — swap the URLs in `src/data/destinations.ts` for
  real photos whenever you like; no other config changes are needed
  (`picsum.photos` is already allow-listed in `next.config.ts`).
- The shadcn/ui CLI registry wasn't reachable in the sandbox this was built
  in, so the `src/components/ui/` primitives were hand-written to match the
  same output the CLI normally generates. If you have access to the
  registry, `npx shadcn@latest add <component>` will work normally for
  adding new primitives going forward.

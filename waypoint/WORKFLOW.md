# Workflow: branch → PR → review → merge → live

This is the day-to-day process for making any change to the Waypoint playground.
Every task in `ISSUES_BACKLOG.md` follows this same loop.

---

## 0. One-time setup (do this once, not every task)

1. **Clone the repo** to your machine (or open it in Claude Code directly).
2. **Install dependencies**: `npm install`
3. **Run it locally**: `npm run dev` — confirm it opens at `http://localhost:3000`
4. **Connect the repo to Vercel** (or Netlify) so every PR gets an automatic preview
   link. This is a one-time project setting, not something each designer does.
5. **Set branch protection on `main`** in GitHub settings: require at least one
   approving review before merging, and disable direct pushes to `main`.

If steps 4-5 are already done for the project, you can skip straight to step 1
of the daily loop below.

---

## 1. Pick a task

- Open `ISSUES_BACKLOG.md` (or the GitHub Issues tab if it's been turned into
  issues) and pick one unclaimed task.
- Assign it to yourself / comment "working on this" so two people don't
  duplicate effort.

## 2. Create a branch

```
git checkout main
git pull
git checkout -b feature/short-descriptive-name
```

- Branch names should describe the change, e.g. `feature/restyle-cards`,
  `feature/hero-copy`, `fix/broken-image-fallback`.
- Always branch from an up-to-date `main` — pulling first avoids merge
  headaches later.

## 3. Make the change with Claude Code

- Open the project in Claude Code (or point it at the repo).
- Describe the task in plain language, referencing the issue, e.g.:
  > "Restyle the destination cards on the Explore page so the image is
  > full-bleed with the title overlaid at the bottom, like a poster card."
- Let Claude Code edit the relevant files. Review the diff it produces before
  accepting — you don't need to read every line of code, but skim for
  anything that looks like it touches files unrelated to your task.

## 4. Check it locally

- With `npm run dev` running, view the change in the browser.
- Check both pages if your change could affect layout globally (e.g. shared
  components, global styles).
- Check a narrow/mobile-width viewport, not just desktop.

## 5. Commit and push

```
git add .
git commit -m "Restyle destination cards to full-bleed poster style"
git push -u origin feature/short-descriptive-name
```

- Keep commit messages descriptive — "fix stuff" tells a reviewer nothing.

## 6. Open the pull request

- On GitHub, open a PR from your branch into `main`.
- The PR template will auto-populate — fill in every section:
  - What changed
  - Preview link (Vercel/Netlify will comment on the PR automatically within
    ~1-2 minutes with the link, or check the "Deployments" section on the PR)
  - Screenshot(s)
  - What to check in review
  - Type of change
  - Checklist
- Do not merge your own PR, even if you're confident it's right — the whole
  point is practicing the review step.

## 7. Review

- A teammate opens the preview link (not just the code) and checks it against
  what the PR description says to look at.
- Reviewer either:
  - **Approves** → move to merge
  - **Requests changes** → leaves specific comments; author goes back to step
    3, pushes new commits to the *same branch* (no need to open a new PR —
    it updates automatically), and re-requests review.
- Keep review comments specific and kind: point at what to check, not just
  "looks off."

## 8. Merge

- Once approved, click **Merge** (squash merge keeps history clean for a
  small project like this).
- Delete the branch after merging — keeps the branch list tidy.

## 9. Confirm it's live

- Vercel/Netlify auto-deploys `main` on every merge.
- Open the real production URL and confirm the change is actually there —
  don't just assume the merge worked.
- Close the issue / mark the backlog item done.

---

## If something goes wrong

- **Preview link never showed up on the PR** → check the Vercel/Netlify
  project is actually connected to the repo, and that the build didn't fail
  (check the "Checks" tab on the PR for a red X).
- **Merge conflict with `main`** → run `git pull origin main` inside your
  branch, resolve conflicts locally (Claude Code can help here too), commit,
  push again.
- **Change looks right locally but wrong on the preview** → usually an
  environment or caching difference; hard-refresh the preview URL before
  assuming something's broken.
- **Reviewer requested changes** → this is normal and expected, not a
  failure. Push a follow-up commit to the same branch; don't start over.

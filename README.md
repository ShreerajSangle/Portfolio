# Shreeraj Sangle — Portfolio

Personal portfolio site for Shreeraj Sangle (AI & Full-Stack Product Builder), built with React, TypeScript, Vite, and Tailwind CSS.

## Tech stack

- **React 19 + TypeScript** — component structure
- **Vite** — build tool / dev server
- **Tailwind CSS v4** — styling, driven by design tokens matching the brand palette (`src/index.css`)
- Content lives in a single typed data file (`src/data/profile.ts`) for easy editing

## Project structure

```
src/
  components/   UI sections (Nav, Hero, Projects, About, Services, Experience, Skills, Highlights, Contact, Footer)
  data/         profile.ts — all site content in one place
  hooks/        useReveal.ts — scroll-reveal IntersectionObserver hook
  index.css     Tailwind entry + design tokens (colors, fonts, animations)
  App.tsx       page composition
public/
  favicon.svg
.github/workflows/deploy-pages.yml   GitHub Pages deployment
vercel.json                          Vercel deployment config
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build locally
npm run lint        # run oxlint
```

## Editing content

All copy, project details, experience, skills, and contact info live in `src/data/profile.ts`. Update that file — no need to touch component markup for content changes.

## Branch strategy

- `test` — active development branch; all changes land here first
- `main` — production branch; deployed automatically via GitHub Actions to GitHub Pages, and via Vercel's Git integration

Merge `test` → `main` only after verifying the build (`npm run build`) and manually checking the site.

## Deployment

### GitHub Pages

A workflow at `.github/workflows/deploy-pages.yml` builds and deploys the site to GitHub Pages on every push to `main`.

One-time setup in the repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` — the workflow builds with `VITE_BASE_PATH=/<repo-name>/` (set automatically from the repository name) and publishes `dist/` to Pages.

The site will be available at `https://<username>.github.io/<repo-name>/`.

### Vercel

The repo includes `vercel.json` so Vercel needs no manual configuration:

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Vercel detects the Vite framework automatically (build command `npm run build`, output directory `dist`).
3. Set the **Production Branch** to `main` in Project Settings → Git, so deployments track `main` (development can still be previewed from `test` via Vercel's automatic PR/branch previews).

No environment variables are required for the Vercel build — `VITE_BASE_PATH` defaults to `/`, which is correct for a root domain deployment.

## Notes on content

A small number of details (phone number, additional languages, an exact current job title at Lidl) were not present in the source profile document and were intentionally left out or handled as safe placeholders rather than invented. Update `src/data/profile.ts` directly once confirmed.

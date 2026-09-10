# Shreeraj Sangle — Portfolio

Personal portfolio site for Shreeraj Sangle (AI & Full-Stack Product Builder), built with React, TypeScript, Vite, and Tailwind CSS.

## Tech stack

- **React 19 + TypeScript** — component structure
- **React Router** — client-side routing (homepage + a dedicated case-study page per featured project)
- **Vite** — build tool / dev server
- **Tailwind CSS v4** — styling, driven by design tokens matching the brand palette (`src/index.css`)
- Content lives in a single typed data file (`src/data/profile.ts`) for easy editing

## Content structure

The homepage is intentionally minimal — a skim path, not a full inventory:

- **Hero** — one-line positioning, no stat tiles
- **Featured projects** (3 of 5) — compact cards with a one-line outcome and a headline metric, linking to a full case-study page at `/projects/:slug`
- **More work** — the remaining 2 projects as a plain linked list, same case-study depth one click away
- **About** — a short bio; "What I can help with" expands on click
- **Experience** — kept fully expanded (résumé-critical, always visible)
- **Skills & Education** — collapsed-by-default accordion, expand any category/degree for the full detail

Nothing was removed — dense content (full project descriptions, the complete skills matrix, education coursework) still exists, just behind a click instead of forced into the initial scroll. See `src/data/profile.ts` for the full data model (`Project.featured` controls the homepage/More-work split).

## Project structure

```
src/
  components/   Nav, Hero, FeaturedProjects, MoreWork, About, Experience, SkillsEducation,
                Contact, Footer, Disclosure (expand/collapse), Reveal (scroll-in), ScrollToTop
  pages/        Home.tsx, ProjectDetail.tsx — routed via React Router
  data/         profile.ts — all site content in one place
  hooks/        useReveal.ts (scroll-reveal), useScrollToHash.ts (cross-page section links)
  index.css     Tailwind entry + design tokens (colors, fonts, animations)
  App.tsx       router setup + persistent Nav/Footer
public/
  favicon.svg
  404.html, spa-redirect.js   GitHub Pages SPA fallback for direct /projects/:slug links
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

Because the site now uses client-side routing (`/projects/:slug` case-study pages), a direct load or refresh of one of those URLs would normally 404 on GitHub Pages (it only serves static files, no server rewrite). `public/404.html` + `public/spa-redirect.js` handle this with the standard [spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect trick — no action needed, it's already wired up. Vercel doesn't need this; `vercel.json`'s rewrite covers it directly.

### Vercel

The repo includes `vercel.json` so Vercel needs no manual configuration:

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Vercel detects the Vite framework automatically (build command `npm run build`, output directory `dist`).
3. Set the **Production Branch** to `main` in Project Settings → Git, so deployments track `main` (development can still be previewed from `test` via Vercel's automatic PR/branch previews).

`vercel.json` also sets security headers (CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) on every response. These only take effect on Vercel — GitHub Pages does not support custom response headers, so the GitHub Pages deployment serves without them.

No environment variables are required for the Vercel build — `VITE_BASE_PATH` defaults to `/`, which is correct for a root domain deployment.

## Notes on content

A small number of details (phone number, additional languages, an exact current job title at Lidl) were not present in the source profile document and were intentionally left out or handled as safe placeholders rather than invented. Update `src/data/profile.ts` directly once confirmed.

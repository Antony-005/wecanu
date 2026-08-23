# WECANU Website

Wildlife & Environmental Club of Africa Nazarene University — built with
React, Vite, Tailwind CSS v4, React Router, and Framer Motion.

## Run locally

    npm install
    npm run dev

## Build for production

    npm run build

Outputs to `dist/`.

## Deploy

Push this repo to GitHub, then import it in Vercel (framework preset:
Vite). No environment variables needed yet — once the membership form is
wired to EmailJS (see the TODO in `src/pages/Membership.jsx`), add your
EmailJS keys as Vercel environment variables.

## Adding real content

- **Photos** — see `PHOTOS.md`.
- **Team names/photos, events, projects, socials, patron phone** — all
  live in `src/data/content.js`. Edit the arrays there and the whole
  site updates.
- **Membership form submission** — currently logs to console only. Wire
  it to EmailJS (same pattern as your other client sites) in
  `src/pages/Membership.jsx`.

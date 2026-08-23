# Adding your photos

## Gallery (categorized, auto-loading)

Drop files straight into the matching folder below — the Gallery page
picks them up automatically via `import.meta.glob`, so no code changes
are needed as photos are added. Any `.jpg`/`.jpeg` file works, any
name, though matching Antony's naming scheme keeps things tidy:

| Category (site label)         | Folder                                       | Expected filenames        |
|--------------------------------|-----------------------------------------------|----------------------------|
| General                        | `src/assets/images/gallery/general/`          | `general1.jpg` – `general17.jpg`, plus `greenweek1.jpg` – `greenweek4.jpg` |
| Clean-Ups & Tree Planting       | `src/assets/images/gallery/cleanups/`         | `clean1.jpg` – `clean17.jpg` |
| Bonfire Nights                  | `src/assets/images/gallery/bonfire/`          | `bonfire1.jpg` – `bonfire17.jpg` |
| Team Building                   | `src/assets/images/gallery/teambuilding/`     | `teambuilding1.jpg` – `teambuilding8.jpg` |
| Leaders                         | `src/assets/images/gallery/leaders/`          | `leaders1.jpg` – `leaders4.jpg` |
| Awareness Walks                 | `src/assets/images/gallery/walks/`            | `walk1.jpg`, `walk2.jpg` |

Adding more photos later: just drop new files into the right folder —
the page re-scans on build/rebuild. No need to tell me unless you're
adding a brand-new category.

## Site credit (footer)

Folder: `src/assets/images/builder/`
- `antony.jpg` — used as the small circular avatar next to "Site by
  Antony" in the footer. A placeholder image is currently in place —
  replace it with the real file (same filename).
- `antony1.jpg` — not wired in yet; reserved for if you want a fuller
  "about the developer" section later.

Also update `src/data/content.js` → the `builder` export — swap in
your real portfolio URL and contact email.

## Team photos

Folder: `src/assets/images/team/`
Name files by year and role, e.g. `2025-26-chairperson.jpg`. Import
each in `src/pages/Team.jsx` and add a `photo` field to the matching
entry in `teamsByYear` in `src/data/content.js`.

## Logo

Already placed at `src/assets/logo/` — three background variants
(orange, black, white), used as-is in the navbar and footer.

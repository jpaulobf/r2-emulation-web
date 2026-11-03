# R2 Emulation Web

Astro + Tailwind starter for the **R2 Emulation** project portal.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Static output is generated in `dist/`. Deploy it to Cloudflare Pages with build command `npm run build` and output directory `dist`.

## Project structure

- `src/pages/index.astro` — homepage
- `src/pages/projects/[slug].astro` — individual project pages
- `src/data/emulators.ts` — project data and official repository links
- `src/components/EmulatorCard.astro` — reusable project card
- `src/styles/global.css` — visual theme and responsive layout

## Important

- The hero artwork is original pixel art and the console images are illustrated concept assets.
- GitHub release links are direct. No fabricated release numbers or dates.
- R2NESV2, R2BOY and R2SEGA8 release links are configured.
- The configured production site is `https://r2emu.com`.
- Portuguese localization, screenshots, video embeds, and automated release feeds are planned for a later iteration.
- Avoid distributing copyrighted game ROMs or game assets without permission.

# WCF Comparator

A small Astro/React site for comparing the 1646 Westminster Confession of Faith with the 1788 American Revision.

The app renders the confession text side by side, highlights wording removed from or added to the 1788 revision, and includes controls for filtering out editorial differences such as spelling, punctuation, and capitalization.

## Features

- Side-by-side 1646 and 1788 text comparison
- Word-level diff highlighting:
  - red = removed in 1788
  - green = added in 1788
- Optional highlighting for punctuation/capitalization changes
- Optional highlighting for spelling changes such as `honour` → `honor`
- Table of contents with changed chapters emphasized
- Light/dark theme toggle with saved preference
- Adjustable reading text size
- Proof texts omitted from the displayed text

## Project structure

```text
/
├── public/                 Static assets and favicons
├── src/
│   ├── components/
│   │   └── ComparisonView.tsx   React UI, diffing, display controls
│   ├── data/
│   │   └── chapters.ts          Confession chapter/section text data
│   ├── pages/
│   │   └── index.astro          Astro page shell and metadata
│   └── styles/
│       └── comparison.css       Tailwind import and dark variant
├── astro.config.mjs        Astro, React, and Tailwind configuration
├── biome.json              Formatting/linting configuration
└── package.json            Scripts and dependencies
```

## Tech stack

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for Cloudflare Pages deployment

## Development

Requires Node.js `>=22.12.0`.

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321` by default.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local Astro dev server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Biome checks |
| `npm run deploy` | Build and deploy `dist/` to Cloudflare Pages project `1646to1788` |

## Editing the comparison text

The comparison content lives in [`src/data/chapters.ts`](src/data/chapters.ts). Each chapter contains numbered sections with `text1646` and `text1788` values. Optional `num1646` and `num1788` fields are used where section numbering differs between editions.

The diffing and highlighting behavior is implemented in [`src/components/ComparisonView.tsx`](src/components/ComparisonView.tsx).

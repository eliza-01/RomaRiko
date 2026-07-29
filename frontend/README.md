# Roma & Riko frontend

Modern static frontend rebuilt from the archived site snapshot.

## Development

```bash
cd frontend
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The Astro project uses the repository-level `assets/` directory as its public asset source, so the archived images and fonts remain untouched.

## Current scope

- responsive home page;
- base visual system derived from the original site;
- reusable layout and global styles;
- original snapshot preserved outside `frontend/`.

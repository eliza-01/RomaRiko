# Roma & Riko frontend

Modern static frontend rebuilt from the archived site snapshot.

## Development through Docker

Run from the repository root:

```bash
docker compose up --build
```

Open:

```text
http://localhost:4321
```

The development container runs Astro with hot reload. The `frontend/` directory is mounted into the container, while the repository-level `assets/` directory is mounted read-only.

To stop the project:

```bash
docker compose down
```

To recreate the dependency volume after changing dependencies:

```bash
docker compose down -v
docker compose up --build
```

## Production build through Docker

Build and run the static production site through Nginx:

```bash
docker compose --profile production up --build frontend-production
```

Open:

```text
http://localhost:8080
```

Stop the production container:

```bash
docker compose --profile production down
```

## Ports

Ports can be overridden without changing Compose:

```bash
FRONTEND_PORT=3000 docker compose up --build
FRONTEND_PROD_PORT=8088 docker compose --profile production up --build frontend-production
```

## Project notes

- Astro uses the repository-level `assets/` directory as its public asset source.
- The archived snapshot and its assets remain untouched.
- Development dependencies are stored in the Docker volume `frontend_node_modules`.
- No `.gitignore` changes are required for this setup.

## Current scope

- responsive home page;
- base visual system derived from the original site;
- reusable layout and global styles;
- original snapshot preserved outside `frontend/`.

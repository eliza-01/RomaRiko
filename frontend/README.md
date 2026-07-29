# Roma & Riko frontend

Modern static frontend rebuilt from the archived site snapshot.

## Development

Run from the repository root:

```bash
docker compose up --build
```

Open `http://localhost:4321`.

The container runs Astro with hot reload. `frontend/` is mounted into the container, while the repository-level `assets/` directory is mounted read-only.

Stop the project:

```bash
docker compose down
```

Recreate installed dependencies after changing `package.json`:

```bash
docker compose down -v
docker compose up --build
```

## Production

Build Astro and serve the static result through Nginx:

```bash
docker compose --profile production up --build frontend-production
```

Open `http://localhost:8080`.

Stop the production container:

```bash
docker compose --profile production down
```

## Custom ports

```bash
FRONTEND_PORT=3000 docker compose up --build
FRONTEND_PROD_PORT=8088 docker compose --profile production up --build frontend-production
```

## Notes

- All development and production commands run through Docker.
- Astro uses the repository-level `assets/` directory as its public asset source.
- The archived snapshot and its assets remain untouched.
- Development dependencies are stored in the Docker volume `frontend_node_modules`.
- No `.gitignore` file was added or changed, so every source and configuration change remains visible in Git.

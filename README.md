# cv.rajtik.com

Freelance profile and CV. The apex `rajtik.com` is a separate project hub.

Astro static site, served by nginx.

## Local

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
```

## Deploy (Coolify)

Dockerfile build pack. Coolify builds the image and runs nginx on port 80.

Settings:
- **Build Pack:** Dockerfile
- **Port:** 80
- **Domains:** `https://cv.rajtik.com`
- **SSL:** Let's Encrypt (DNS is unproxied, A/AAAA point at the server)

Deploys automatically from pushes to the `main` branch via the Coolify GitHub webhook.

DNS (already set, unproxied):
- `A     cv.rajtik.com   178.104.125.70`
- `AAAA  cv.rajtik.com   2a01:4f8:1c19:2aae::1`

Editing content: texts live in `src/i18n/en.ts` (served at `/`) and
`src/i18n/cs.ts` (served at `/cs/`); markup and styles in
`src/components/Page.astro`. `/` redirects to `/cs/` when the browser prefers
Czech or Slovak; the CZ | EN switch stores the choice in localStorage.

CV: `cv-src/cv.html` (English) and `cv-src/cv-cs.html` (Czech) render to
`public/*.pdf` via `scripts/build-cv.sh`.

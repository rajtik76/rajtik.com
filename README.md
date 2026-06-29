# rajtik.com

Personal one-pager. Astro static site, served by nginx.

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
- **Domains:** `https://rajtik.com`, `https://www.rajtik.com`
- **Redirect:** www → apex (or apex → www, pick one)
- **SSL:** Let's Encrypt (DNS is unproxied, A/AAAA point at the server)

DNS (already set, unproxied):
- `A     rajtik.com      178.104.125.70`
- `AAAA  rajtik.com      2a01:4f8:1c19:2aae::1`
- `CNAME www.rajtik.com  rajtik.com`

Editing content: everything lives in `src/pages/index.astro`, in the data arrays
at the top (projects, packages, experience, skills).

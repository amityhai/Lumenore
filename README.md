# Lumenore Marketing 2025

Static marketing site for Lumenore. Plain HTML/CSS with images and a few JSON/Lottie
assets — **no build step**. Deployed to Vercel as a static site (`vercel.json`).

## Getting started

Clone and open — there's nothing to install.

```bash
git clone https://lumenore-engineering@dev.azure.com/lumenore-engineering/Lumenore-marketing-2025/_git/Lumenore-marketing-2025
cd Lumenore-marketing-2025
```

### Preview locally

Any static file server works. Simplest:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

`index.html` is the current homepage.

## Project layout

| Path | What it is |
|------|-----------|
| `index.html` | Live homepage (hero-bg-concept design) |
| `homepage.html`, `home.html`, `home1.html` | Alternate / WIP homepage variants |
| `features-capabilities.html` | Features & capabilities page |
| `lumenore-ask-me.html` | Ask-Me product page |
| `lumenore-hero-scroll.html` | Scroll-driven hero concept |
| `assets/css/` | Stylesheets (per-page under `v2o/`) |
| `assets/images/` | Images, logos, GIFs, Lottie JSON |
| `vercel.json` | Vercel static-deploy config |
| `azure-pipelines.yml` | CI that deploys to Vercel on push to `main` |

## Deployment

Pushing to `main` triggers **`azure-pipelines.yml`**, which deploys to Vercel via the
Vercel CLI. See that file's header for the one-time secret setup
(`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`).

Vercel config lives in `vercel.json` (static site, output = repo root).

## Working with the repo

```bash
git pull azure main      # get latest
# ...make changes...
git add -A && git commit -m "your message"
git push azure main
```

Please branch for larger changes and open a Pull Request in Azure DevOps rather than
pushing directly to `main`.

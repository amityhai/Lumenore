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

## Deployment — Azure Static Web Apps

The site deploys straight from **Azure DevOps** via `azure-pipelines.yml`, so the
team repo is also the deploy source — no GitHub mirror required.

- **Production** deploys on every push to `main`.
- **Pull requests** get their own temporary **preview URL** (a staging
  environment) to share with different teams for review — torn down when the PR
  closes.

### One-time setup

1. Create a **Static Web App** resource in the Azure portal; pick **Other** as
   the deployment source so Azure doesn't generate its own pipeline (this file
   replaces it).
2. Copy the app's **deployment token** (Portal → your Static Web App → *Manage
   deployment token*).
3. In Azure DevOps → **Pipelines → Library** (or the pipeline's Variables), add
   a **secret** variable `AZURE_STATIC_WEB_APPS_API_TOKEN` set to that token.
4. Create the pipeline from `azure-pipelines.yml`.
5. For PR preview URLs: add a **Build Validation** branch policy on `main` that
   runs this pipeline (Repos → Branches → `main` → Branch policies).

### Everyday workflow

```bash
git pull azure main          # get latest team changes
git checkout -b my-change    # branch for anything non-trivial
# ...make changes...
git add -A && git commit -m "your message"
git push azure my-change     # open a PR in Azure DevOps -> preview URL to share
```

Merging the PR into `main` publishes to production automatically.

> Legacy: `vercel.json` and the GitHub (`amityhai`) / `all` remotes are from the
> old Vercel-via-GitHub flow. Once Static Web Apps is live you can retire them.

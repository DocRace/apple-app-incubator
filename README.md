# App Incubator

App Incubator landing page (Vite, React, TypeScript).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
# Output in dist/
```

## GitHub Pages

Deployment is automated via [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on every push to `main`.

1. In the repository on GitHub: **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch”)
3. After the workflow succeeds, the site is available at:  
   `https://docrace.github.io/apple-app-incubator/`

## Remotes (optional)

- `origin` — primary remote you use for `git push` / `git pull`
- `github` — GitHub: `git push github main`

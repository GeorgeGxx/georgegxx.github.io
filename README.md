# Jorge Gallaga — Cloud & AI Solutions Architect Portfolio

A modern, high-performance portfolio built with **React 19**, **Tailwind CSS v4**, and **Vite**.

## Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Bundler**: Vite 6
- **Deployment**: GitHub Pages via GitHub Actions CI/CD pipeline

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## GitHub Pages Deployment

Deployment is fully automated through **GitHub Actions** (`.github/workflows/deploy.yml`).

1. In your GitHub repository settings, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push your changes to `master` (or `main`):
   ```bash
   git add .
   git commit -m "Migrate to React 19 + Tailwind CSS v4"
   git push origin master
   ```
4. The workflow will automatically install dependencies, build the site with Vite & Tailwind CSS v4, and deploy it to `https://georgegxx.github.io/`.

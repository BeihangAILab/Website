# Beihang AI Lab Website

A polished, AI-forward research lab website built with Next.js 16 and Tailwind CSS 4.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main files

- `data/site.ts` — research areas, selected work, news, lab principles
- `app/page.tsx` — homepage structure
- `app/globals.css` — visual system, layout, responsive design
- `components/NeuralField.tsx` — interactive neural-network canvas in the hero
- `components/Logo.tsx` — Beihang AI Lab brand mark
- `preview.html` — dependency-free static visual preview

## Deploy on Vercel

1. Create a GitHub repository under the `BeihangAILab` organization, e.g. `website`.
2. Push this folder to the repository.
3. In Vercel, choose **Add New → Project** and import the GitHub repository.
4. Keep the default Next.js build settings and deploy.
5. In **Project → Settings → Domains**, add your custom domain if you have one.

## Content policy used in this starter

The site does not claim unpublished/submitted work is accepted. Replace project status, paper links, member profiles, and contact information only when the public information is ready.

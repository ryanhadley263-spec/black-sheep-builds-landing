# Black Sheep Builds — Landing Page

One-page marketing site. React + Vite + Tailwind CSS v4. No backend.

## Run locally

```bash
npm install
npm run dev
```

## Before you deploy

1. **Contact info** — edit `src/site.js` (phone, email, service area). It feeds the header, contact section, and footer.
2. **Copy** — every section's text lives at the top of its component in `src/components/`.
3. **Favicon** — swap `public/favicon.svg` when you have a logo.

## Deploy to Netlify (recommended: form works with zero setup)

1. Push this folder to a GitHub repo.
2. Netlify → *Add new site* → *Import from Git* → pick the repo. `netlify.toml` already sets the build command and publish dir.
3. After the first deploy, go to *Site configuration → Forms* and enable form detection. Submissions land under *Forms → preview-request*, and you can turn on email/SMS notifications there.

## Deploy to Vercel

Vercel has no built-in form handling, so use a free form backend:

1. Create a form at [formspree.io](https://formspree.io) and copy its endpoint (`https://formspree.io/f/xxxx`).
2. Vercel → *New Project* → import the repo. Framework preset: **Vite**.
3. Under *Environment Variables*, add `VITE_FORM_ENDPOINT` = your Formspree endpoint.
4. Deploy.

The form code in `src/components/Contact.jsx` posts to `VITE_FORM_ENDPOINT` when it is set, and falls back to Netlify Forms when it isn't.

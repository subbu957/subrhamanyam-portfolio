# Subrhamanyam Bhattaram — Portfolio

A dark, premium developer portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Edit your content

Everything personal — name, bio, skills, projects, education, links — lives in one file:

```
src/data/portfolioData.js
```

Your photo is at `public/assets/profile.jpg` and your resume at `public/assets/resume.pdf` — swap either file (keep the same filename) to update them.

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are output to `dist/`.

## Deploy

### Vercel
1. Push this project to a GitHub repository.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel usually detects these automatically).
4. Click **Deploy**.

### Netlify
1. Push this project to a GitHub repository.
2. Go to app.netlify.com → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

## Notes

- Only one GitHub repository is featured under Projects — the Student SGPA/CGPA Calculator — since that's the project confirmed in your resume. Add more entries to the `projects` array in `portfolioData.js` as you publish new repos; I couldn't browse your GitHub repo list directly, so double-check the "Code" link on that card points to the exact repository URL rather than just your profile.
- There's no "Experience" section since no work history was provided — it's replaced with "Learning Journey & Development," per your instructions.
- Update the Education section's placeholder-free entries any time your degree, board results, or coursework change.

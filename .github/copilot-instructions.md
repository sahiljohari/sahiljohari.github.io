# GitHub Copilot Instructions

## Project Overview
This is a personal portfolio website built with Astro — a modern static site generator optimized for content-driven websites.

## Tech Stack
- **Framework**: Astro 5.x
- **Language**: TypeScript (strict mode)
- **Styling**: Scoped CSS in Astro components
- **Icons**: astro-icon with Iconify (Font Awesome 6)
- **Deployment**: GitHub Pages (production) + Netlify (PR previews)

## Project Structure
```
src/
├── pages/          # File-based routing (.astro files)
├── layouts/        # Page layouts (BaseLayout.astro)
├── components/     # Reusable Astro components
└── styles/         # Global styles (if needed)
public/
├── assets/
│   ├── images/     # Project thumbnails, profile photos
│   ├── svgs/       # Illustrations
│   └── resume.pdf  # Downloadable resume
└── favicon.ico
```

## Coding Conventions

### Components
- Use `.astro` files for all components (zero JS by default)
- Define component props with TypeScript interfaces
- Keep content data in component frontmatter, not external files
- Use scoped `<style>` blocks for component styling

### Astro Patterns
```astro
---
// Frontmatter: runs at build time (server-side)
interface Props {
  title: string;
}
const { title } = Astro.props;
const data = [/* content here */];
---

<!-- Template -->
<section>
  <h2>{title}</h2>
  {data.map(item => <p>{item}</p>)}
</section>

<style>
  /* Scoped to this component */
  section { padding: 2rem; }
</style>
```

### Icons
Use astro-icon with Iconify icon sets:
```astro
---
import { Icon } from 'astro-icon/components';
---
<Icon name="fa6-brands:github" />
<Icon name="fa6-solid:envelope" />
```

### Interactivity
- Prefer CSS-only solutions when possible
- For JS interactivity, use `<script>` tags (vanilla JS)
- Client-side JS only runs in the browser, not at build time

### Naming Conventions
- PascalCase for component files: `NavBar.astro`
- kebab-case for pages: `about-me.astro`
- CSS custom properties for theming: `var(--accent-color)`

## Design System
```css
:root {
  --accent-color: #6366f1;
  --accent-hover: #4f46e5;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
}
```

## When Making Changes
- Test locally with `npm run dev` before committing
- Build check with `npm run build` for type errors
- Follow the existing component patterns
- Keep components focused and single-purpose
- Static assets go in `public/assets/`

## Deployment
- **Production**: Push to `main` → GitHub Actions → GitHub Pages
- **PR Previews**: Automatic via Netlify (every PR gets a preview URL)

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
├── data/           # Centralized content data (TypeScript)
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

## Content Management

All content is centralized in `src/data/` for easy updates. Components import data from this directory.

### Data Files
| File | Purpose | Used By |
|------|---------|---------|
| `site.ts` | Site metadata, owner info, footer | BaseLayout |
| `intro.ts` | Hero section content | IntroSection |
| `about.ts` | Bio paragraphs, profile image | AboutSection |
| `skills.ts` | Technology list | AboutSection |
| `testimonials.ts` | Colleague testimonials | Testimonials |
| `timeline.ts` | Career timeline by year | WorkSection |
| `projects.ts` | Portfolio projects | PortfolioSection |
| `social.ts` | Social media links | SocialLinks |
| `navigation.ts` | Nav menu items | NavBar |
| `index.ts` | Barrel file (re-exports all) | All components |

### How to Update Content
1. Edit the relevant file in `src/data/`
2. Content uses TypeScript interfaces for type safety
3. HTML is supported in string fields (rendered with `set:html`)

### Example: Adding a new project
```typescript
// src/data/projects.ts
export const projectsContent = {
  projects: [
    {
      name: 'New Project',
      summary: 'Description here...',
      github: 'https://github.com/...',
      demo: 'https://demo-url.com',
      thumbnail: '/assets/images/project.png',
    },
    // ...existing projects
  ],
};
```

### Example: Importing data in components
```astro
---
import { socialLinks, siteConfig } from '../data';
---
{socialLinks.map(link => <a href={link.url}>{link.name}</a>)}
```

## Coding Conventions

### Components
- Use `.astro` files for all components (zero JS by default)
- Define component props with TypeScript interfaces
- Import content from `src/data/` — don't hardcode content
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

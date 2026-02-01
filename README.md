# Sahil Johari | Portfolio

My personal portfolio website built with [Astro](https://astro.build) — a modern static site generator optimized for content-driven websites.

🌐 **Live site**: [sahiljohari.github.io](https://sahiljohari.github.io)

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Scoped CSS with CSS custom properties
- **Icons**: astro-icon with Font Awesome 6
- **Deployment**: GitHub Pages (production) + Netlify (PR previews)

## Project Structure

```text
/
├── public/
│   └── assets/
│       ├── images/      # Profile photos, project thumbnails
│       ├── svgs/        # Illustrations
│       └── resume.pdf   # Downloadable resume
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   └── pages/           # File-based routing
│       ├── index.astro      # Home (Intro + About + Testimonials)
│       ├── work.astro       # Career timeline
│       └── portfolio.astro  # Projects showcase
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

- **Production**: Push to `main` → GitHub Actions → GitHub Pages
- **PR Previews**: Automatic via Netlify (every PR gets a preview URL)

## License

MIT

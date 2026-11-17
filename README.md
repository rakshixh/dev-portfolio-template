# Developer portfolio template

A single-page Next.js portfolio with an editorial visual system, three switchable color moods, responsive mobile navigation, CSS-made project artwork, and animated section reveals. Profile content is centralized so the page can be adapted without editing its layout.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Create and run a production build with `npm run build` and `npm start`.

## Run with Docker

```bash
docker compose up --build
```

Open http://localhost:3000. The multi-stage image uses Node 22 Alpine and runs Next.js in production mode as a non-root user.

## Make it yours

- Edit `data/portfolio.js` to change profile and section content in page order. Project counts and index labels update from the project list. Set each project's `badge` to customize its artwork label, `url` to link its arrow to a case study or live demo, and `colorKey` to select a cover palette.
- Edit `data/colors.js` to change the default palette, each color mood, the per-section cursor colors, and the project cover palettes. Set `defaultTheme` to any theme's `id` to choose the first-load palette. Theme variables are applied to the page and all sections from this file.
- Set `resumePdf` in `data/portfolio.js` to a same-origin PDF such as `/resume.pdf` (put it in `public/resume.pdf`) or to a URL that serves a PDF. The Resume button in the header and footer opens an in-page PDF preview; visitors can choose Download PDF from that viewer.
- Edit `styles/_variables.scss` for font stacks, type sizes, spacing, layout width, and motion easing. Color values are kept in `data/colors.js`.
- Each component's styles live beside its JSX in a matching `*.module.scss` file. Edit the relevant stylesheet to tune only that component. The original project visuals are generated with CSS, so there are no stock image licensing dependencies.
- Edit `app/icon.svg` to customize the browser tab favicon.

## Component structure

Every reusable component is directly inside `components/`, in a folder named after the component. Its JSX and SCSS module use that same name:

```text
components/
  PortfolioShell/PortfolioShell.jsx + PortfolioShell.module.scss
  SiteHeader/SiteHeader.jsx + SiteHeader.module.scss
  HeroSection/HeroSection.jsx + HeroSection.module.scss
  ProjectsSection/ProjectsSection.jsx + ProjectsSection.module.scss
  ProjectCard/ProjectCard.jsx + ProjectCard.module.scss
  AboutSection/AboutSection.jsx + AboutSection.module.scss
  ExperienceSection/ExperienceSection.jsx + ExperienceSection.module.scss
  ContactSection/ContactSection.jsx + ContactSection.module.scss
  ResumeDialog/ResumeDialog.jsx + ResumeDialog.module.scss
  SiteFooter/SiteFooter.jsx + SiteFooter.module.scss
  ThemePicker/ThemePicker.jsx + ThemePicker.module.scss
  Arrow/Arrow.jsx + Arrow.module.scss
  Wordmark/Wordmark.jsx + Wordmark.module.scss
  SectionLabel/SectionLabel.jsx + SectionLabel.module.scss
  Reveal/Reveal.jsx + Reveal.module.scss
  CustomCursor/CustomCursor.jsx + CustomCursor.module.scss
```

The profile, project details, links, employment history, and local resume PDF are sample content; replace them with accurate details before publishing. Google Fonts are loaded from Google Fonts (DM Sans, Space Grotesk, DM Mono); self-host them if your deployment needs to avoid external font requests.

## Formatting

The repository includes `.prettierrc` with two-space indentation, single quotes, semicolons, trailing commas, and a 100-character print width. Run `npm run format` to format supported project files or `npm run format:check` to check formatting.

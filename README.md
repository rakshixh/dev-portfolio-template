# Developer Portfolio Template

A responsive, single-page developer portfolio built with Next.js, React, and SCSS. Its editorial layout pairs oversized typography, animated section reveals, a custom desktop cursor, and switchable color themes. Profile content, project details, project badges, links, resume, and theme colors are configurable from the `data/` folder.

## Features

- Responsive navigation with separate desktop and mobile behavior
- Editable profile, about, experience, skills, social links, and contact details
- Project cards with per-project badges, links, tags, cover palettes, and optional images
- Configurable theme presets, default theme, section cursor colors, and project cover palettes
- Resume preview dialog with download and open-in-new-tab actions
- Smooth scroll reveals and a custom cursor for supported desktop pointers
- Component-based structure with a matching SCSS module beside each component
- Custom SVG favicon
- Docker image for production deployment

## Requirements

- Node.js 22 or newer
- npm
- Docker and Docker Compose (only if running with Docker)

## Run locally

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server binds to `0.0.0.0`, so it can also be opened from another device on the same network using your computer's local IP address.

Create and run a production build:

```bash
npm run build
npm start
```

## Run with Docker

Build the production image and start the container:

```bash
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000). The multi-stage Docker image uses Node 22 Alpine and runs the app as a non-root user. Stop the container with `Ctrl+C`; use `docker compose down` to remove it.

## Customize the portfolio

### Profile and page content

Edit [`data/portfolio.js`](data/portfolio.js) to update the content in page order. This file includes the name and wordmark, role, location, availability, email, introduction, bio, social links, skills, work-section copy, projects, and experience entries.

Each object in `portfolio.projects` supports:

- `title`, `category`, `description`, `detail`, and `tags`
- `badge` for the text shown on that project's artwork
- `url` for the project's card link; leave it empty to direct visitors to the contact section
- `colorKey` to choose one of the project cover palettes in `data/colors.js`
- `image` and `imageAlt` for an optional project preview image; leave `image` empty to use the CSS-generated artwork

Project counts and card numbers are derived from the project list. Change each project's `badge` to customize its label independently. `portfolio.workSection.projectBadge` is the fallback used when a project has no badge.

### Colors and themes

Edit [`data/colors.js`](data/colors.js) to customize the available themes, CSS color values, project cover palettes, and cursor colors for each section. Set `colorSystem.defaultTheme` to a theme's `id` to choose the initial theme. Add or remove theme entries in `colorSystem.themes` to change the options in the theme picker.

### Resume

Set `portfolio.resumePdf` in `data/portfolio.js` to either:

- A PDF stored in `public/`, such as `/resume.pdf` (add the file at `public/resume.pdf`)
- A URL that serves a PDF

The Resume buttons open an in-page preview with options to download the PDF or open it in a new tab. For external PDFs, the host must allow the portfolio to embed the file for the in-page preview to work. A same-origin PDF in `public/` is the simplest option.

### Typography, spacing, and layout

Edit [`styles/_variables.scss`](styles/_variables.scss) to change font stacks, type sizes, spacing, content width, and motion easing. Color values are kept in `data/colors.js`.

Each component's styles are in its matching `*.module.scss` file under `components/`. The project cover artwork is CSS-generated, so the default template does not rely on stock-image assets. Update [`app/icon.svg`](app/icon.svg) to change the browser tab icon.

The default typefaces (DM Sans, Space Grotesk, and DM Mono) load from Google Fonts. Self-host them if you prefer not to make runtime requests to Google Fonts.

## Project structure

Every reusable component is directly inside `components/`, in a folder named after the component. Its JSX and SCSS module use the same name:

```text
app/
  globals.scss
  layout.js
  page.js
components/
  AboutSection/
    AboutSection.jsx
    AboutSection.module.scss
  Arrow/
    Arrow.jsx
    Arrow.module.scss
  ContactSection/
    ContactSection.jsx
    ContactSection.module.scss
  CustomCursor/
    CustomCursor.jsx
    CustomCursor.module.scss
  ExperienceSection/
    ExperienceSection.jsx
    ExperienceSection.module.scss
  HeroSection/
    HeroSection.jsx
    HeroSection.module.scss
  PortfolioShell/
    PortfolioShell.jsx
    PortfolioShell.module.scss
  ProjectCard/
    ProjectCard.jsx
    ProjectCard.module.scss
  ProjectsSection/
    ProjectsSection.jsx
    ProjectsSection.module.scss
  ResumeDialog/
    ResumeDialog.jsx
    ResumeDialog.module.scss
  Reveal/
    Reveal.jsx
    Reveal.module.scss
  SectionLabel/
    SectionLabel.jsx
    SectionLabel.module.scss
  SiteFooter/
    SiteFooter.jsx
    SiteFooter.module.scss
  SiteHeader/
    SiteHeader.jsx
    SiteHeader.module.scss
  ThemePicker/
    ThemePicker.jsx
    ThemePicker.module.scss
  Wordmark/
    Wordmark.jsx
    Wordmark.module.scss
data/
  colors.js
  portfolio.js
public/
  resume.pdf
styles/
  _variables.scss
```

The profile, projects, links, experience, and resume included in the repository are sample content. Replace them with your own information before publishing.

## Formatting

Prettier is configured in `.prettierrc` with two-space indentation, single quotes, semicolons, trailing commas, and a 100-character print width.

```bash
npm run format
npm run format:check
```

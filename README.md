# Portfolio

React 19, TypeScript and Tailwind CSS v4, built with Vite.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check and production build into dist/
```

## Make it yours

All content lives in `src/data/portfolio.ts`. Edit the profile, projects, skills and
experience there; the components render whatever the data says.
Colors and fonts are design tokens in `src/index.css`.

## Structure

```
src/
  components/   Header, Hero, Projects, Skills, Experience, Contact, Footer
    ui/         Section, Tag (shared building blocks)
  data/         portfolio.ts (all content)
  types/        shared TypeScript interfaces
```

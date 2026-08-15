# Gourav Jain — Portfolio

A dark-first personal developer portfolio. React + TypeScript + Vite, Tailwind CSS v4,
Framer Motion for animation and Lucide for icons.

## Run it

```bash
npm install
npm run dev
```

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Dev server with HMR                       |
| `npm run build`   | Type-check (`tsc -b`) then production build |
| `npm run preview` | Serve the production build locally        |
| `npm run lint`    | Lint with oxlint                          |

## Editing the content

Everything on the page comes from **[`src/data/site.ts`](src/data/site.ts)** — profile,
socials, skills, projects, timeline, AI track. Change the data, the UI follows. In
particular, adding a project is one array entry:

```ts
export const moreProjects: Project[] = [
  {
    id: 'my-project',
    name: 'My Project',
    tagline: 'One line on what it is',
    description: '…',
    status: 'Live',
    tech: ['React', 'Node.js'],
    features: ['…'],
    liveUrl: null,   // null hides / disables the button — nothing is invented
    repoUrl: null,
  },
]
```

Set `flagship: true` on a project in the `projects` array to give it the
"Flagship Project" badge and the large two-column card.

## Links (URLs are opt-in)

No profile or project URL is hardcoded, so nothing on the site links somewhere fake.
Copy `.env.example` to `.env` and fill in whichever you have:

```
VITE_LINKEDIN_URL=       VITE_HASINO_LIVE_URL=
VITE_GITHUB_URL=         VITE_HASINO_REPO_URL=
VITE_X_URL=              VITE_DOCDOOR_LIVE_URL=
VITE_LEETCODE_URL=       VITE_DOCDOOR_REPO_URL=
VITE_EMAIL=              VITE_PORTFOLIO_LIVE_URL=
                         VITE_PORTFOLIO_REPO_URL=
```

Until a value is set, that social icon renders dimmed and non-interactive, and the
matching "View Project" / "Email me" button is disabled with a tooltip naming the env
var to set. Restart the dev server after editing `.env`.

## Structure

```
src/
  App.tsx              Section order + MotionConfig + skip link
  data/site.ts         All content
  hooks/               usePrefersCalm — reduced-motion / low-power detection
  components/
    Background.tsx     Grid, gradient glows, cursor light
    Navbar.tsx         Scroll state, active section, mobile sheet
    Hero.tsx  About.tsx  Skills.tsx  DSASection.tsx
    Projects.tsx  ProjectCard.tsx  AISection.tsx  Timeline.tsx
    Contact.tsx  Footer.tsx  Stats.tsx (animated counter)
    ui/                Section, Reveal, Button, SocialLinks, BrandIcons
```

## Notes

- **Motion** — `MotionConfig reducedMotion="user"` plus a CSS `prefers-reduced-motion`
  block; the background's cursor light and drifting glows are skipped entirely on
  reduced-motion and low-power devices, and the counter jumps straight to its value.
- **Accessibility** — landmarks and `aria-labelledby` on every section, a skip link,
  visible focus rings, `aria-current` on the active nav item, decorative layers marked
  `aria-hidden`, and the counter exposing its final value to screen readers.
- **Glass surfaces** — `.glass` is deliberately blur-free; `backdrop-filter` is reserved
  for the navbar and mobile sheet (`.glass-blur`). Stacking many blurred layers is
  expensive and Chrome intermittently fails to paint text inside them.

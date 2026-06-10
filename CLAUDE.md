# CLAUDE.md — Cuftica Web

Personal portfolio / landing page for **Cuftica** (Marko). Single-page site with sections: Hero, Projects, Skills, About, and Contact.

## Tech Stack

- **Framework:** React 19 + TypeScript (~5.9)
- **Build:** Vite 7 (`@vitejs/plugin-react`)
- **Styling:** Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Utilities:** clsx + tailwind-merge (via `cn()` helper in `src/lib/utils.ts`)
- **Routing:** react-router-dom 7 (installed but not currently used — single-page app)

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # TypeScript check (tsc -b) then Vite production build
npm run watch     # Vite build in watch mode
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── App.tsx                     # Root component — renders all sections inside Layout
├── main.tsx                    # React entry point (StrictMode, mounts to #root)
├── index.css                   # Tailwind directives + custom utilities (glass, neon-*, spin-slow)
├── components/
│   ├── layout/
│   │   └── Layout.tsx          # Shell: background grid, floating widgets (MusicPlayer, DiscordStatus)
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero with typing effect, glitch text, CTAs
│   │   ├── Projects.tsx        # Project cards grid (data from src/data/projects.ts)
│   │   ├── Skills.tsx          # Skills/tech showcase
│   │   ├── About.tsx           # About section
│   │   └── Contact.tsx         # Contact form / info
│   └── ui/
│       ├── CursorGlow.tsx      # Custom cursor glow effect
│       ├── DiscordStatus.tsx   # Live Discord presence via Lanyard WebSocket
│       ├── GlitchText.tsx      # Glitch text animation effect
│       ├── MusicPlayer.tsx     # Live Spotify "now playing" via Lanyard
│       ├── ProjectCard.tsx     # Individual project card component
│       └── TypingEffect.tsx    # Typewriter text animation
├── data/
│   └── projects.ts             # Project list (typed as Project[])
├── hooks/
│   └── useLanyard.ts           # WebSocket hook for Lanyard API (Discord presence + Spotify)
└── lib/
    ├── constants.ts            # DISCORD_ID, DISCORD_INVITE, GITHUB_USERNAME
    └── utils.ts                # cn() — clsx + twMerge utility
```

## Design System

### Colors (Tailwind custom tokens in `tailwind.config.js`)

| Token        | Value      | Usage                        |
|--------------|------------|------------------------------|
| `primary`    | `#00f3ff`  | Cyan accent, neon highlights |
| `secondary`  | `#bc13fe`  | Purple accent, gradients     |
| `background` | `#0a0a0a`  | Page background              |
| `surface`    | `#111111`  | Cards, elevated surfaces     |

### Fonts

- **Sans:** Inter (body text, UI)
- **Mono:** JetBrains Mono (headings, code, badges)
- Loaded via Google Fonts in `index.html`

### Custom CSS Classes (defined in `index.css`)

- `.glass` — glassmorphism effect (backdrop-blur + semi-transparent bg + border)
- `.neon-text` — cyan text-shadow glow
- `.neon-border` — cyan box-shadow glow
- `.animate-spin-slow` — 3s linear infinite rotation

## Key Integrations

### Lanyard API (Discord Presence)

- **Hook:** `src/hooks/useLanyard.ts`
- Connects via WebSocket to `wss://api.lanyard.rest/socket`
- Subscribes to Discord user ID defined in `src/lib/constants.ts`
- Provides real-time Discord status + Spotify "now playing" data
- Used by `DiscordStatus.tsx` (bottom-right, desktop only) and `MusicPlayer.tsx` (bottom-left)
- Auto-reconnects on close with 5s delay

### Contact

- Email: `marko@awaitquality.com` (linked in Hero CTA)

## Conventions

- Components use named exports (e.g. `export function Hero()`)
- App default-exports from `App.tsx`
- Tailwind classes are the primary styling method — no CSS modules
- Use `cn()` from `src/lib/utils.ts` for conditional/merged class names
- Framer Motion `motion.*` components for entrance animations
- Lucide icons imported individually (tree-shakeable)
- TypeScript strict mode enabled (`tsconfig.app.json`)
- ESLint flat config with react-hooks and react-refresh plugins

## Important Notes

- `react-router-dom` is installed but the app is currently a single-page scrolling site (no routes configured)
- The `CursorGlow` component exists but is **not** currently rendered in the Layout
- `DISCORD_INVITE` constant is empty string — not yet configured
- Project data is static (hardcoded in `src/data/projects.ts`), no CMS or API
- The `dist/` directory is gitignored — production builds are not committed

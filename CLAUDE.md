# CLAUDE.md - PAPERBEE BOOKS

## Project Overview
PAPERBEE BOOKS is a simplified, static-style children's book publishing website built with Next.js 14 and React. It features a single-page layout with a modern, colorful design.

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npm run type-check
```

## Project Structure
```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Main single-page application
│   ├── layout.tsx      # Root layout
│   └── globals.css     # CSS Styles
```

## Key Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Vanilla CSS (in globals.css)
- **Fonts**: Google Fonts (Outfit)

## Design Philosophy
- **Colors**: Vibrant yellow, teal, and dark blue palette.
- **Layout**: Single-page scrolling design with sticky navigation.
- **Aesthetics**: Playful, child-friendly, and clean.

## Common Tasks
- **Updating Content**: Edit the JSX directly in `src/app/page.tsx`.
- **Modifying Styles**: Update CSS rules in `src/app/globals.css`.
- **Changing Metadata**: specific metadata export in `src/app/layout.tsx`.
# CLAUDE.md - PAPERBEE BOOKS

## Project Overview
PAPERBEE BOOKS is a modern, multilingual children's book publishing company website built with Next.js 14, TypeScript, and Tailwind CSS. The site features internationalization support (English/Hindi), WhatsApp Business integration, and accessibility features.

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
│   ├── [locale]/       # Internationalized routes (en/hi)
│   │   ├── about/      # About page
│   │   ├── vision-mission/ # Vision & Mission page
│   │   └── what-we-publish/ # What We Publish page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── layout/        # Header, Footer
│   ├── sections/      # Hero, About, Books, Contact, etc.
│   ├── ui/           # BookCard, CTAButton, WhatsAppCTA, etc.
│   ├── about/        # About page components
│   ├── publish/      # What We Publish page components
│   ├── vision/       # Vision & Mission page components
│   ├── seo/          # SEO components
│   ├── analytics/    # Performance monitoring
│   └── a11y/         # Accessibility components
├── lib/              # Utilities (analytics, structuredData, utils)
├── messages/         # i18n translation files (en.json, hi.json)
└── types/           # TypeScript type definitions
```

## Key Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Performance**: Web Vitals monitoring

## Book Categories
- Storybooks
- Poetry
- Educational materials
- Language learning
- Art books

## Languages Supported
- English (en) - Primary
- Hindi (hi) - Secondary
- More languages planned

## WhatsApp Integration
The site uses WhatsApp Business for order processing and customer communication. WhatsApp CTAs are integrated throughout the site.

## Accessibility Features
- Skip links for keyboard navigation
- Screen reader support
- Semantic HTML structure
- Proper ARIA labels

## SEO & Performance
- Structured data for search engines
- Optimized images
- Performance monitoring
- Static site generation ready

## Development Notes
- All components follow TypeScript strict mode
- Tailwind CSS classes use consistent spacing and color schemes
- Child-friendly color palette and design
- Responsive design for all screen sizes
- Component-based architecture for reusability

## Common Tasks
- Adding new book categories: Update `BookCategories` component
- Adding new languages: Add translation files in `messages/` and update i18n config
- Modifying WhatsApp integration: Check `WhatsAppCTA` component
- SEO updates: Modify `SEOHead` component and structured data in `lib/structuredData.ts`
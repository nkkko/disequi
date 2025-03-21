# CLAUDE.md - Development Guide for DisequiV2

## Build/DevOps Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Code Style Guidelines
- **Imports**: Group imports by type (React, Next.js, third-party, local)
- **TypeScript**: Use strict types with interfaces for data structures
- **Components**: Use functional components with React hooks; client-side components must use "use client" directive
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for filenames
- **CSS**: Use Tailwind utility classes with consistent color tokens (green-400, etc.)
- **Error Handling**: Use try/catch blocks with specific error logging
- **File Structure**: Group related files in feature directories
- **Performance**: Use usePerformance hook to adjust UI based on device capabilities
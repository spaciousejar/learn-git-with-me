# Learn Git With Me - Development Guide

Always reference these instructions first and fallback to additional search or bash commands only when you encounter unexpected information that does not match the information here.

## Working Effectively

### Prerequisites and Bootstrap
- **Node.js**: Use Node.js v20.19.4 or later
- **Package Manager**: npm is the primary package manager (despite bun.lock being present, bun is not available in CI environments)

### Development Setup
- Install dependencies: `npm install` -- takes 2 minutes. NEVER CANCEL. Set timeout to 180+ seconds.
- Start development server: `npm run dev` -- takes 3-5 seconds to start
- Build application: `npm run build` -- takes 45 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- Run linting: `npm run lint` -- takes 3 seconds
- Start production server: `npm start` (requires build first)

### Validation Process
- **ALWAYS** run the full bootstrap sequence for any development work:
  1. `npm install`
  2. `npm run build` 
  3. `npm run lint`
  4. `npm run dev` for development testing
- **MANUAL VALIDATION REQUIREMENT**: After making changes, always test the application by navigating to `http://localhost:3000` and verify:
  - Homepage loads correctly
  - Navigation between docs sections works
  - MDX content renders properly
  - Sidebar navigation is functional
  - Search functionality works

## Technology Stack

### Core Framework
- **Next.js 15.4.6** with App Directory structure
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **MDX** for documentation content

### Key Dependencies
- **PWA Support**: @ducanh2912/next-pwa for service worker
- **Analytics**: @vercel/analytics and @vercel/speed-insights
- **MDX Processing**: next-mdx-remote, rehype/remark plugins
- **UI Components**: @radix-ui components, lucide-react icons

## Project Structure

### Application Directory (`/app`)
- **App Router**: Next.js App Directory with nested layouts
- **Dynamic Routes**: `docs/[[...slug]]` for documentation pages
- **Static Pages**: Blog, 404, layout configurations

### Content Management (`/contents`)
- **Documentation**: `/docs` contains MDX files organized in numbered sections
- **Blog Posts**: `/blogs` contains blog content
- **Structure**: Follows numbered hierarchy (1-getting-started, 2-git-basics, etc.)

### Component Architecture (`/components`)
- **UI Components**: Reusable Shadcn/ui based components
- **Layout Components**: Navigation, sidebars, page structures
- **Specialized**: Terminal component, search functionality

### Configuration (`/lib`)
- **Routes**: `routes-config.ts` manages documentation navigation structure
- **Utilities**: Markdown processing, GitHub API integration
- **Types**: TypeScript definitions for routing and content

## Build Process

### Development Build
- **Command**: `npm run dev`
- **Time**: 3-5 seconds startup
- **Features**: Hot reload, PWA disabled for development
- **URL**: http://localhost:3000

### Production Build  
- **Command**: `npm run build`
- **Time**: 45 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- **Output**: Static generation for 195 routes
- **Warnings**: Build may show TypeScript warnings (acceptable)
- **PWA**: Generates service worker in `/public/sw.js`

### Linting
- **Command**: `npm run lint`  
- **Time**: 3 seconds
- **Rules**: Next.js TypeScript ESLint configuration
- **Warnings**: Some unused variables warnings are acceptable

## Content Organization

### Documentation Structure
Seven main sections following Git learning progression:
1. **Getting Started**: Introduction to Git and version control
2. **Git Basics**: Installation, setup, core commands
3. **Git Branching**: Branch operations, merging, remotes  
4. **Advanced Git**: History rewriting, advanced tools, recovery
5. **GitHub**: Platform features, collaboration, integrations
6. **Workflows**: Models, best practices, team collaboration
7. **Automation**: CI/CD, hooks, useful scripts

### MDX File Organization
- **Pattern**: `/contents/docs/{section}/{subsection}/{topic}/index.mdx`
- **Navigation**: Controlled by `/lib/routes-config.ts`
- **Metadata**: Frontmatter for titles, descriptions

### Adding New Documentation
1. Create MDX file in appropriate section directory
2. Update `/lib/routes-config.ts` to include in navigation
3. Test navigation and rendering in development server
4. Verify mobile responsiveness and search functionality

## Common Development Tasks

### Testing Changes
- Always run `npm run dev` after making changes
- Navigate to affected documentation sections
- Test sidebar navigation and search
- Verify MDX rendering and code syntax highlighting
- Check mobile responsiveness

### Content Updates
- Edit MDX files in `/contents/docs/` directory
- Use proper Markdown syntax with MDX enhancements
- Include code blocks with language specification
- Test rendering in development server

### Component Development
- Follow Shadcn/ui patterns for consistency
- Use Tailwind CSS for styling
- Ensure TypeScript types are properly defined
- Test component integration in both light and dark themes

## Validation Requirements

### Pre-Commit Checks
- Run `npm run lint` to check code style
- Verify build succeeds with `npm run build`
- Test functionality in development server
- Check console for errors or warnings

### Manual Testing Scenarios
After making changes, always test these user scenarios:
1. **Homepage Navigation**: Verify main page loads and "Get Started" works
2. **Documentation Browsing**: Navigate through different sections using sidebar
3. **Search Functionality**: Test documentation search with sample queries
4. **Mobile Experience**: Check responsive design on different screen sizes
5. **Theme Switching**: Verify dark/light mode toggle works correctly

### Performance Considerations
- Build generates 195+ static pages
- First Load JS bundle should remain under 170kB
- PWA service worker handles caching in production

## Troubleshooting

### Common Issues
- **Build Errors**: YAML parsing errors in MDX frontmatter (check syntax)
- **TypeScript Warnings**: Unused variables in components (acceptable for UI components)
- **PWA Manifest**: Theme color validation warnings (acceptable)

### Environment Setup
- No environment variables required for basic development
- Service worker only active in production builds
- Analytics/Speed Insights work only with proper Vercel deployment

## Repository Navigation

### Key Files for Development
- `/package.json`: Dependencies and scripts
- `/next.config.mjs`: Next.js and PWA configuration  
- `/tailwind.config.ts`: Styling configuration
- `/tsconfig.json`: TypeScript configuration
- `/lib/routes-config.ts`: Documentation navigation structure

### Frequently Accessed Directories
- `/app`: Main application code and routing
- `/components`: Reusable UI components
- `/contents/docs`: Documentation content (MDX files)
- `/lib`: Utility functions and configurations
- `/public`: Static assets and generated service worker

**CRITICAL TIMEOUTS**: Always use these minimum timeout values:
- `npm install`: 180 seconds
- `npm run build`: 120 seconds  
- `npm run lint`: 30 seconds
- NEVER CANCEL long-running commands - builds may take up to 60 seconds
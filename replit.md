# Harness we Technology - Energy Harvesting Patent & Product Platform

## Overview

This is a marketing website for Harness we Technology, a company that licenses energy harvesting patents and sells energy-harvesting floor tiles based on three core technologies: Piezoelectricity, Thermoelectricity, and REWOD (Reverse Electrowetting-on-Dielectric). The platform serves as a digital showcase for their patent portfolio and floor tile products, providing contact interfaces for potential licensees and customers.

The application is built as a full-stack monorepo with a React frontend and Express backend, designed for deployment on Replit's infrastructure.

## User Preferences

- Preferred communication style: Simple, everyday language
- Design preference: Apple-inspired minimalist aesthetic with clean typography, generous white space, and refined color palette

## System Architecture

### Frontend Architecture

**Framework Choice: React with TypeScript**
- Single Page Application (SPA) using React 18 with functional components and hooks
- TypeScript for type safety across the codebase
- Wouter for lightweight client-side routing (chosen over React Router for minimal bundle size)
- No Server-Side Rendering - traditional client-side rendering approach

**UI Component System: shadcn/ui**
- Built on Radix UI primitives for accessibility and composability
- Tailwind CSS for styling with custom design tokens
- Component library includes: forms, dialogs, cards, navigation, tabs, toasts
- Custom theme system supporting light/dark modes via ThemeProvider context
- Apple-inspired minimalist design with clean typography and refined spacing

**State Management**
- TanStack Query (React Query) for server state management and API caching
- React Context for theme management
- React Hook Form with Zod for form validation and management
- Local component state using useState/useReducer hooks

**Design System**
- Apple-inspired minimalist color palette: Clean whites, subtle grays, refined blacks
- Typography using -apple-system fonts with tight letter-spacing (-0.02em)
- Responsive breakpoints: mobile-first approach with md/lg breakpoints
- Generous spacing system emphasizing white space and visual breathing room
- Larger border radius (12px) for modern, refined appearance
- Subtle shadows and elevation for depth without distraction

**Component Structure**
- BrandNavigation: Fixed navigation with backdrop blur (Apple-style)
- PatentHero: Large, clean hero section with bold typography
- FloorTileProducts: Product showcase for energy-harvesting floor tiles
- TechnologyShowcase: Minimalist technology feature sections
- PatentBenefits: Clean grid layout for licensing benefits
- LicensingContact: Contact form for inquiries
- BrandFooter: Minimal footer with organized links

### Backend Architecture

**Framework: Express.js**
- Lightweight REST API server
- Middleware-based request processing
- Custom logging middleware for API route monitoring
- Error handling middleware for centralized error responses

**Development Tooling**
- Vite for development server with HMR (Hot Module Replacement)
- Vite middleware mode integration with Express in development
- ESBuild for production builds (both client and server)
- TypeScript compilation with path aliases for clean imports

**Storage Layer**
- In-memory storage implementation (MemStorage class)
- Designed with storage interface (IStorage) for future database integration
- Currently configured for PostgreSQL via Drizzle ORM but using memory storage in practice
- Contact form data logged to console (no persistent storage)

**API Design**
- RESTful conventions with `/api` prefix for all backend routes
- JSON request/response format
- Contact inquiry validation using Zod schemas
- Simple, stateless architecture for marketing website

### Build and Deployment

**Development Mode**
- Vite dev server integrated as Express middleware
- Replit-specific plugins: cartographer (code navigation), dev banner, runtime error overlay
- Hot module replacement for fast development iteration
- TypeScript checking via `tsc` without emit

**Production Build**
- Client: Vite builds to `dist/public`
- Server: ESBuild bundles Express app to `dist/index.js` in ESM format
- Static file serving in production mode
- Environment-based configuration (NODE_ENV)

**Deployment Configuration**
- Designed for Replit hosting environment
- Database migration support via `drizzle-kit push` (if needed)
- PostgreSQL connection via DATABASE_URL environment variable (optional)
- Session store using connect-pg-simple (PostgreSQL session storage, optional)

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive primitive component library
  - Provides 25+ accessible, unstyled components (accordion, dialog, dropdown, etc.)
  - Handles keyboard navigation, focus management, ARIA attributes
- **Tailwind CSS**: Utility-first CSS framework
  - Custom configuration with Apple-inspired design system tokens
  - PostCSS processing pipeline
- **Lucide React**: Icon library for consistent iconography

### Form Management
- **React Hook Form**: Form state and validation management
- **Zod**: Schema validation library
  - Used via @hookform/resolvers for form validation
  - Shared schema definitions between client and server
  - Type-safe form data with TypeScript inference

### Development Tools
- **Vite**: Build tool and dev server
  - @vitejs/plugin-react for React Fast Refresh
  - Custom Replit plugins for enhanced development experience
- **TypeScript**: Static type checking
  - Path aliases for clean imports (@/, @shared/, @assets/)
  - Strict mode enabled for maximum type safety

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional className composition
- **class-variance-authority**: Type-safe component variant creation

### Third-Party Services
None currently integrated. The contact form logs to console rather than sending emails or storing data persistently.

## Product Offerings

### Energy Harvesting Floor Tiles
The company manufactures and sells four series of energy-harvesting floor tiles:

1. **Commercial Series**: High-traffic tiles for retail, airports, and transit hubs
2. **Residential Series**: Elegant tiles for homes, offices, and hotels
3. **Industrial Series**: Heavy-duty tiles for warehouses and factories
4. **Smart Building Series**: IoT-enabled tiles with real-time analytics

All products leverage the company's patented Piezoelectric technology to convert kinetic energy from footsteps into electrical power.

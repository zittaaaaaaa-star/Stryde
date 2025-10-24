# Harness we Technology - Energy Harvesting Patent Licensing Platform

## Overview

This is a marketing website for Harness we Technology, a company that licenses energy harvesting patents in three core technologies: Piezoelectricity, Thermoelectricity, and REWOD (Reverse Electrowetting-on-Dielectric). The platform serves as a digital showcase for their patent portfolio and provides a contact interface for potential licensees to inquire about technology licensing opportunities.

The application is built as a full-stack monorepo with a React frontend and Express backend, designed for deployment on Replit's infrastructure.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- Design follows "New York" variant with specific color palette for sustainability/energy tech branding

**State Management**
- TanStack Query (React Query) for server state management and API caching
- React Context for theme management
- React Hook Form with Zod for form validation and management
- Local component state using useState/useReducer hooks

**Design System**
- Custom color palette emphasizing sustainability: Deep Teal (primary), Electric Blue (secondary), Vibrant Green (accents)
- Typography using Inter and Space Grotesk fonts
- Responsive breakpoints: mobile-first approach with md/lg breakpoints
- Spacing system based on Tailwind's 4px base unit

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
- UUID-based entity identification

**API Design**
- RESTful conventions with `/api` prefix for all backend routes
- JSON request/response format
- Credential-based authentication setup (session infrastructure via connect-pg-simple)
- CRUD operations abstracted through storage interface

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
- Database migration support via `drizzle-kit push`
- PostgreSQL connection via DATABASE_URL environment variable
- Session store using connect-pg-simple (PostgreSQL session storage)

## External Dependencies

### Database
- **PostgreSQL** (via @neondatabase/serverless)
  - Configured through Drizzle ORM for schema management
  - Connection pooling for serverless environments
  - Migration support via drizzle-kit
  - Currently not actively used (in-memory storage implementation)

### UI Component Libraries
- **Radix UI**: Comprehensive primitive component library
  - Provides 25+ accessible, unstyled components (accordion, dialog, dropdown, etc.)
  - Handles keyboard navigation, focus management, ARIA attributes
- **Tailwind CSS**: Utility-first CSS framework
  - Custom configuration with design system tokens
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
- **cmdk**: Command palette component primitives
- **embla-carousel-react**: Carousel/slider functionality

### Third-Party Services
None currently integrated. The contact form logs to console rather than sending emails or storing data persistently.
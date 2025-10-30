# STRYDE - Energy Harvesting Patent Licensing Platform

## Overview

STRYDE is a marketing and lead generation website for licensing revolutionary energy harvesting technologies. The platform showcases two core patent technologies (Piezoelectricity and REWOD) and provides an interactive contact form for potential licensees to submit inquiries. The application features a modern, solarpunk-themed design that emphasizes sustainability and clean energy innovation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management
- Tailwind CSS for utility-first styling with custom design tokens

**UI Component System:**
- Shadcn/ui component library (New York variant) providing a comprehensive set of Radix UI-based components
- Custom theme system with light/dark mode support via ThemeProvider context
- Solarpunk-inspired color scheme with warm, nature-focused design tokens
- Responsive design patterns using Tailwind breakpoints

**Page Structure:**
- Single-page application with smooth scrolling sections
- Home page containing hero, products, technologies, benefits, contact sections
- Admin inquiries page for viewing submitted contact forms
- 404 not found page for unmatched routes

**State Management:**
- React Hook Form with Zod validation for form handling
- Context API for theme management
- TanStack Query for API data fetching and caching

### Backend Architecture

**Technology Stack:**
- Express.js server with TypeScript
- ESM module system throughout
- In-memory storage implementation (MemStorage class)

**API Design:**
- RESTful endpoints under `/api` prefix
- POST `/api/contact` - Submit contact inquiry with validation
- GET `/api/contact/inquiries` - Retrieve all inquiries (admin endpoint)

**Data Validation:**
- Zod schemas shared between client and server via `@shared/schema.ts`
- Runtime validation of contact form submissions
- Type-safe data structures derived from Zod schemas

**Development vs Production:**
- Vite middleware integration in development for HMR
- Static file serving in production from built assets
- Separate build processes for client (Vite) and server (esbuild)

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map and Array data structures
- IStorage interface defining CRUD operations
- MemStorage class implementing user and contact inquiry storage
- No database persistence (data lost on server restart)

**Database Preparation:**
- Drizzle ORM configured for PostgreSQL in `drizzle.config.ts`
- Schema location specified at `./shared/schema.ts`
- Migration output directory set to `./migrations`
- Environment variable `DATABASE_URL` required for database connection
- Neon serverless PostgreSQL driver included in dependencies

**Note:** The application is structured to support PostgreSQL through Drizzle ORM, but currently uses in-memory storage. Database integration can be added by implementing a PostgreSQL-backed storage class that implements the IStorage interface.

### External Dependencies

**UI Framework Dependencies:**
- @radix-ui/* - Accessible, unstyled component primitives (30+ components)
- Tailwind CSS with PostCSS for styling pipeline
- class-variance-authority and clsx for dynamic class composition
- Lucide React for consistent iconography

**Form Handling:**
- React Hook Form for performant form state management
- @hookform/resolvers for Zod schema integration
- Zod for schema validation and TypeScript type inference
- drizzle-zod for ORM schema to Zod schema conversion

**Data Fetching:**
- @tanstack/react-query for server state synchronization
- Built-in fetch API for HTTP requests

**Development Tools:**
- @replit/vite-plugin-runtime-error-modal for error overlay
- @replit/vite-plugin-cartographer for code navigation
- @replit/vite-plugin-dev-banner for development indicators

**Database (Configured but Not Active):**
- @neondatabase/serverless for PostgreSQL connectivity
- Drizzle ORM for type-safe database operations
- drizzle-kit for schema migrations

**Build Tools:**
- Vite for frontend bundling and development
- esbuild for backend bundling
- TypeScript compiler for type checking
- tsx for running TypeScript in development

**Routing:**
- wouter for lightweight client-side routing (SPA)

**Additional Utilities:**
- date-fns for date formatting and manipulation
- nanoid for generating unique identifiers
- embla-carousel-react for carousel components (if needed)
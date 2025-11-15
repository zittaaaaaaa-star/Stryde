# STRYDE Energy Harvesting Platform

## Overview

STRYDE is a full-stack web application showcasing revolutionary energy harvesting technologies, specifically Piezoelectric and REWOD (Reverse Electrowetting on Dielectric) systems. The platform serves as both a marketing website and product catalog, featuring interactive demonstrations, product listings with e-commerce integration, team management, and contact inquiry handling. The application is built with a modern React frontend and Express backend, utilizing PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Client-side routing implemented with Wouter (lightweight alternative to React Router)
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**UI Component System**
- Shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component structure follows atomic design principles with components in `/client/src/components`
- Reusable UI components in `/client/src/components/ui`

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod validation for form handling
- Custom query client with standardized error handling and request patterns
- Theme context provider for light/dark mode toggle

**Design System**
- Custom color palette centered around navy blue primary and accent colors
- HSL-based color system with CSS variables for theme consistency
- Custom fonts: Inter and Space Grotesk from Google Fonts
- Responsive breakpoints and mobile-first design approach

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- RESTful API design pattern
- Middleware stack: JSON/URL-encoded body parsing, static file serving, request logging
- Custom error handling middleware with standardized error responses

**API Endpoints**
- `/api/contact` - POST endpoint for contact form submissions
- `/api/contact/inquiries` - GET endpoint for retrieving contact inquiries (admin)
- `/api/team` - GET endpoint for team member data
- `/api/team/:id/image` - POST endpoint for uploading team member photos
- `/uploads` - Static file serving for uploaded images

**File Upload System**
- Multer middleware for multipart/form-data handling
- Image validation (JPEG, PNG, GIF only, 5MB size limit)
- Organized storage in `/uploads/team` directory
- Unique filename generation using timestamp + random suffix

**Storage Layer**
- Interface-based storage abstraction (IStorage) enabling multiple implementations
- In-memory storage (MemStorage) as default implementation
- Prepared for database migration with Drizzle ORM configuration
- Schema definitions shared between client and server via `/shared` directory

### Data Storage Solutions

**Current Implementation**
- In-memory storage using JavaScript Maps and Arrays
- Persistence layer ready for PostgreSQL integration via Drizzle ORM
- Schema defined in `/shared/schema.ts` using Zod for validation

**Database Configuration (Prepared)**
- Drizzle Kit configured for PostgreSQL dialect
- Neon serverless PostgreSQL client (@neondatabase/serverless) as dependency
- Migration directory: `/migrations`
- Database credentials from `DATABASE_URL` environment variable

**Data Models**
- User: Basic user authentication structure (id, username)
- ContactInquiry: Form submissions with name, email, company, technology interest, room size, message
- TeamMember: Team profiles with id, name, role, initials, image path

### Third-Party Integrations

**Payment/E-Commerce**
- VE International portal integration for product purchases
- External buy buttons linking to hosted checkout pages
- Two products: Hexagon Floor Tiles (LED) and Hexagon Floor Tiles (Solar)

**Development Tools**
- Replit-specific plugins for development environment
  - Runtime error overlay modal
  - Cartographer for code navigation
  - Development banner

**UI Component Dependencies**
- Radix UI suite for accessible, unstyled component primitives
- Rive animations for interactive graphics (@rive-app/react-canvas)
- CMDK for command palette functionality
- Lucide React for icon system

**Session Management (Configured)**
- connect-pg-simple for PostgreSQL-backed session storage
- Express session middleware ready for authentication implementation

### Key Architectural Decisions

**Monorepo Structure**
- Single repository with shared types between client and server
- `/client` - React frontend application
- `/server` - Express backend API
- `/shared` - Common schemas and types (Zod definitions)
- Reduces type duplication and ensures contract consistency

**Development vs Production**
- Development: Vite dev server with HMR proxied through Express
- Production: Static build served by Express from `/dist/public`
- Environment-aware configuration via `NODE_ENV`

**Type Safety**
- End-to-end TypeScript coverage
- Zod schemas as single source of truth for validation and type inference
- Shared schema definitions prevent client-server type drift

**File Organization**
- Feature-based component organization
- Page components in `/client/src/pages`
- Reusable components in `/client/src/components`
- UI primitives isolated in `/client/src/components/ui`

**Build & Deployment**
- Vite builds client to `/dist/public`
- esbuild bundles server to `/dist/index.js`
- Single production start command runs bundled server
- Static assets served from Express in production
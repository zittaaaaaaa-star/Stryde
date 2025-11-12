# STRYDE Energy Harvesting Platform

## Overview

STRYDE is a modern web application showcasing revolutionary energy harvesting technologies - Piezoelectricity and REWOD (Reverse Electrowetting on Dielectric). The platform serves as a marketing and licensing portal for cutting-edge energy harvesting patents, featuring product catalogs, technology showcases, and a contact inquiry system for potential licensees.

The application is built as a full-stack TypeScript solution with a React frontend and Express backend, designed to educate visitors about energy harvesting solutions and capture business inquiries for licensing opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (smaller alternative to React Router)

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui design system with "new-york" style preset
- Tailwind CSS for utility-first styling with custom design tokens
- Theme system supporting light/dark modes with solarpunk-inspired color palette

**State Management**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod validation for form handling
- Context API for theme management

**Design Decisions**
- Component-based architecture with clear separation between UI primitives (`/components/ui`), business components (`/components`), and pages (`/pages`)
- Custom CSS variables for theming enable easy color scheme changes
- Mobile-first responsive design approach

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- ESM module system for modern JavaScript compatibility
- Vite middleware integration in development for seamless HMR

**Request Handling**
- RESTful API design with `/api` prefix for all endpoints
- JSON request/response format
- Request logging middleware that captures method, path, status, duration, and response preview

**Data Storage**
- In-memory storage implementation (`MemStorage` class) for development
- Storage abstraction layer (`IStorage` interface) allows easy swapping to persistent database
- Designed to migrate to Drizzle ORM with PostgreSQL (configuration already present)

**API Endpoints**
- `POST /api/contact` - Submit contact inquiry with validation
- `GET /api/contact/inquiries` - Retrieve all contact inquiries (admin endpoint)

**Design Rationale**
- In-memory storage chosen for rapid prototyping and simplicity; production would use PostgreSQL via Drizzle ORM
- Storage interface pattern enables database migration without changing business logic
- Middleware-based architecture allows clean separation of concerns

### Database Design

**Current State**
- In-memory Map-based storage for users and contact inquiries
- Drizzle ORM configuration present but not actively used
- Schema defined in `shared/schema.ts` using Zod for validation

**Planned Schema**
- Contact inquiries table storing: name, email, company, technology interest, room size, message, submission timestamp
- User management system (structure present but not implemented)

**Migration Path**
- Drizzle Kit configured to generate migrations from schema
- PostgreSQL as target database (via Neon Database serverless driver)
- Schema-first approach with Zod providing both validation and type safety

### Authentication & Authorization

**Current State**
- No authentication system implemented
- Admin routes (`/admin/inquiries`) are publicly accessible

**Future Considerations**
- Session management infrastructure present (`connect-pg-simple` installed)
- User schema defined but not utilized
- Will need authentication middleware and session store when implemented

### External Dependencies

**Database & ORM**
- `@neondatabase/serverless` - Serverless PostgreSQL driver for Neon Database
- `drizzle-orm` v0.39.1 - TypeScript ORM for type-safe database queries
- `drizzle-zod` - Schema validation integration
- `connect-pg-simple` - PostgreSQL session store for express-session

**Frontend Libraries**
- `@tanstack/react-query` v5.60.5 - Server state management
- `@radix-ui/*` - Comprehensive set of accessible UI primitives
- `react-hook-form` with `@hookform/resolvers` - Form state and validation
- `zod` - Schema validation and TypeScript type inference
- `wouter` - Lightweight routing library
- `@rive-app/react-canvas` - Interactive animations (used for energy visualization)
- `date-fns` - Date manipulation utilities

**Styling & UI**
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Variant-based component styling
- `clsx` & `tailwind-merge` - Conditional className management
- Custom fonts: Inter and Space Grotesk from Google Fonts

**Development Tools**
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React fast refresh support
- `@replit/vite-plugin-*` - Replit-specific development enhancements (error overlay, cartographer, dev banner)
- `tsx` - TypeScript execution for development server
- `esbuild` - Bundler for production server build

**Build Process**
- Development: `tsx` runs TypeScript server directly with Vite middleware for frontend
- Production: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.js`
- Static files served from Vite build output in production mode
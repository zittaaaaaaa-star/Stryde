# STRYDE Energy Harvesting Platform

## Overview

STRYDE is a marketing and lead generation platform for energy harvesting patent licensing. The application showcases two revolutionary technologies—Piezoelectricity and REWOD (Reverse Electrowetting on Dielectric)—and enables potential licensees to submit inquiries about commercial, residential, and industrial applications. The platform features a modern, solarpunk-inspired design with a focus on sustainable energy solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript
- Vite as the build tool and development server
- Wouter for client-side routing
- TanStack Query (React Query) for server state management
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom solarpunk theme

**Design System:**
- Custom "New York" style variant of Shadcn/ui components
- Solarpunk-inspired color palette with warm, eco-friendly tones
- Responsive design supporting mobile and desktop viewports
- Theme provider supporting light and dark modes
- Custom CSS variables for consistent color application

**Component Structure:**
- Page components: `Home`, `AdminInquiries`, `NotFound`
- Feature components: `PatentHero`, `FloorTileProducts`, `TechnologyShowcase`, `PatentBenefits`, `LicensingContact`, `BrandNavigation`, `BrandFooter`
- Shared UI components from Shadcn/ui library
- Form handling via React Hook Form with Zod validation

**Routing Strategy:**
- Client-side routing with Wouter
- Main route (`/`) displays the marketing homepage
- Admin route (`/admin/inquiries`) for viewing submitted contact forms
- 404 fallback for undefined routes

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js
- ESM module system
- TypeScript for type safety

**API Endpoints:**
- `POST /api/contact` - Submit contact inquiry with validation
- `GET /api/contact/inquiries` - Retrieve all submitted inquiries

**Development Setup:**
- Vite middleware integration for HMR in development
- Custom request/response logging middleware
- Error handling middleware with status code normalization

**Storage Layer:**
- In-memory storage implementation (`MemStorage` class)
- Interface-based design (`IStorage`) allowing for future database migration
- Contact inquiries stored with auto-generated IDs and timestamps
- User management scaffolding present but not actively used

**Rationale:** The in-memory storage approach was chosen for rapid prototyping and simplicity. The interface-based design allows seamless migration to a database solution (likely PostgreSQL with Drizzle ORM based on configuration files) when persistence is required.

### Data Validation

**Shared Schema:**
- Zod schemas defined in `shared/schema.ts` for type safety across frontend and backend
- Contact inquiry validation ensures data quality before storage
- Type inference from Zod schemas provides TypeScript types

**Contact Form Fields:**
- Name (minimum 2 characters)
- Email (validated email format)
- Company (minimum 2 characters)
- Technology interest (enum: piezoelectricity, thermoelectricity, rewod, all)
- Room size (string field for flexible input)
- Message (minimum 10 characters)

### External Dependencies

**UI Component Libraries:**
- Radix UI primitives for accessible, unstyled components
- Shadcn/ui as the component system built on Radix
- Lucide React for consistent iconography
- Embla Carousel for product showcases
- CMDK for command palette functionality

**Form Management:**
- React Hook Form for performant form handling
- @hookform/resolvers for Zod schema integration
- Zod for runtime validation and TypeScript type inference

**Styling:**
- Tailwind CSS for utility-first styling
- PostCSS with Autoprefixer for vendor prefixing
- Custom CSS variables for theme consistency
- Class Variance Authority for component variant management

**Development Tools:**
- Vite plugins for Replit integration (error modal, cartographer, dev banner)
- TSX for TypeScript execution in development
- ESBuild for production bundling

**Database (Configured but not actively used):**
- Drizzle ORM configured for PostgreSQL
- @neondatabase/serverless for Neon database connections
- Drizzle Kit for schema migrations
- Connection via DATABASE_URL environment variable

**Rationale:** Drizzle was chosen for its TypeScript-first approach and lightweight footprint. The configuration exists to support future database migration, but the current implementation uses in-memory storage for simplicity.

**State Management:**
- TanStack Query for server state caching and synchronization
- React Context for theme management
- Local component state for UI interactions

**Fonts:**
- Google Fonts: Inter and Space Grotesk for modern, clean typography

**Potential Future Integrations:**
- Email service for inquiry notifications (not currently implemented)
- Payment processing for licensing fees (infrastructure not present)
- Authentication system for admin panel (scaffolded but not active)
- PostgreSQL database via Neon for persistent storage (configuration exists)
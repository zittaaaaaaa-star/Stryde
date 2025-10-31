# STRYDE Energy Harvesting Platform

## Overview

STRYDE is a marketing and lead generation platform for licensing revolutionary energy harvesting patents. The application showcases two core technologies - Piezoelectricity and REWOD (Reverse Electrowetting on Dielectric) - and enables potential licensees to inquire about commercial applications through a contact form system.

The platform presents energy harvesting products (floor tiles and shoe soles), explains the underlying technologies, highlights licensing benefits, and captures inquiry data for business development follow-up.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application has minimal routes:
- Home page (`/`) - main marketing site
- Admin inquiries page (`/admin/inquiries`) - internal view for submitted contact forms
- 404 page for undefined routes

**UI Component System**: Built entirely on shadcn/ui components (Radix UI primitives with Tailwind CSS styling). The design system follows the "new-york" style variant with custom theming focused on a "solarpunk energy" aesthetic - warm sunny backgrounds with green/teal accents representing nature and sustainability.

**State Management**: React Query (TanStack Query) handles server state, with queries configured for infinite stale time and disabled refetching to minimize unnecessary requests. Local component state uses React hooks.

**Styling**: Tailwind CSS with extensive customization:
- Custom color palette emphasizing emerald greens, yellows, and teals for the eco-friendly brand
- Custom spacing and border radius values
- Dark mode support via class-based theme switching
- CSS variables for dynamic theming

**Form Handling**: React Hook Form with Zod schema validation ensures type-safe form submissions with comprehensive client-side validation before API calls.

### Backend Architecture

**Server Framework**: Express.js server running on Node.js with TypeScript in ESM module mode.

**API Design**: RESTful JSON API with two primary endpoints:
- `POST /api/contact` - Submit contact inquiry (validated against Zod schema)
- `GET /api/contact/inquiries` - Retrieve all submitted inquiries (admin endpoint)

**Development vs Production**: 
- Development mode uses Vite's middleware for HMR and serves the React app through Express
- Production mode serves pre-built static assets from `dist/public`
- Server bundle uses esbuild for production compilation

**Request Logging**: Custom middleware logs all `/api/*` requests with timing information, truncating responses to 80 characters for readability.

**Error Handling**: Centralized error handler middleware catches errors and returns consistent JSON error responses with appropriate HTTP status codes.

### Data Storage Solution

**Current Implementation**: In-memory storage using a Map-based implementation (`MemStorage` class). Data persists only during server runtime and is lost on restart.

**Storage Interface**: `IStorage` interface defines CRUD operations:
- User management (getUser, getUserByUsername, createUser) - infrastructure in place but not actively used
- Contact inquiry management (saveContactInquiry, getContactInquiries)

**Schema Validation**: Contact inquiries validated with Zod schema requiring:
- Name (min 2 characters)
- Email (valid email format)
- Company (min 2 characters)
- Technology interest (enum: piezoelectricity, thermoelectricity, rewod, all)
- Room size specification
- Message (min 10 characters)

Each inquiry receives a UUID and ISO timestamp on creation.

**Database Configuration Present But Unused**: The repository includes Drizzle ORM configuration pointing to PostgreSQL via `DATABASE_URL` environment variable, but the ORM is not integrated into the application logic. The schema file defines minimal User types but no contact inquiry table. This suggests the application is prepared for database integration but currently operates with ephemeral storage.

### Authentication and Authorization

**Current State**: No authentication system implemented. The admin inquiries endpoint (`/admin/inquiries`) is publicly accessible without protection.

**User Infrastructure**: User-related types and storage methods exist (User, InsertUser types, user CRUD methods in storage) but are not utilized in any routes or components.

### External Dependencies

**UI Component Library**: Radix UI primitives provide accessible, unstyled components that are styled via Tailwind CSS through shadcn/ui configuration.

**Database (Configured)**: 
- Neon Database serverless driver (`@neondatabase/serverless`) configured but not actively used
- Drizzle ORM configured with PostgreSQL dialect, migrations directory at `./migrations`, schema at `./shared/schema.ts`

**Fonts**: Google Fonts integration for Inter and Space Grotesk font families.

**Development Tools**:
- Replit-specific Vite plugins for runtime error overlay, cartographer, and dev banner (only in Replit environment)
- TypeScript with strict mode enabled
- Path aliases for clean imports (`@/*`, `@shared/*`, `@assets/*`)

**Form Validation**: Hookform Resolvers integrates Zod schemas with React Hook Form.

**Utility Libraries**:
- `clsx` and `class-variance-authority` for conditional CSS class composition
- `date-fns` for date formatting and manipulation
- `nanoid` for generating unique identifiers

**Build Tools**:
- Vite for frontend bundling and development server
- esbuild for backend compilation to production bundle
- PostCSS with Tailwind CSS and Autoprefixer
- tsx for running TypeScript directly in development

**Session Management (Configured)**: `connect-pg-simple` for PostgreSQL session storage is included in dependencies but not implemented in the application.
# STRYDE Energy Harvesting Platform

## Overview

STRYDE is a web-based platform showcasing revolutionary energy harvesting technologies, specifically Piezoelectricity and REWOD (Reverse Electrowetting on Dielectric). The application serves as a marketing and e-commerce site for hexagonal floor tiles that convert footsteps into electrical power, along with an admin dashboard for managing contact inquiries and team member profiles.

The platform features a modern, responsive design with interactive demonstrations, product showcases, technology explanations, and licensing information. Built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with `wouter`, a lightweight alternative to React Router. Routes include Home, Products, Technologies, Interactive demonstrations, Licensing, and Admin pages for inquiries and team management.

**UI Component System**: Built on Radix UI primitives with shadcn/ui components styled using Tailwind CSS. The design system follows the "new-york" style variant with custom theming supporting both light and dark modes.

**State Management**: 
- TanStack Query (React Query) handles server state management, data fetching, and caching
- Local React state for UI interactions and component-level state
- Custom ThemeProvider context for dark/light mode theming

**Styling Approach**: Utility-first CSS with Tailwind, custom CSS variables for theming, and responsive design patterns. Design emphasizes "solarpunk energy" aesthetics with green/teal color schemes and professional corporate presentation.

**Form Handling**: React Hook Form with Zod schema validation ensures type-safe form submissions and client-side validation before API calls.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript for type safety throughout the stack.

**API Design**: RESTful endpoints following standard HTTP conventions:
- POST `/api/contact` - Submit contact inquiries
- GET `/api/contact/inquiries` - Retrieve all inquiries (admin)
- GET `/api/team` - Fetch team members
- POST `/api/team/:id/image` - Upload team member images

**File Upload Handling**: Multer middleware processes multipart/form-data for team member image uploads with file type validation (images only) and size limits (5MB max). Files are stored in the local filesystem under `uploads/team/`.

**Storage Layer**: Currently uses an in-memory storage implementation (`MemStorage`) that maintains data in JavaScript Maps and Arrays. This provides a simple, file-based development setup but data is lost on server restart. The storage interface (`IStorage`) is designed to be swapped for database implementations without changing business logic.

**Development Server**: Custom Vite integration serves the React application in development mode with HMR (Hot Module Replacement), while production builds serve static assets from the Express server.

**Request Logging**: Custom middleware logs all API requests with timing information, helping with debugging and performance monitoring.

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript native data structures (Map, Array). Default team members are hardcoded in the constructor.

**Database Configuration**: Drizzle ORM is configured with PostgreSQL dialect, indicating the application is prepared for database integration:
- Schema defined in `shared/schema.ts`
- Drizzle config points to `DATABASE_URL` environment variable
- Migration directory set up at `./migrations`
- Uses `@neondatabase/serverless` driver for serverless PostgreSQL support

**Schema Design**: 
- Contact inquiries include: name, email, company, technology interest, room size, message
- Team members include: id, name, role, initials, image path
- All data validated with Zod schemas shared between client and server

**Migration Strategy**: The application can be migrated to PostgreSQL by:
1. Implementing database-backed storage class adhering to `IStorage` interface
2. Running `npm run db:push` to sync schema with database
3. Swapping storage implementation in routes

### Authentication and Authorization

**Current State**: No authentication system implemented. Admin routes (`/admin/inquiries`, `/admin/team`) are publicly accessible.

**Consideration**: The application is designed for easy addition of authentication middleware. All admin endpoints could be protected by adding auth middleware before route handlers.

### External Dependencies

**Third-Party Services**:
- **Neon Database**: Serverless PostgreSQL provider (configured but not actively used)
- **VE International Portal**: External e-commerce platform for product purchases (links embedded in product cards)
- **Google Fonts**: Inter and Space Grotesk font families loaded from Google's CDN

**Asset Management**:
- Video assets stored in `attached_assets` directory
- Team member photos uploaded to `uploads/team` directory
- Product images and logos served from assets directory

**UI Component Libraries**:
- Radix UI: Accessible, unstyled component primitives
- shadcn/ui: Pre-styled components built on Radix
- Lucide React: Icon library
- Rive: Animation library for interactive elements

**Build and Development Tools**:
- Vite: Frontend build tool and dev server
- esbuild: Production backend bundler
- Replit-specific plugins: Error overlay, cartographer, and dev banner for Replit IDE integration

**Form and Data Libraries**:
- React Hook Form: Form state management
- Zod: Runtime type validation and schema definition
- date-fns: Date manipulation utilities

**Styling Dependencies**:
- Tailwind CSS: Utility-first CSS framework
- PostCSS with Autoprefixer: CSS processing
- class-variance-authority (CVA): Component variant styling
- clsx & tailwind-merge: Class name utilities
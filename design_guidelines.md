# Design Guidelines: Piezoelectric Power Tiles Company Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Pavegen's clean, innovation-focused design with a sustainability narrative. The design combines modern tech aesthetics with environmental consciousness, using strategic color, generous whitespace, and compelling visual storytelling.

## Color Palette

### Primary Colors
- **Deep Teal**: 180 65% 25% - Primary brand color, conveys sustainability and technology
- **Electric Blue**: 200 85% 45% - Secondary brand color, represents energy and innovation
- **Charcoal**: 220 15% 15% - Background and text foundations

### Accent Colors
- **Vibrant Green**: 150 70% 50% - Energy generation indicators, CTAs
- **White**: 0 0% 100% - Text on dark backgrounds, clean sections

### Semantic Colors
- **Success Green**: 145 65% 45% - Positive metrics, active states
- **Neutral Gray**: 220 10% 60% - Subtle text, borders

## Typography

### Font Families
- **Primary (Headings)**: 'Inter' or 'Poppins' - Clean, modern sans-serif with excellent readability
- **Secondary (Body)**: 'Inter' or 'Open Sans' - Professional, accessible for longer content
- **Accent (Stats/Numbers)**: 'Space Grotesk' or 'Outfit' - Bold, attention-grabbing for metrics

### Type Scale
- **Hero Headline**: 3.5rem (desktop) / 2.25rem (mobile), font-weight 700
- **Section Headings**: 2.5rem (desktop) / 1.75rem (mobile), font-weight 600
- **Subheadings**: 1.5rem, font-weight 500
- **Body Text**: 1.125rem, font-weight 400, line-height 1.7
- **Small Text**: 0.875rem, font-weight 400

## Layout System

### Spacing Primitives
Use Tailwind spacing units: **4, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Component padding: p-8 to p-12 (mobile), p-16 to p-24 (desktop)
- Section spacing: py-20 (mobile), py-32 (desktop)
- Element gaps: gap-4, gap-8, gap-12

### Container Widths
- Full-width sections: w-full with max-w-7xl inner container
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl

### Grid System
- Hero: Single column, centered content
- Product showcase: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Client logos: Horizontal scroll carousel
- Projects gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with masonry-like arrangement

## Component Library

### Navigation
- Fixed header with glass-morphism effect (backdrop-blur-lg, bg-opacity-90)
- Logo left-aligned, navigation links center, CTA button right
- Hamburger menu for mobile with full-screen overlay
- Smooth scroll behavior to sections

### Hero Section
- Full viewport height (min-h-screen) with gradient overlay
- Large hero image showing tiles in action (urban installation, people walking)
- Centered headline with power tagline
- Two-button CTA group: Primary "Get Started" + Secondary "Watch Demo"
- Animated subtle particles or energy ripple effects

### Product Technology Cards
- Large images of each tile variant (Kinetic, Solar+, Walk to Light equivalents)
- Card hover effect with gentle lift and glow
- Icon/badge indicating technology type
- Title, brief description, "Learn More" link
- Grid layout with equal height cards

### Stats Section
- Four-column grid (single column mobile)
- Large numbers with animated count-up effect
- Supporting text beneath each metric
- Examples: "500+ Installations", "2M kWh Generated", "40 Countries", "98% Client Satisfaction"

### Project Gallery
- Masonry grid of project images
- Hover overlay with project name and location
- Filter buttons for sectors (Smart Cities, Events, Retail, etc.)
- "View All Projects" CTA at bottom

### Client Logos Carousel
- Two rows of scrolling logos
- Greyscale logos with subtle hover color restoration
- Infinite scroll animation
- Include recognizable brands to build credibility

### Technology Explanation Section
- Split layout: Visual diagram/animation left, text description right
- Step-by-step breakdown of energy generation process
- Interactive elements showing energy flow

### Sector Selection
- Two large cards: "Smart Cities" and "Brand Activations"
- Full-width image backgrounds with overlay
- Centered text and explore button
- Hover effect with image zoom

### Contact/CTA Section
- Dark background with contrasting text
- Centered headline: "Let's power your next project"
- Two-column form (left) + info/map placeholder (right)
- Form fields: Name, Email, Company, Project Type, Message
- Large submit button with energy-themed icon

### Footer
- Three-column layout: Company info, Quick Links, Contact details
- Newsletter signup field
- Social media icons
- Trust badges or certifications
- Copyright and legal links

## Visual Elements

### Images
**Hero Section**: Large, impactful image showing piezoelectric tiles installed in high-traffic urban area (shopping mall, transit station, or stadium) with people actively walking on them. Image should convey scale, real-world application, and human interaction.

**Product Cards**: Close-up product photography showing tile surface texture, LED indicators, or technical details. Clean, well-lit studio shots.

**Project Gallery**: Real installation photos showing diversity of applications - airports, retail spaces, events, smart cities. Mix of wide-angle environmental shots and detail photos.

**Technology Section**: Diagram or illustration showing cross-section of tile with energy generation components highlighted. Can be animated or interactive.

**Background Elements**: Subtle grid patterns, circuit-board inspired textures, or dot matrices suggesting connectivity and technology.

### Animations
- Minimal, purposeful animations only
- Hero section: Gentle particle float or energy pulse effect
- Scroll-triggered fade-ins for sections
- Stat counter animations
- Logo carousel continuous scroll
- Product card hover lifts
- NO distracting or excessive animations

### Iconography
Use **Heroicons** (outline style) for:
- Navigation menu toggle
- Feature indicators (bolt for energy, users for engagement, chart for data)
- Social media links
- Arrow indicators on CTAs

## Accessibility & Dark Mode
- Implement dark theme consistently across entire site
- Form inputs with proper contrast on dark backgrounds
- Focus states visible with green accent outline
- Alt text for all images
- Semantic HTML structure
- ARIA labels for interactive elements

## Button Styles
- Primary CTA: Solid vibrant green background, white text, rounded-lg, px-8 py-4
- Secondary CTA: Outline style with blurred background when on images, glass-morphism effect
- Hover states: Subtle glow effect, slight scale increase
- Active states: Darker shade, inset shadow

## Key Design Principles
1. **Energy in Motion**: Convey dynamic energy generation through subtle animations
2. **Sustainability First**: Green color accents, environmental messaging
3. **Social Proof**: Prominent client logos and project metrics
4. **Technology Credibility**: Clean, modern aesthetic with technical diagrams
5. **Conversion Focus**: Clear CTAs throughout the journey
6. **Professional Trust**: High-quality imagery, polished interactions

This design creates a premium, trustworthy experience that positions your piezoelectric tiles as cutting-edge sustainability technology while making the complex science approachable and engaging.
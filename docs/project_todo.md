# Mindsake Website Project To-Do List

Based on the PRD, Design Document, and Tech Stack, here is the step-by-step plan to build the Mindsake website.

## Phase 1: Project Setup & Foundation
- [ ] **Initialize Project**: Create a new Next.js app using `create-next-app` with TypeScript and Tailwind CSS.
- [ ] **Clean Up**: Remove default Next.js boilerplate code and styles.
- [ ] **Configure Colors**: Add `primary`, `secondary`, and `neutral` colors to `tailwind.config.ts` matches the Design Document.
- [ ] **Setup Typography**: Configure fonts (Inter/Poppins for headings, Roboto/Open Sans for body) in `layout.tsx`.
- [ ] **Global Styles**: Apply base styles (reset, defaults) in `globals.css`.
- [ ] **Asset Setup**: Create folder structure (public/images, components, lib, etc.).

## Phase 2: Core UI Components
- [ ] **Button Component**: Create a reusable `Button` component (Primary & Secondary variants).
- [ ] **Card Component**: Create a reusable `Card` component with rounded corners and soft shadows.
- [ ] **Container**: Create a `Container` component to manage max-width and padding.
- [ ] **Navbar**: Build the sticky responsive navigation bar with links (Home, About, Services, Workshops, Contact).
- [ ] **Footer**: Build the footer with contact info, legal links, and social icons.

## Phase 3: Page Implementation
### 3.1 Home Page
- [ ] **Hero Section**: Create a reassuring hero section with "Book Session" and "Explore Workshops" CTAs.
- [ ] **Intro Section**: specific "About Mindsake" brief summary.
- [ ] **Services Highlights**: Quick links/cards for Therapy, Workshops, and Content.

### 3.2 About Pages
- [ ] **About Mindsake**: Static page describing values and philosophy.
- [ ] **About Therapist**: Profile page with photo, qualifications, and approach.

### 3.3 Services & Offerings
- [ ] **Individual Therapy**: Page detailing target groups (Adolescents, Youth, Adults) and focus areas.
- [ ] **Group Workshops**: List available workshop topics with a "Register Interest" form.
- [ ] **Psychology Content**: Simple layout to link to external social media or embed content.

### 3.4 Contact & Legal
- [ ] **Contact Page**: Contact form and location details.
- [ ] **Legal Pages**: Create text-heavy pages for Privacy Policy, Disclaimer, and Consent functionality.

## Phase 4: Functionality & Integration
- [ ] **Appointment Booking**: Integrate Calendly link/widget for Individual Therapy.
- [ ] **Forms Backend**: Set up Next.js Server Actions for handling form submissions.
- [ ] **Email Service**: Integrate Resend to send emails from Contact and Workshop forms.
- [ ] **Validation**: Add client-side validation (Zod) to all forms.

## Phase 5: Polish & Deployment
- [ ] **Accessibility Check**: meaningful alt tags, aria-labels, and contrast check.
- [ ] **Responsive Test**: Verify layout on mobile, tablet, and desktop.
- [ ] **SEO**: Add metadata (title, description) to all pages.
- [ ] **Deploy**: Deploy to Vercel and connect custom domain.

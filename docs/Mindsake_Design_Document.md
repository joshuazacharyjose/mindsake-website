# Mindsake Website — Design Document (Final)

## Vision
Design a calm, accessible, and contemporary website for **Mindsake**, a counseling psychology practice.  
The design balances **modern minimalism** with **emotional warmth and trust**, ensuring the interface feels safe, non-clinical, and supportive.

This document is the **finalized design reference**, incorporating the approved color system.

---

## Design Goals

1. Create emotional safety and comfort for first-time visitors.
2. Communicate services clearly without overwhelming users.
3. Establish a professional yet approachable brand identity.
4. Support scalability for workshops and psychology content.
5. Meet accessibility and inclusivity standards (WCAG 2.1 AA).

---

## Brand & Visual Direction

### Core Brand Attributes

| Attribute | Design Expression |
|---------|------------------|
| Safe | Soft hues, generous whitespace |
| Trustworthy | Consistent layout and hierarchy |
| Professional | Restrained typography and UI |
| Approachable | Rounded elements and subtle motion |

---

## Color System (Final)

The color palette is intentionally muted and nature-inspired to reinforce calm, stability, and emotional balance.

```css
--primary: #80B2A9;
--primary-dark: #5A8C82;
--primary-light: #A4D4C9;
--secondary: #637593;
```

### Usage Guidelines

| Color | Usage |
|-----|------|
| Primary | Primary CTAs, highlights, links |
| Primary Dark | Hover states, emphasis text |
| Primary Light | Background accents, cards |
| Secondary | Headings, secondary CTAs, icons |
| Neutral White | Main background |
| Charcoal | Primary body text |

Rules:
- Never use colors aggressively or at high saturation
- Maintain sufficient contrast for accessibility
- Avoid more than two accent colors per section

---

## Typography

### Typeface System
- **Headings:** Modern sans-serif (Inter / Poppins)
- **Body:** Highly readable sans-serif (Roboto / Open Sans)

### Type Scale (Desktop)

| Element | Size |
|------|------|
| H1 | 48px |
| H2 | 36px |
| H3 | 28px |
| Body | 18px |
| Caption | 14px |

Guidelines:
- Line height: 1.5–1.7
- Avoid condensed or decorative fonts
- Maximum two font families

---

## Layout System

### Grid
- 12-column responsive grid
- Max width: 1200px
- Consistent margins and gutters

### Spacing
- Section padding: 96px (desktop)
- Component spacing: 24–32px
- White space is intentional and therapeutic

---

## Navigation

### Header
- Sticky navigation bar
- Links:
  - Home
  - About
  - Services
  - Workshops
  - Content
  - Contact
- Primary CTA: **Book Session**

### Footer
- Contact details
- Legal links
- Social media links
- Minimal and calm presentation

---

## Page-Level Design Patterns

### Home Page
- Reassurance-driven hero section
- Clear segmentation:
  - Individual Therapy
  - Group Workshops
  - Psychology Content
- Primary CTAs:
  - Book an Individual Session
  - Explore Workshops
- Soft abstract visual accents

---

### Services Page

#### Individual Therapy
- Clear, non-clinical descriptions
- Target groups:
  - Adolescents
  - Youth
  - Adults

#### Group Workshops
- Card-based layout
- Topic tags (Anxiety, Stress, Self-Exploration, Personal Growth)
- “Register Interest” CTA

#### Psychology Content
- Social content previews
- Optional blog/article layout
- Links to external platforms

---

## UI Components

### Cards
- Rounded corners (12–16px)
- Soft shadow or border
- Title → description → CTA hierarchy

### Buttons
- Rounded rectangle
- Primary (primary color fill)
- Secondary (outline or secondary color)
- Visible hover and focus states

### Forms
- Single-column layout
- Large input fields
- Clear labels and helper text
- Consent checkbox clearly visible

---

## Iconography & Illustrations

- Abstract, human-centric illustrations
- Rounded strokes and soft edges
- Avoid technical or medical symbolism
- Icons used sparingly and consistently

---

## Motion & Interaction

- Gentle fade-in or slide-up transitions
- Subtle hover effects
- No auto-play or aggressive animations

Motion should support reassurance and clarity.

---

## Responsive Design

- Mobile-first approach
- Vertical stacking on small screens
- Minimum touch target: 48px
- Readable typography across devices

---

## Accessibility Guidelines

- WCAG 2.1 AA compliance
- Adequate color contrast
- Keyboard navigability
- Screen-reader friendly labels
- No flashing or disorienting elements

---

## Design Constraints

- Must not resemble a hospital or medical portal
- Must avoid diagnostic or clinical UI language
- Must remain content-first and low-cognitive-load
- Must reinforce trust over conversion pressure

---

## Future Design Extensions

- Workshop landing page variants
- Design tokens for CMS-driven content
- Component library (Antigravity IDE / Figma)
- Optional dark mode (carefully evaluated)

---

## Notes for Developers & Agents

- Follow color usage rules strictly
- Do not introduce visual clutter
- Respect ethical and emotional boundaries
- Default to simplicity and clarity

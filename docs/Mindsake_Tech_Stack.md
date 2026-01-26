# Mindsake Website — Recommended Tech Stack

This document defines the **essential, production-ready tech stack** for the Mindsake website, based on the approved PRD and Design Document.  
The stack prioritizes **privacy, accessibility, maintainability, and low operational overhead**, which are critical for a counseling psychology practice.

---

## 1. Architectural Overview

**Content-first, privacy-conscious architecture**

```
Static / SSR Frontend (Next.js)
        |
Serverless Functions (Forms, Email)
        |
External Services (CMS, Email, Scheduling)
```

### Key Principles
- Minimal backend and data storage
- SEO-friendly and fast-loading
- Easy content updates without developer dependency
- Suitable for agent-assisted development (Antigravity IDE)

---

## 2. Frontend Stack

### Framework
**Next.js (App Router)**  
- Static Site Generation (SSG) for speed and SEO  
- Server Components to reduce JavaScript payload  
- Excellent routing and accessibility support  
- Seamless Vercel deployment  

**Version:** Next.js 14+

---

### Language
**TypeScript**
- Prevents runtime errors
- Improves maintainability
- Safer for agent-generated code

---

### Styling
**Tailwind CSS**
- Design-system-friendly
- Enforces visual consistency
- Easy to map to Design Document tokens
- Low runtime overhead

**Supporting Utilities**
- `clsx`
- `tailwind-merge`

---

## 3. Content Management

### Headless CMS
**Sanity CMS**

**Used for:**
- Group workshop listings
- Psychology content references
- Optional blog or article content
- Editable static sections

**Why Sanity**
- Structured schemas
- Real-time preview
- Non-technical editing
- Markdown and rich-text support

---

## 4. Forms & Communication

### Form Handling
**Next.js Server Actions**
- Secure server-side processing
- No exposed API keys
- No database required

### Email Service
**Resend**
- Transactional email delivery
- Simple API
- Works natively with server actions

**Use Cases**
- Appointment request notifications
- Workshop interest submissions
- Contact form messages

---

## 5. Booking & Scheduling

### Scheduling Tool
**Calendly**

**Purpose**
- Individual therapy session scheduling
- Optional approval workflow

**Integration**
- External link or embedded iframe
- No sensitive data stored locally

---

## 6. Analytics (Privacy-First)

### Analytics Tool
**Plausible Analytics**

**Why**
- No cookies
- GDPR-friendly
- No personal data tracking
- Lightweight and transparent

**Alternatives**
- Umami Analytics

---

## 7. Hosting & Deployment

### Hosting Platform
**Vercel**
- Native Next.js support
- Automatic HTTPS
- Preview deployments
- Minimal DevOps overhead

### Domain
- Custom domain (e.g., `mindsake.in`)

---

## 8. Security & Privacy Essentials

### Required
- HTTPS everywhere
- Secure form submissions
- reCAPTCHA or hCaptcha on forms
- Minimal data retention policy

### Explicitly Avoid
- User authentication systems
- Storing therapy notes or chat logs
- Session cookies or trackers
- Medical or diagnostic tooling

---

## 9. Repository & File Structure (Recommended)

```
/app
  /page.tsx
  /services
  /workshops
  /content
  /contact
/components
/content
/lib
  cms.ts
  mail.ts
/styles
/public
```

Designed to be **clean, scalable, and agent-readable**.

---

## 10. Optional Enhancements (Future)

| Feature | Tool |
|------|------|
| Newsletter | Buttondown / ConvertKit |
| Internationalization | next-intl |
| Search | Algolia (only if content scales) |
| Dark Mode | Tailwind + CSS variables |

---

## 11. Stack Summary

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS

**Content**
- Sanity CMS
- Markdown / MDX

**Forms & Email**
- Next.js Server Actions
- Resend

**Scheduling**
- Calendly

**Analytics**
- Plausible Analytics

**Hosting**
- Vercel

---

## 12. Guiding Constraints

- Optimize for trust over conversion
- Prefer simplicity over feature richness
- Respect ethical and privacy boundaries at all times
- Avoid unnecessary complexity

---

## Notes for Developers & Agents

- Do not introduce client-side state unless necessary
- Treat all form data as sensitive
- Keep UI calm, predictable, and accessible
- Follow the Design Document strictly for spacing and typography

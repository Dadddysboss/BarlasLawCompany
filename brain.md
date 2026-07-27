# BarlasLawCompany — Complete Project Specification

## Repository
- **Name**: BarlasLawCompany
- **Architecture**: 100% hardcoded static website. NO CMS (Sanity, WordPress, etc.). Pure HTML/CSS/JS for maximum speed and zero Vercel deployment errors.

## Design System: Old-School Minimalism
- **Palette**: Strict monochromatic — Deep Black (`#0a0a0a`), Pure White (`#ffffff`), Grey shades (`#f5f5f5`, `#e0e0e0`, `#888888`, `#555555`)
- **Typography**: Serif headings (Playfair Display), Sans-serif body (Inter) — classic, premium feel
- **Layout**: Full-width (no gutters on large screens), 100% responsive
- **Interactions**: Every button/link has proper hover states (subtle opacity/underline transitions)

## Layout Rules
- Strictly full-width on large screens (no empty left/right gutters)
- 100% responsive across all devices (mobile-first approach)
- Image height must PERFECTLY MATCH adjacent text paragraph height
- 2-image overlap effect: 1st image fully visible in front, 2nd positioned slightly behind peeking out

## Global Elements

### Header
- Sticky navigation bar
- Logo text: "BarlasLawCompany"
- Nav links: Home, About Us, Expertise, Our People, Contact Us
- Minimalist design, black background or white background with border-bottom

### Footer
- Present on all pages
- Address: Lahore, Gulberg
- Phone: +92 301 4227731
- Email: musabarlas@gmail.com
- Social Media Links (icons)
- Consistent styling

## Page Architecture

### 1. Home Page (index.html)
- **Hero Section**: Minimalist header with firm name and tagline
- **Section 1**: SEO paragraph (right) + 2 overlapping images (left)
- **Section 2**: SEO paragraph (left) + 2 overlapping images (right)
- **Our Commitment**: Strong paragraph + 2 overlapping images

### 2. About Us Page (about.html)
- **What We Do**: Paragraph + 1 image (height-matched)
- **Our Mission**: Paragraph + 1 image (height-matched)
- **Gallery Section**: Clean minimalist photo gallery grid

### 3. Expertise Page (expertise.html)
- **Our Services**: Introductory content
- **Services Grid**: CSS grid with:
  - Corporate Law, Intellectual Property, Competition, Arbitration / Mediation, Tax, Family, Criminal, Civil, Securities SECP and Financial Law, Immigration, Land / Property / Revenue, Private International Law
  - Each with relevant photo + short description
- **Our Work**: Paragraph + 1 image
- **Expert in Litigation**: Paragraph + 1 image
- **Expert in Legal Advice**: Paragraph + 1 image
- **FAQ**: Minimalist accordion

### 4. Our People Page (people.html)
- **Intro**: Short team description
- **Team Profiles**: CEO Musa Barlas + 2 associates
- **Our Associate**: Description + Image
- **Legal Experts Team**: Paragraph + 2 overlapping images
- **Testimonials**: 4-5 reviews from Pakistani clients

### 5. Contact Us Page (contact.html)
- **NO CONTACT FORMS** (avoid Vercel errors)
- Typographic layout with:
  - Address: Lahore, Gulberg
  - Phone: +92 301 4227731
  - Email: musabarlas@gmail.com

## SEO & Schema
- Highly optimized, ranking-ready content
- JSON-LD Schema markup for Law Firm on every page
- Proper meta tags, Open Graph, Twitter Cards

## Image Strategy
- Use picsum.photos or unsplash for placeholder images
- All images must have proper alt text
- Image height must match adjacent text exactly
- Overlap effect via CSS absolute positioning

## Deployment
- Push to GitHub repository: BarlasLawCompany
- Deploy to Vercel (static export, no server-side functions)
- Verify zero build errors

# Project Architecture

## Project Overview

**Project Name:** GS Web Landing Page
**Type:** Static single-page website
**Purpose:** Lead generation and service showcase for AI-powered web development and digital marketing services
**Target Market:** Small to medium businesses in Gauteng and across South Africa
**Deployment:** Netlify (auto-deploy from main branch)
**Live URL:** https://growthsparkweb.netlify.app

## Project Goal

Create a high-converting landing page that:
- Showcases GS Web's services (web design, SEO, GMB optimization)
- Generates leads through contact form and WhatsApp integration
- Provides responsive, mobile-first experience
- Features modern animations and professional design
- Maintains fast load times with no build dependencies

## Tech Stack

### Frontend
- **HTML5** - Single page structure (index.html, 319 lines)
- **CSS3** - Custom styling with modern features (styles.css, 2913 lines)
  - CSS Custom Properties (variables)
  - CSS Grid and Flexbox
  - Keyframe animations
  - Media queries for responsive design
- **Vanilla JavaScript** - Interactive features (main.js, 179 lines)
  - No frameworks or libraries
  - ES6+ features (arrow functions, template literals, etc.)

### External Services
- **Font Awesome 6.1.1** (CDN) - Icon library for UI elements
- **Formspree** - Form submission handling (endpoint: https://formspree.io/f/xgvvpnnl)
- **Netlify** - Static site hosting and deployment
  - Automatic deployments from Git
  - Custom security headers
  - SSL/HTTPS enabled

### Development Tools
- **Git** - Version control
- **Netlify CLI** (optional) - Local development server

## Project Structure

```
GS/
├── .agent/                     # Documentation folder
│   ├── System/                 # System architecture docs
│   ├── SOP/                    # Standard operating procedures
│   ├── Tasks/                  # Feature implementation plans
│   └── README.md               # Documentation index
├── .claude/                    # Claude Code configuration
│   └── commands/               # Custom slash commands
├── css/
│   └── styles.css              # All styles (2913 lines)
├── images/                     # Visual assets
│   ├── GMB.JPG                 # Google My Business example
│   ├── SEO.JPG                 # SEO services example
│   ├── Landing 1.PNG           # Landing page example
│   ├── Business port.PNG       # Portfolio example
│   └── Modern E commerce site.PNG  # E-commerce example
├── js/
│   └── main.js                 # All JavaScript (179 lines)
├── index.html                  # Main page (319 lines)
├── netlify.toml                # Netlify configuration
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # SEO robots file
├── CLAUDE.md                   # AI assistant guidance
├── CONVENTIONS.md              # Development conventions
└── README.md                   # Project README
```

## Architecture Patterns

### Single-Page Static Architecture
- No server-side rendering or API calls
- All content delivered in single HTML file
- CSS and JS loaded as external files
- Images loaded from local directory
- Forms submit to external service (Formspree)

### CSS Architecture
**Design System** (styles.css lines 2-53):
- CSS Custom Properties for theming
- Dark theme by default
- HSL color space for easy color manipulation
- Consistent spacing and sizing variables

**Component Hierarchy:**
1. Base styles and resets (lines 138-161)
2. Layout components (container, sections)
3. Navigation components (header, mobile menu)
4. Hero section components
5. Content sections (icon grid, problem/solution, examples)
6. Interactive components (forms, buttons, popups)
7. Responsive overrides (media queries)

**Animation System** (lines 56-137):
- Keyframe-based animations
- Staggered delays for sequential reveals
- Hover states with transforms and transitions
- Accessibility consideration: animations respect motion preferences

### JavaScript Architecture
**Event-Driven Pattern:**
- DOMContentLoaded event initializes all features
- Event delegation for dynamic elements
- Separation of concerns:
  - UI interactions (menu toggle, popup)
  - Form handling
  - Animations (typing effect)
  - Device detection (mobile vs desktop)

**Key Modules** (main.js):
1. Icon grid interactions (lines 1-16)
2. Typing animation (lines 18-52)
3. Form submission handling (lines 54-66)
4. Mobile menu system (lines 69-109)
5. WhatsApp popup system (lines 111-162)
6. Contact options handling (lines 164-178)

## Integration Points

### Formspree Integration
**Purpose:** Handle contact form submissions without backend
**Endpoint:** https://formspree.io/f/xgvvpnnl
**Location:** index.html line 202
**Handler:** index.html lines 245-268 (inline async/await fetch)

**Flow:**
1. User fills form (name, email, message)
2. Form submit prevented, data sent via fetch API
3. Success: Show thank you popup, reset form
4. Error: Show alert to user

### WhatsApp Integration
**Purpose:** Direct communication channel with prospects
**Phone Number:** +27639071383 (WhatsApp) / 0639071383 (display)
**Locations:**
- Floating button: index.html lines 223-235
- CTA buttons: index.html line 189-190
- Popup system: main.js lines 111-162

**Mobile Detection Logic** (main.js line 135):
```javascript
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
```

**Behavior:**
- **Desktop:** Opens web.whatsapp.com in popup window (600x730)
- **Mobile:** Opens WhatsApp app via `whatsapp://send` URI scheme
- **Popup:** Offers chat or call options before connecting

### Netlify Integration
**Purpose:** Hosting, deployment, and security
**Configuration:** netlify.toml

**Features:**
- Auto-deploy on push to main branch
- Publish from root directory
- Security headers (lines 4-11):
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'
- Dev server config (port 8888)

## Key Features & Implementation

### 1. Fixed Header with Mobile Menu
**Files:** index.html (lines 21-43), main.js (lines 69-109), styles.css (lines 184-255, 2163-2255)

**Desktop Behavior:**
- Fixed header at top (70px height)
- Logo on left, navigation on right
- Smooth scroll to sections

**Mobile Behavior (<768px):**
- Header height reduces to 60px
- Navigation hidden, hamburger menu visible
- Clicking menu:
  - Toggles `.nav-menu.active` class
  - Creates backdrop overlay
  - Locks body scroll
  - Animates menu slide-in from top
- Clicking backdrop or link closes menu

### 2. Hero Section with Service Images
**Files:** index.html (lines 47-76), styles.css (lines 1959-2159)

**Layout:**
- Two-column grid (1.2fr for text, 1fr for images)
- Text column: Headline, description, two CTA buttons
- Image column: 2x2 grid of service images with hover captions
- Background: Subtle pattern overlay with semi-transparent backdrop

**Responsive:**
- Desktop: Side-by-side layout
- Tablet (<1024px): Single column, centered
- Mobile (<768px): Stacked, reduced font sizes

### 3. Icon Grid Section
**Files:** index.html (lines 80-127), styles.css (lines 744-864)

**Features:**
- Four services (Web Design, SEO, GMB Management, Analytics)
- Auto-fit grid (minimum 250px per item)
- Animated icon circles with float effect
- Staggered fade-in animations (0.1s increments)
- CTA section below with primary/secondary buttons

### 4. Problem/Solution Section
**Files:** index.html (lines 130-153), styles.css (lines 866-953)

**Layout:**
- Two-column grid (auto-fit, minimum 300px)
- Left: Problem (customer pain points)
- Right: Solution (GS Web offerings)
- Slide-in animations from opposite sides
- Hover effects with top border reveal

### 5. Example Work Gallery
**Files:** index.html (lines 157-195), styles.css (lines 986-1063)

**Features:**
- Three example cards in grid
- Images with hover zoom effect
- Icon overlays for each category
- Scale-in animations with staggered delays
- CTA section with WhatsApp integration

### 6. Contact Form
**Files:** index.html (lines 198-210), styles.css (lines 1342-1380)

**Fields:**
- Name (text, required)
- Email (email, required)
- Message (textarea, required)
- Hidden subject field for Formspree

**Features:**
- Async submission to Formspree
- Thank you popup on success (index.html lines 291-297)
- Form reset after submission
- Error handling with alert

### 7. WhatsApp Floating Button & Popup
**Files:** index.html (lines 223-235, 274-315), main.js (lines 111-162), styles.css (lines 1065-1163, 1270-1303)

**Floating Button:**
- Fixed position (bottom: 30px, right: 30px)
- Pulse animation (continuous)
- WhatsApp green background (#25d366)
- Hover tooltip caption
- Reduced size on mobile

**Popup System:**
- Opens on button click
- Two options: Chat or Call
- Chat: Opens WhatsApp with pre-filled message
- Call: Triggers phone dialer (tel: link)
- Close button or click outside to dismiss

### 8. Footer
**Files:** index.html (lines 215-220), styles.css (lines 726-731)

**Content:**
- Copyright with dynamic year (JavaScript update)
- Contact information (phone, email)
- Simple centered layout

## Responsive Design Strategy

### Breakpoints
- **Mobile:** ≤768px
- **Tablet:** 769px - 992px
- **Desktop:** 993px - 1024px
- **Large Desktop:** >1024px

### Mobile-First Approach
Base styles target mobile devices, with progressive enhancement for larger screens via `@media` queries.

### Key Responsive Changes at 768px

**Header:**
- Height: 70px → 60px
- Navigation: Horizontal menu → Hamburger menu
- Logo size reduction

**Hero Section:**
- Two-column → Single column
- Text centered instead of left-aligned
- CTA buttons stack vertically
- Font sizes reduced (3.2rem → 2.5rem for h1)

**Grid Layouts:**
- Multi-column grids → Single column
- Icon grid: 4 columns → 2 columns → 1 column
- Example grid: 3 columns → 2 columns → 1 column

**WhatsApp Button:**
- Size: 60px → 50px
- Position adjustment for mobile comfort

**Typography:**
- Heading sizes reduced by ~20-30%
- Line heights adjusted for readability
- Input font-size: 16px (prevents iOS zoom)

## Performance Considerations

### Current Implementation
- **No build process:** Direct file serving
- **No minification:** Files served as-is
- **CDN usage:** Font Awesome loaded from CDN
- **Image optimization:** Manual (relies on developer)
- **Critical CSS:** All CSS loaded upfront (blocking)

### Load Sequence
1. HTML parsed
2. CSS loaded and parsed (render-blocking)
3. JavaScript loaded and executed (after DOMContentLoaded)
4. Font Awesome loaded from CDN (async)
5. Images loaded progressively

### Optimization Opportunities
- Minify CSS/JS for production
- Optimize and compress images (consider WebP)
- Lazy load below-fold images
- Inline critical CSS
- Add service worker for offline support

## Security Implementation

### Content Security Policy
Configured in netlify.toml (line 11):
- `default-src 'self'`: Only load resources from same origin
- `style-src 'self' 'unsafe-inline'`: Allow inline styles
- `script-src 'self' 'unsafe-inline'`: Allow inline scripts

**Note:** `'unsafe-inline'` needed for:
- Inline form handler script
- Inline copyright year script
- Could be moved to main.js for stricter CSP

### Other Security Headers
- **X-Frame-Options: DENY** - Prevents clickjacking
- **X-XSS-Protection: 1; mode=block** - Browser XSS filter
- **X-Content-Type-Options: nosniff** - Prevents MIME sniffing
- **Referrer-Policy: strict-origin-when-cross-origin** - Controlled referrer sharing

### Form Security
- Formspree handles spam protection
- No client-side validation bypass (server validates)
- HTTPS enforced by Netlify
- No sensitive data collected

## Contact Information Management

**Critical:** Contact details appear in multiple locations. When updating, check ALL references:

### Phone Number
**Display Format:** 0639071383
**International Format:** +27639071383

**Locations:**
- index.html line 218 (footer)
- main.js line 134 (WhatsApp chat phoneNumber variable)
- main.js line 151 (tel: link for call button)

### Email Address
**Format:** admin@gsweb.co.za

**Locations:**
- index.html line 218 (footer mailto link)
- main.js line 173 (contact options mailto)

### WhatsApp
**Locations:**
- index.html lines 189-190 (CTA button href)
- index.html lines 224-235 (floating button onclick handler)
- main.js lines 131-147 (popup WhatsApp chat handler)
- Message templates embedded in JavaScript

## Browser Support

**Target Browsers:**
- Chrome/Edge (Chromium) - Latest 2 versions
- Firefox - Latest 2 versions
- Safari - Latest 2 versions
- Mobile Safari (iOS) - Latest 2 versions
- Chrome Mobile (Android) - Latest 2 versions

**Required Features:**
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- ES6+ JavaScript (arrow functions, async/await, template literals)
- Fetch API
- CSS animations and transforms

**Not Supported:**
- Internet Explorer (any version)
- Legacy browsers without CSS Grid support

## Related Documentation

- [Standard Operating Procedures](../SOP/development_workflow.md) - Common development tasks
- [CONVENTIONS.md](../../CONVENTIONS.md) - Coding conventions and rules
- [CLAUDE.md](../../CLAUDE.md) - AI assistant quick reference

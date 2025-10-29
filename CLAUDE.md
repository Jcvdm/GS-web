# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for GS Web, an AI-powered web development and digital marketing services company serving businesses in Gauteng and across South Africa. Single-page site with no build process, deployed to Netlify.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript (no frameworks or dependencies)
- Font Awesome 6.1.1 (CDN)
- Formspree for form handling
- Netlify for hosting (auto-deploys from main branch)

## Development

### Local Development
```bash
# Open index.html directly in browser - no build process needed
# Changes are visible immediately on refresh

# Optional: Use Netlify CLI for local testing
netlify dev  # Runs on port 8888 (configured in netlify.toml)
```

### Deployment
- Automatic: Push to `main` branch triggers Netlify deployment
- Publish directory: `/` (root)
- Site URL: https://growthsparkweb.netlify.app

## Architecture

Simple three-file structure:
- `index.html` - All content and structure (319 lines)
- `css/styles.css` - All styling, animations, responsive design (2913 lines)
- `js/main.js` - Interactive features (179 lines)

### Key Implementation Details

**Contact Information** (update these when contact details change):
- Phone: `0639071383` / `+27639071383`
  - index.html line 218
  - main.js lines 134, 151
- Email: `admin@gsweb.co.za`
  - index.html line 218
  - main.js line 173
- WhatsApp: Multiple references in index.html lines 189-190, 224-235 and main.js lines 131-147

**Mobile Menu** (index.html lines 27-43, main.js lines 69-109, styles.css lines 2163-2255):
- Fixed header collapses to hamburger menu on mobile
- Slide-in navigation with backdrop overlay
- Mobile breakpoint: 768px
- Menu toggles `.nav-menu.active` class and creates/removes backdrop element

**WhatsApp Integration** (main.js lines 111-162):
- Floating button with popup (index.html lines 223-290, 299-315)
- Detects mobile vs desktop: mobile opens WhatsApp app, desktop opens web.whatsapp.com
- Mobile detection: `/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)`

**Contact Form** (index.html lines 202-209):
- Formspree endpoint: `https://formspree.io/f/xgvvpnnl`
- Form handler: index.html lines 241-272 (inline script)
- Shows thank you popup on successful submission

**Hero Section** (index.html lines 47-76, styles.css lines 1959-2159):
- GMB/SEO focused with service images
- Two-column responsive grid (collapses to single column on mobile)
- Image cards with hover captions

**Animations** (styles.css lines 56-137):
- Keyframes: fadeInUp, fadeIn, slideInLeft, slideInRight, scaleIn, float, pulse, shimmer
- Applied with staggered delays for sequential effects
- Example items have `animation-delay` increments (0.1s, 0.2s, 0.3s)

### CSS Design System

**Variables** (styles.css lines 2-53):
- Dark theme using HSL color space
- Key variables: `--background`, `--foreground`, `--primary`, `--card`, `--border`, `--radius`
- Usage pattern: `hsl(var(--primary))` or `hsl(var(--primary) / 0.2)` for opacity

**Component Patterns**:
- Cards: Hover effect with `transform: translateY(-5px)` and shadow
- Buttons: Border-only default, filled on hover
- Responsive grids: `repeat(auto-fit, minmax(250px, 1fr))`

**Breakpoints**:
- Mobile: 768px and below (header 60px, single column layouts)
- Tablet: 992px
- Desktop: 1024px and above (header 70px)

### Security Headers

Configured in netlify.toml (lines 4-11):
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy restricts scripts/styles to self + unsafe-inline

## Development Conventions (from CONVENTIONS.md)

Critical rules when making changes:

1. **Verify information** - Don't make assumptions or speculate
2. **File-by-file changes** - Make changes one file at a time
3. **No apologies** - Never use apologies in code or responses
4. **Preserve existing code** - Don't remove unrelated functionality
5. **Single chunk edits** - Provide all edits for a file in one chunk
6. **Explicit variable names** - Descriptive names over short ones
7. **Security-first** - Always consider security implications
8. **Edge cases** - Consider and handle edge cases

## Common Tasks

### Updating Contact Information
Check all locations listed above under "Contact Information"

### Adding/Modifying Animations
1. Define keyframe in styles.css (around line 56-137)
2. Apply to element: `animation: fadeInUp 0.6s ease-out;`
3. Use `animation-fill-mode: both` to maintain start/end states
4. Stagger with `animation-delay` for sequential effects

### Changing Theme Colors
Update CSS variables in styles.css lines 2-30. All components reference these variables.

### Testing Responsive Design
Critical breakpoint is 768px where:
- Header changes from 70px to 60px height
- Navigation becomes mobile menu
- Multi-column grids collapse to single column
- Hero text centers and CTA buttons stack

### WhatsApp Integration Testing
- Desktop: Opens web.whatsapp.com in popup window
- Mobile: Opens WhatsApp app via `whatsapp://send` URI
- Popup shows chat/call options before connecting

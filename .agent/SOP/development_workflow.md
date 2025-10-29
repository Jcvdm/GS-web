# Development Workflow

Standard operating procedures for common development tasks on the GS Web landing page.

## Local Development Setup

### Initial Setup
```bash
# Clone repository
git clone <repository-url>
cd GS

# Open in browser
# Simply open index.html in your preferred browser
# No dependencies to install
```

### Development Server (Optional)
```bash
# Install Netlify CLI (one-time setup)
npm install -g netlify-cli

# Run local dev server
netlify dev  # Runs on http://localhost:8888
```

**When to use dev server:**
- Testing Netlify headers locally
- Testing form submissions
- Simulating production environment

**When NOT needed:**
- Simple HTML/CSS/JS changes
- Layout adjustments
- Animation tweaks
- Opening index.html directly is faster

## Making Changes

### 1. Updating Contact Information

**Phone Number Change:**
1. Update footer: `index.html` line 218
2. Update WhatsApp chat: `main.js` line 134
3. Update call button: `main.js` line 151
4. Search for old number across all files to ensure no missed references

**Email Address Change:**
1. Update footer: `index.html` line 218
2. Update contact options: `main.js` line 173
3. Search codebase for old email

**WhatsApp Links:**
1. CTA buttons: `index.html` lines 189-190
2. Floating button: `index.html` lines 224-235 (onclick handler)
3. Popup chat handler: `main.js` lines 131-147

### 2. Adding a New Section

**Step-by-step:**
1. **Add HTML structure** in `index.html`
   - Place in appropriate location within `<main>` (after line 211)
   - Use semantic HTML (`<section>`)
   - Add unique ID if it will be linked from navigation

2. **Style the section** in `css/styles.css`
   - Add styles at end of file or in logical grouping
   - Follow existing patterns (see Component Patterns below)
   - Add responsive styles in appropriate `@media` query

3. **Add interactivity** (if needed) in `js/main.js`
   - Add event listeners within `DOMContentLoaded` handler
   - Follow existing patterns (event delegation, separate functions)

4. **Test responsive behavior**
   - Test at 768px (mobile breakpoint)
   - Test at 992px and 1024px
   - Verify on actual mobile device if possible

### 3. Modifying Animations

**Adding new animation:**
1. Define keyframe in `styles.css` (around lines 56-137):
```css
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

2. Apply to element:
```css
.my-element {
  animation: myAnimation 0.6s ease-out;
  animation-fill-mode: both; /* Maintains start/end states */
}
```

3. For sequential animations, use `animation-delay`:
```css
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
```

**Modifying existing animation:**
- Find keyframe definition (lines 56-137)
- Adjust timing, easing, or keyframe steps
- Test across all elements using that animation

### 4. Changing Theme Colors

**CSS Variables** are defined in `styles.css` lines 2-30.

**To change primary color:**
1. Update `--primary` variable (line 11)
2. Format: HSL values without `hsl()` wrapper
   - Example: `0 0% 98%` (white)
   - Example: `220 70% 50%` (blue)
3. All components automatically update

**To adjust opacity:**
- Use `hsl(var(--primary) / 0.2)` syntax
- Change 0.2 to desired opacity (0-1)

**Common color adjustments:**
- Background darkness: `--background` (line 5)
- Text color: `--foreground` (line 6)
- Card background: `--card` (line 7)
- Border color: `--border` (line 21)

### 5. Updating Images

**Adding new image:**
1. Optimize image before adding:
   - Compress using online tool or ImageOptim
   - Target size: <200KB for photos, <50KB for graphics
   - Consider WebP format for better compression

2. Place in `/images/` directory

3. Reference in HTML:
```html
<img src="images/filename.jpg" alt="Descriptive alt text">
```

4. Add descriptive alt text for accessibility and SEO

**Replacing existing image:**
1. Keep same filename to avoid breaking references
2. Or update all references to new filename
3. Check multiple locations (hero, examples, etc.)

### 6. Form Configuration

**Current setup:**
- Service: Formspree
- Endpoint: `https://formspree.io/f/xgvvpnnl`
- Location: `index.html` line 202

**To change recipient email:**
1. Log into Formspree account
2. Update form settings
3. No code changes needed (Formspree handles routing)

**To modify form fields:**
1. Update HTML in `index.html` lines 202-209
2. Ensure `name` attributes are descriptive
3. Add/remove fields as needed
4. Form handler automatically includes all fields

**To change thank you message:**
- Edit popup content: `index.html` lines 291-297

## Component Patterns

### Card with Hover Effect
```css
.card {
  background: hsl(var(--card));
  border-radius: var(--radius);
  border: 1px solid hsl(var(--border));
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -15px hsl(var(--primary) / 0.2);
}
```

### Button Style
```css
.cta-button {
  border: 2px solid hsl(var(--primary));
  background: transparent;
  color: hsl(var(--primary));
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  transform: translateY(-2px);
}
```

### Responsive Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

## Testing Checklist

### Before Committing
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if available)
- [ ] Test mobile menu functionality
- [ ] Test WhatsApp button (desktop and mobile)
- [ ] Test contact form submission
- [ ] Verify responsive design at 768px breakpoint
- [ ] Check for console errors
- [ ] Verify all links work
- [ ] Check animations play smoothly
- [ ] Validate HTML (optional): https://validator.w3.org/

### Responsive Testing Breakpoints
- 375px (iPhone SE)
- 768px (iPad portrait)
- 992px (iPad landscape)
- 1024px (small desktop)
- 1440px (standard desktop)

### Cross-Browser Testing
**Required:**
- Chrome (latest)
- Mobile Chrome (Android device or emulator)
- Safari iOS (iPhone or simulator)

**Nice to have:**
- Firefox
- Edge
- Samsung Internet

## Git Workflow

### Standard Workflow
```bash
# Check current status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update contact phone number across all files"

# Push to trigger deployment
git push origin main
```

### Commit Message Format
Use clear, descriptive messages:
- ✅ "Update WhatsApp integration to handle mobile app links"
- ✅ "Add new services section with animated cards"
- ✅ "Fix mobile menu backdrop z-index issue"
- ❌ "Update"
- ❌ "Fix bug"
- ❌ "Changes"

### Deployment
- **Automatic:** Push to `main` branch triggers Netlify deployment
- **Typical deploy time:** 30-60 seconds
- **Check deploy status:** Netlify dashboard or check live site
- **Rollback:** Netlify dashboard > Deploys > specific deploy > "Publish deploy"

## Troubleshooting

### Mobile Menu Not Working
**Symptoms:** Clicking hamburger menu does nothing

**Check:**
1. Verify `.mobile-menu-btn` click handler exists (main.js lines 75-98)
2. Check if `.nav-menu.active` class toggles in DevTools
3. Ensure backdrop element is created (check in Elements panel)
4. Verify CSS for `.nav-menu.open` or `.nav-menu.active` (styles.css lines 2199-2239)

**Common causes:**
- JavaScript error earlier in file preventing execution
- CSS class name mismatch (`.open` vs `.active`)
- Z-index issues with backdrop

### Form Not Submitting
**Symptoms:** Form doesn't submit or shows error

**Check:**
1. Formspree endpoint is correct (index.html line 202)
2. Browser console for errors
3. Network tab shows POST request to formspree.io
4. Form has correct `name` attributes on inputs
5. Email field is valid email format

**Common causes:**
- Formspree endpoint expired or changed
- Network/CORS issues
- Form validation failing

### WhatsApp Not Opening
**Symptoms:** WhatsApp button doesn't open chat/app

**Check:**
1. Phone number format is correct (+27639071383 for wa.me)
2. Mobile detection working (main.js line 135)
3. Check console for errors
4. Verify popup opens (popup might be blocked)

**Common causes:**
- Phone number format wrong (needs + for international)
- Popup blocked by browser
- WhatsApp app not installed on mobile
- URI scheme not registered on device

### Animations Not Playing
**Symptoms:** Elements appear instantly without animation

**Check:**
1. Keyframe defined in styles.css (lines 56-137)
2. Animation property on element includes name, duration, easing
3. Check `animation-fill-mode: both` is set
4. Verify element has appropriate trigger (page load, hover, etc.)

**Common causes:**
- Typo in animation name
- Animation duration set to 0s
- Element has `display: none` or `visibility: hidden`
- Conflicting CSS overriding animation

### Responsive Design Issues
**Symptoms:** Layout breaks at certain screen sizes

**Check:**
1. Media query breakpoint (768px, 992px, 1024px)
2. Grid `minmax()` values allow proper wrapping
3. Fixed widths vs flexible widths
4. Overflow hidden/visible
5. Font sizes scale appropriately

**Common causes:**
- Fixed pixel widths on containers
- Missing responsive overrides
- Z-index stacking issues
- Overflow not handled

## Performance Optimization

### Image Optimization
**Current state:** Manual optimization
**Recommended tools:**
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Various formats including WebP
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimization

**Target sizes:**
- Hero images: <200KB
- Example images: <150KB
- Icons/graphics: <50KB

### Code Optimization (Future)
Not currently implemented, but recommended:
- Minify CSS: reduces styles.css from ~80KB to ~50KB
- Minify JavaScript: reduces main.js size by ~30%
- Inline critical CSS: improves First Contentful Paint
- Lazy load below-fold images: faster initial load

## Security Best Practices

### When Adding External Scripts
1. Always use HTTPS URLs
2. Consider Subresource Integrity (SRI) hashes
3. Update Content Security Policy in netlify.toml
4. Test thoroughly before deploying

### Contact Form Security
- Never add client-side only validation (can be bypassed)
- Don't collect sensitive data (passwords, SSN, etc.)
- Formspree handles spam protection
- Keep Formspree endpoint private (don't share publicly)

### Sensitive Information
**Never commit:**
- API keys
- Passwords
- Private endpoints
- Customer data
- Analytics tracking IDs (if containing sensitive info)

## Deployment Checklist

### Pre-Deploy
- [ ] All contact information updated
- [ ] Images optimized
- [ ] Tested on mobile and desktop
- [ ] No console errors
- [ ] Forms working
- [ ] WhatsApp integration working
- [ ] All links valid
- [ ] Git commit with clear message

### Post-Deploy
- [ ] Visit live site to verify changes
- [ ] Test contact form on production
- [ ] Test WhatsApp integration on mobile device
- [ ] Check Netlify deploy logs for errors
- [ ] Verify SSL certificate valid
- [ ] Test on multiple devices/browsers

## Related Documentation

- [Project Architecture](../System/project_architecture.md) - Full technical documentation
- [CONVENTIONS.md](../../CONVENTIONS.md) - Coding standards
- [CLAUDE.md](../../CLAUDE.md) - Quick reference for AI assistance

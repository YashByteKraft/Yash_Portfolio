# Portfolio Website Content & Configuration Guide

## Visual Content by Section

### Hero Section
- Greeting: "Hi, I'm Yash 👋"
- Main Heading: "Building delightful products that users love"
- Subtitle: "Associate Product Manager with experience in health-tech and IoT products"
- CTA Button: "Let's Connect"

### About Section (Grid Layout)
1. **User-Centric Approach**
   - Title: "I prioritize user empathy and data-driven decisions"
   - Description: "Every product decision starts with understanding user needs"
   - Visual: Large grid cell with background pattern

2. **Agile Expertise**
   - Title: "Agile delivery expert with 53% faster timelines"
   - Description: "Structured processes that actually work"
   - Visual: Standard grid cell

3. **Product Management Tools**
   - Title: "PM toolkit"
   - Description: "To deliver products successfully"
   - Visual: Standard grid cell with hover effect

4. **Industry Experience**
   - Title: "Health-tech & IoT product experience"
   - Description: "Real-world product management in action"
   - Visual: Standard grid cell with dual images

5. **Current Venture**
   - Title: "Currently building my product studio"
   - Description: "10+ client websites delivered with 95% satisfaction"
   - Visual: Grid cell with BuildU logo

6. **Call to Action**
   - Title: "Ready to build your next product?"
   - Description: "Let's discuss how I can help your business grow"
   - Visual: Interactive grid cell with hover animation

### Projects Section
#### Section Header
- Title: "A small selection of recent projects"
- Subtitle: Showcasing key achievements and implementations

#### Project Cards
1. **Healthcare Physiotherapy App**
   - Title Card: "Healthcare Physiotherapy App"
   - Description: "Led product management for health-tech app with IoT integration. Conducted 20+ user interviews, defined MVP, and delivered 50+ features using Agile/Scrum methodology."
   - Tech Stack: React, Tailwind, TypeScript, Three.js, Framer Motion
   - Link Text: "Visit Project"
   - Image: Avicare App interface showcase

2. **BuildU - Product Studio**
   - Title Card: "BuildU - Product Studio"
   - Description: "Founded and managed product studio delivering 10+ client websites with 95% satisfaction. Increased lead-gen metrics by 20% through UX improvements and user-first design."
   - Tech Stack: Next.js, Tailwind, TypeScript, Stream, Custom Tools
   - Link Text: "Visit Project"
   - Image: BuildU brand showcase

3. **Zerodha Case Study**
   - Title Card: "Zerodha's Gen-z engagement challenge"
   - Description: "73% of young investors want to start but don't know where to begin. So I analyzed Zerodha's user journey and designed a gamified solution that could transform how 18-25 year-olds learn investing"
   - Tech Stack: React, Tailwind, TypeScript, Three.js, Custom Tools
   - Link Text: "View Case Study"
   - Image: Zerodha analysis visualization

4. **Process Optimization**
   - Title Card: "Agile Delivery & Process Optimization"
   - Description: "Achieved 53% reduction in product delivery timelines using structured processes. Managed cross-functional projects and coordinated stakeholder demos that led to mid-project investment."
   - Tech Stack: Next.js, Tailwind, TypeScript, Three.js, GSAP
   - Link Text: "Learn More"
   - Image: Software delivery diagram

### Experience Section
#### Timeline Display
- Section Title: "Experience Journey"
- Visual Element: Interactive timeline with animated transitions

#### Key Experiences
1. **Current Role**
   - Title: "Associate Product Manager"
   - Company: "Avicare Technologies"
   - Duration: "2023 - Present"
   - Key Achievement: "Led health-tech product development with IoT integration"

2. **Product Studio**
   - Title: "Founder"
   - Company: "BuildU"
   - Achievement: "10+ successful client projects"

### Contact Section
- Section Title: "Let's Connect"
- Email Display: "yash_parihar@outlook.com"
- GitHub Link Text: "View GitHub Profile"
- Location: "Based in India"

### Footer
- Copyright Text: "© 2024 Yash Parihar"
- Social Links Section
  - GitHub Icon and Link
- Navigation Links (Same as header)
  - About
  - Projects
  - Experience
  - Contact

### Interactive Elements
1. **Grid Cards Hover Effect**
   - Scale: 0.8 on hover
   - Rotation: 40deg on X axis
   - Shadow: Subtle elevation
   - Transition: Smooth 0.3s

2. **Project Cards**
   - 3D Tilt Effect on hover
   - Floating animation
   - Background gradient shift
   - Tech stack icons with tooltips

3. **Navigation**
   - Floating nav bar with transparency
   - Smooth scroll behavior
   - Active section highlight

### Background Elements
1. **Hero Section**
   - Animated gradient background
   - Particle effect overlay
   - Responsive scaling

2. **Grid Background**
   - SVG pattern overlay
   - Subtle animation
   - Dark theme compatible

3. **Projects Section**
   - Card background texture
   - Image overlay effects
   - Transition animations

### Typography Hierarchy
1. **Main Headings**
   - Font: Inter Bold
   - Size: 4xl (36px)
   - Color: White
   - With purple accent spans

2. **Section Titles**
   - Font: Inter SemiBold
   - Size: 2xl (24px)
   - With gradient underline

3. **Body Text**
   - Font: Inter Regular
   - Size: Base (16px)
   - Color: Light gray

4. **Accent Text**
   - Color: Purple (#8B5CF6)
   - Used for highlights and CTAs

### Responsive Adaptations
1. **Mobile View**
   - Single column layout
   - Condensed grid
   - Simplified animations
   - Touch-optimized interactions

2. **Tablet View**
   - Two column grid
   - Maintained card effects
   - Adjusted spacing

3. **Desktop View**
   - Full grid layout
   - Enhanced animations
   - Maximum content width: 1280px

## Brand Configuration
```json
{
  "brandInfo": {
    "name": "Yash Parihar",
    "title": "Associate Product Manager",
    "email": "yash_parihar@outlook.com",
    "github": "https://github.com/YashByteKraft",
    "tagline": "Building delightful products that users love",
    "description": "Associate Product Manager with experience in health-tech and IoT products",
    "location": "India",
    "logo": "/UPM-logo.jpg"
  },
  "siteMetadata": {
    "title": "Yash Parihar - Associate Product Manager Portfolio",
    "description": "Modern & Minimalist Next.js Portfolio showcasing product management expertise",
    "keywords": [
      "product manager",
      "portfolio",
      "health-tech",
      "IoT",
      "agile",
      "product development"
    ],
    "author": "Yash Sanjay Parihar",
    "themeColor": "#000319",
    "colorScheme": "dark"
  }
}

## Grid Items (About Section)

1. **Feature 1**
   - Title: "I prioritize user empathy and data-driven decisions"
   - Description: "Every product decision starts with understanding user needs"
   - Image: `/b1.svg`

2. **Feature 2**
   - Title: "Agile delivery expert with 53% faster timelines"
   - Description: "Structured processes that actually work"

3. **Feature 3**
   - Title: "PM toolkit"
   - Description: "To deliver products successfully"

4. **Feature 4**
   - Title: "Health-tech & IoT product experience"
   - Description: "Real-world product management in action"
   - Images:
     - Primary: `/grid.svg`
     - Secondary: `/b4.svg`

5. **Feature 5**
   - Title: "Currently building my product studio"
   - Description: "10+ client websites delivered with 95% satisfaction"
   - Images:
     - Primary: `/Build U.png`
     - Secondary: `/grid.svg`

6. **Feature 6**
   - Title: "Ready to build your next product?"
   - Description: "Let's discuss how I can help your business grow"

## Recent Projects

1. **Healthcare Physiotherapy App**
   - Description: "Led product management for health-tech app with IoT integration. Conducted 20+ user interviews, defined MVP, and delivered 50+ features using Agile/Scrum methodology."
   - Image: `/Avicare App-left.png`
   - Link: [Avicare Tech](https://avicaretech.com/)
   - Tech Stack Icons: 
     - `/re.svg`
     - `/tail.svg`
     - `/ts.svg`
     - `/three.svg`
     - `/fm.svg`

2. **BuildU - Product Studio**
   - Description: "Founded and managed product studio delivering 10+ client websites with 95% satisfaction. Increased lead-gen metrics by 20% through UX improvements and user-first design."
   - Image: `/Build U.png`
   - Link: [BuildU](https://buildu.co.in/)
   - Tech Stack Icons:
     - `/next.svg`
     - `/tail.svg`
     - `/ts.svg`
     - `/stream.svg`
     - `/c.svg`

3. **Zerodha's Gen-z engagement challenge**
   - Description: "73% of young investors want to start but don't know where to begin. So I analyzed Zerodha's user journey and designed a gamified solution that could transform how 18-25 year-olds learn investing"
   - Image: `/Zerodha.png`
   - Link: [Case Study](https://zerodha-case-study-hax6ruo.gamma.site/)
   - Tech Stack Icons:
     - `/re.svg`
     - `/tail.svg`
     - `/ts.svg`
     - `/three.svg`
     - `/c.svg`

4. **Agile Delivery & Process Optimization**
   - Description: "Achieved 53% reduction in product delivery timelines using structured processes. Managed cross-functional projects and coordinated stakeholder demos that led to mid-project investment."
   - Image: `/The-anatomy-of-perfect-software-delivery.jpg`
   - Tech Stack Icons:
     - `/next.svg`
     - `/tail.svg`
     - `/ts.svg`
     - `/three.svg`
     - `/gsap.svg`

## Icons and Assets Used

### Tech Stack Icons
- Next.js: `/next.svg`
- React: `/re.svg`
- Tailwind CSS: `/tail.svg`
- TypeScript: `/ts.svg`
- Three.js: `/three.svg`
- Framer Motion: `/fm.svg`
- Stream: `/stream.svg`
- Custom: `/c.svg`
- GSAP: `/gsap.svg`

### Background and UI Elements
- Background Pattern: `/bg.png`
- Grid Pattern: `/grid.svg`
- Footer Grid: `/footer-grid.svg`
- Profile Image: `/UPM-logo.jpg`

## Additional Images
- B1 SVG: `/b1.svg`
- B4 SVG: `/b4.svg`
- B5 SVG: `/b5.svg`
- P1-P4 SVGs: `/p1.svg`, `/p2.svg`, `/p3.svg`, `/p4.svg`
- Background: `/bg.png`
- Arrow: `/arrow.svg`

## Configuration

### Theme Configuration
- Theme Color: "#000319"
- Color Scheme: "dark"
- Default Theme: "dark"
- Forced Theme: "dark"

### Font
- Font Family: Inter
- Subsets: ["latin"]

## Note for Future Updates
1. Testimonials section is currently empty but prepared for future content
2. Companies/clients section is commented out but structure is in place for future updates

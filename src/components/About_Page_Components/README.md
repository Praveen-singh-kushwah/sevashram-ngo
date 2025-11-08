# About Page Components

This folder contains all components specific to the About Us page of the Sevashram NGO website.

## Components

### 1. AboutHeroSection

**Location**: `AboutHeroSection.jsx`

**Purpose**: 
The Hero section introduces visitors to the essence of Sevashram, creating an emotional connection through imagery and messaging.

**Features**:
- ✅ Full-width hero banner (65-70vh on desktop, 55vh on mobile)
- ✅ High-resolution background image with deep blue overlay
- ✅ Animated text content with fade-in effects
- ✅ Breadcrumb navigation (Home > About Us)
- ✅ Animated amber divider line
- ✅ "Learn More" CTA button with hover effects
- ✅ Slow zoom animation on background image
- ✅ Fully responsive design
- ✅ Accessibility support (reduced motion preferences)

**Design Specifications**:

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Height | 70vh | 65vh | 55vh |
| Title Font Size | 42px | 32px | 26px |
| Subtitle Font Size | 18px | 16px | 14px |
| Max Content Width | 1200px | 1200px | 1200px |

**Color Palette**:
- Overlay: `rgba(30, 58, 138, 0.55)` (Deep Blue)
- Title Text: `#FFFFFF` (White)
- Subtitle Text: `#F8FAFC` (Light Gray)
- Divider: `#F9A826` (Amber)
- CTA Background: `#FFFFFF` (White)
- CTA Text: `#1E3A8A` (Deep Blue)
- CTA Hover: `#F9A826` (Amber)

**Typography**:
- Title: Poppins, 700 weight
- Subtitle: Open Sans, 400 weight
- CTA Button: Poppins, 600 weight

**Animations**:
- Background: 8s zoom loop (scale 1.05 → 1)
- Text: Fade-in from bottom (0.8s)
- Breadcrumb: Slide-in from left (0.6s)
- Divider: Scale-in horizontally (0.6s)
- CTA: Fade-in + hover scale effect

**Required Assets**:
- Background Image: `/public/images/about/hero/about-hero-bg.jpg`
  - Minimum resolution: 1920x1080px
  - Format: JPG or PNG
  - Content: Children at Sevashram or founders with children
  - See `/public/images/about/hero/README.md` for detailed image guidelines

**Dependencies**:
- `framer-motion` - For animations
- `react-lazy-load-image-component` - For optimized image loading

**Usage**:
```jsx
import AboutHeroSection from "../components/About_Page_Components/AboutHeroSection";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      {/* Other sections */}
    </>
  );
};
```

**Accessibility**:
- ARIA labels for navigation
- Proper heading hierarchy
- Color contrast ratio: 4.5:1 minimum
- Respects `prefers-reduced-motion` media query
- Keyboard navigation support

**Responsive Breakpoints**:
- Mobile: ≤767px
- Tablet: 768px - 1023px
- Desktop: ≥1024px

---

## 2. OurStorySection

**Location**: `OurStorySection.jsx`

**Purpose**: 
Narrate Sevashram's origin and journey in a way that builds emotional trust and transparency with visitors. This section bridges the Hero section's grand emotion with the structured clarity of subsequent sections.

**Features**:
- ✅ Two-column split layout (image left, text right on desktop)
- ✅ High-quality founder/children image with amber border
- ✅ Animated text content with staggered entrance
- ✅ Animated amber divider line
- ✅ Highlighted quote block with subtle background
- ✅ "Continue to our mission" scroll cue
- ✅ Decorative vertical line (visual thread)
- ✅ Fully responsive (stacks on mobile)
- ✅ Accessibility support (reduced motion preferences)

**Design Specifications**:

| Element | Desktop | Mobile |
|---------|---------|--------|
| Layout | Two-column (1fr 1fr) | Single-column (stacked) |
| Image Height | 450px | 250px |
| Section Padding | 80px vertical | 40px vertical |
| Column Gap | 50px | 12px |
| Title Font Size | 32px | 28px |

**Color Palette**:
- Background: `linear-gradient(180deg, #FFFFFF 70%, #FFF7ED 100%)`
- Heading: `#1E3A8A` (Deep Blue)
- Body Text: `#1F2937` (Dark Gray)
- Secondary Text: `#4B5563` (Muted Gray)
- Divider: `#F9A826` (Amber)
- Quote Background: `#FFF7ED` (Light Amber Tint)
- Image Border: `#F9A826` (Amber, 2px)

**Typography**:
- Section Title: Poppins, 600 weight, 28-32px
- Body Text: Open Sans, 400 weight, 16-18px
- Quote: Poppins Italic, 500 weight, 18px

**Animations**:
- Image: Slide-in from left (0.8s)
- Text: Slide-in from right (0.8s, 0.3s delay)
- Divider: Width expansion (0.7s)
- Quote: Fade-up with scale (0.9s)
- Elements staggered with 0.15s delay

**Required Assets**:
- Founder Image: `/public/images/about/story/founder-story.jpg`
  - Minimum resolution: 800x600px
  - Format: JPG or PNG
  - Content: Founders with children or early Sevashram photos
  - See `/public/images/about/story/README.md` for detailed guidelines

**Content Structure**:
1. Section Title: "Our Story"
2. Animated amber divider
3. Intro paragraph (2011 founding story)
4. Main body paragraph (growth from tin shed to 95 children)
5. Highlighted quote block
6. Continue cue with animated arrow

**Dependencies**:
- `framer-motion` - For animations
- `react-lazy-load-image-component` - For optimized image loading

**Usage**:
```jsx
import OurStorySection from "../components/About_Page_Components/OurStorySection";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      {/* Other sections */}
    </>
  );
};
```

**Accessibility**:
- Semantic HTML structure
- Proper heading hierarchy (h2)
- Descriptive alt text for images
- Color contrast ratio: 4.5:1 minimum
- Respects `prefers-reduced-motion` media query
- Keyboard navigation support

**Responsive Breakpoints**:
- Mobile: ≤767px (single column, image on top)
- Tablet: 768px - 1023px (columns stack)
- Desktop: ≥1024px (two-column layout)

**Emotional Design Intent**:
- Human and heartfelt narrative
- Sense of humility and purpose
- Visual soul of Sevashram's identity
- Bridge between Hero and Mission sections

---

## 3. VisionMissionSection

**Location**: `VisionMissionSection.jsx`

**Purpose**: 
Communicate Sevashram's guiding direction and moral core through clear, structured presentation of Mission, Vision, and Values. This section bridges emotional storytelling with structured trust and credibility.

**Features**:
- ✅ 3-column card layout (responsive grid)
- ✅ Icon-based visual hierarchy (Lucide React icons)
- ✅ Hover effects with elevation and amber accent
- ✅ Staggered fade-up animations
- ✅ Centered content with consistent spacing
- ✅ Optional subtle background pattern
- ✅ Vision card with soft amber glow
- ✅ Values card with animated divider
- ✅ Fully responsive (3 → 2 → 1 columns)
- ✅ Accessibility support (reduced motion preferences)

**Design Specifications**:

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Layout | 3 columns | 2 columns | 1 column |
| Card Height | Min 300px | Min 300px | Auto |
| Card Padding | 40px 30px | 40px 30px | 40px 30px |
| Section Padding | 80px vertical | 50px vertical | 50px vertical |
| Card Spacing | 32px | 32px | 32px |

**Color Palette**:
- Background: `#F8FAFC` (Light Blue-Grey)
- Card Background: `#FFFFFF` (White)
- Heading: `#1E3A8A` (Deep Blue)
- Body Text: `#1F2937` (Dark Gray)
- Intro Text: `#4B5563` (Muted Gray)
- Accent/Divider: `#F9A826` (Amber)
- Icon Default: `#F9A826` (Amber)
- Icon Hover: `#1E3A8A` (Deep Blue)
- Card Border Top: `#F9A826` (4px solid)

**Typography**:
- Section Title: Poppins, 600 weight, 28-32px
- Card Title: Poppins, 600 weight, 22px
- Card Text: Open Sans, 400 weight, 16-18px
- Intro Paragraph: Open Sans, 400 weight, 18px

**Card Details**:

1. **Mission Card**
   - Icon: Heart (Lucide React)
   - Title: "Our Mission"
   - Content: Care, education, and safe home for children
   - Border: 4px amber top border

2. **Vision Card**
   - Icon: Eye (Lucide React)
   - Title: "Our Vision"
   - Content: Society where every child can achieve dreams
   - Special: Soft amber glow effect
   - Border: 4px amber top border

3. **Values Card**
   - Icon: Users (Lucide React)
   - Title: "Our Values"
   - Content: Compassion, Integrity, Equality, Empowerment
   - Special: Animated amber divider under title
   - Border: 4px amber top border

**Animations**:
- Section: Fade-up (0.8s)
- Title: Fade-up (0.8s)
- Divider: Width expansion (0.7s)
- Cards: Staggered fade-up (0.6s each, 0.2s delay)
- Icons: Scale-in (0.5s, from 0.8 to 1)
- Hover: Scale 1.03 + elevation + shadow (0.2s)

**Hover Effects**:
- Card lifts up 6px
- Scale increases to 1.03
- Shadow intensifies
- Icon color changes from amber to blue
- Smooth 0.2s transition

**Dependencies**:
- `framer-motion` - For animations
- `lucide-react` - For icons (Heart, Eye, Users)

**Usage**:
```jsx
import VisionMissionSection from "../components/About_Page_Components/VisionMissionSection";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <VisionMissionSection />
      {/* Other sections */}
    </>
  );
};
```

**Accessibility**:
- Semantic HTML structure
- Proper heading hierarchy (h2, h3)
- Color contrast ratio: 4.5:1 minimum
- Respects `prefers-reduced-motion` media query
- Keyboard navigation support
- Focus states for interactive cards

**Responsive Breakpoints**:
- Mobile: ≤767px (1 column, stacked)
- Tablet: 768px - 1023px (2 columns)
- Desktop: ≥1024px (3 columns)

**Emotional Design Intent**:
- Clear and purposeful
- Calm, confident, and grounded
- Structured integrity
- Visual communication of core principles
- Bridge between emotion and structure

---

## 4. OurTeamSection

**Location**: `OurTeamSection.jsx`

**Purpose**: 
Introduce the people behind Sevashram — founders, caregivers, teachers, and volunteers. This section builds authenticity and transparency, showing visitors that real, dedicated people are responsible for the organization's impact.

**Features**:
- ✅ Responsive grid layout (3→2→1 columns)
- ✅ Team member cards with circular portraits
- ✅ Amber border on photos (2px)
- ✅ Hover effects (card lift + image zoom)
- ✅ Amber top border on hover
- ✅ Staggered fade-up animations
- ✅ Name, role, and personal quote for each member
- ✅ Subtle background pattern
- ✅ Fully responsive
- ✅ Accessibility support

**Design Specifications**:

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Layout | 3 columns | 2 columns | 1 column |
| Image Size | 150x150px | 150px | 120px |
| Card Padding | 30px | 30px | 30px |
| Grid Gap | 32px | 32px | 32px |
| Section Padding | 80px vertical | 60px | 40px |

**Color Palette**:
- Background: `#FFFFFF` (Clean white)
- Section Heading: `#1E3A8A` (Deep Blue)
- Subtitle: `#4B5563` (Neutral Gray)
- Member Name: `#1E3A8A` (Deep Blue)
- Role: `#4B5563` (Neutral Gray)
- Quote: `#1F2937` (Dark Gray, Italic)
- Divider: `#F9A826` (Amber)
- Image Border: `#F9A826` (Amber, 2px)
- Hover Border Top: `#F9A826` (Amber, 4px)
- Card Shadow: `rgba(0, 0, 0, 0.08)`

**Typography**:
- Section Title: Poppins, 600 weight, 28-32px
- Subtitle: Open Sans, 400 weight, 16-18px
- Member Name: Poppins, 600 weight, 18px
- Role: Open Sans, 500 weight, 15px
- Quote: Open Sans Italic, 400 weight, 14px

**Animations**:
- Section Header: Fade-in upward (0.8s)
- Divider: Width expansion (0.7s)
- Cards: Staggered fade-up (0.6s, 0.2s delay per card)
- Card Hover: Lift up 6px + shadow deepens
- Image Hover: Scale 1.05
- Border Top: Slides in from center (0.4s)

**Team Members Data Structure**:
```javascript
{
  id: 1,
  name: "Member Name",
  role: "Role Title",
  quote: "Personal quote or motto",
  image: "/images/about/team/member1.jpg"
}
```

**Default Team Members**:
1. Shri Suresh Rajhans - Founder & Director
2. Mayuri Rajhans - Co-Founder & Managing Director
3. Rohit Deshmukh - Operations Head
4. Priya Sharma - Education Coordinator
5. Amit Patil - Child Welfare Officer
6. Sneha Kulkarni - Healthcare Coordinator

**Required Assets**:
- Team Images: `/public/images/about/team/member[1-6].jpg`
  - Minimum resolution: 300x300px (square)
  - Format: JPG or PNG
  - Style: Professional headshots or candid portraits
  - See `/public/images/about/team/README.md` for detailed guidelines

**Card Structure**:
1. Circular photo with amber border
2. Member name (bold, deep blue)
3. Role/designation (medium weight, gray)
4. Personal quote (italic, dark gray)

**Hover Effects**:
- Card lifts up 6px
- Shadow deepens (0 8px 24px)
- Amber border (4px) appears on top
- Image scales to 1.05
- All transitions smooth (0.3-0.4s)

**Special Features**:

1. **Circular Photos**
   - 2px amber border
   - Soft shadow
   - Hover zoom effect
   - Lazy loading with blur

2. **Card Hover State**
   - Lift animation (translateY -6px)
   - Enhanced shadow
   - Amber top border reveal
   - Smooth transitions

3. **Staggered Animation**
   - Cards appear sequentially
   - 0.2s delay between each
   - Smooth fade-up entrance

4. **Background Pattern**
   - Subtle SVG pattern
   - 3% opacity
   - Amber color
   - Adds visual texture

**Dependencies**:
- `framer-motion` - For animations
- `react-lazy-load-image-component` - For optimized image loading

**Usage**:
```jsx
import OurTeamSection from "../components/About_Page_Components/OurTeamSection";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <VisionMissionSection />
      <FounderMessageSection />
      <OurTeamSection />
      {/* Other sections */}
    </>
  );
};
```

**Accessibility**:
- Semantic HTML structure
- Proper heading hierarchy (h2, h3)
- Descriptive alt text for all images
- Color contrast ratio: 4.5:1 minimum
- Respects `prefers-reduced-motion` media query
- Keyboard navigation support
- Focus states for interactive elements

**Responsive Breakpoints**:
- Mobile: ≤767px (1 column, 120px images, centered)
- Tablet: 768px - 1023px (2 columns, 150px images)
- Desktop: ≥1024px (3 columns, 150px images)

**Customization**:
To add more team members, update the `teamMembers` array in the component:
```jsx
const teamMembers = [
  // ... existing members
  {
    id: 7,
    name: "New Member",
    role: "Role Title",
    quote: "Personal quote",
    image: "/images/about/team/member7.jpg",
  },
];
```

**Emotional Design Intent**:
- Friendly and trustworthy
- Community-driven
- Professional yet approachable
- Human connection
- "These are the people who nurture dreams, teach, heal, and guide"

---

## 5. TimelineSection

**Location**: `TimelineSection.jsx`

**Purpose**: 
Visually present Sevashram's evolution from a humble initiative in 2011 to a thriving home nurturing 95+ children today. This section reflects growth, continuity, and dedication through an interactive vertical timeline.

**Features**:
- ✅ Vertical timeline with central line
- ✅ Zigzag layout (alternating left-right on desktop)
- ✅ Circular timeline nodes (year markers)
- ✅ Milestone cards with year, title, and description
- ✅ Animated timeline line drawing effect
- ✅ Staggered node and card animations
- ✅ Hover effects on cards (lift + shadow)
- ✅ Closing statement with CTA button
- ✅ Fully responsive (linear on mobile)
- ✅ Accessibility support

**Design Specifications**:

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Layout | Zigzag (alternating) | Left-aligned | Linear (left) |
| Timeline Line | Center (4px) | Center | Left margin (20px) |
| Card Width | 45% container | 100% | 100% |
| Vertical Spacing | 80px between nodes | 60px | 50px |
| Section Padding | 80px vertical | 60px | 40px |

**Color Palette**:
- Background: `#F8FAFC` (Light gray-blue)
- Timeline Line: `#1E3A8A` (Deep Blue, 4px)
- Timeline Nodes: `#F9A826` (Amber circles)
- Node Border: `#FFFFFF` (White, 4px)
- Card Background: `#FFFFFF` (White)
- Card Left Border: `#F9A826` (Amber, 4px)
- Year Text: `#F9A826` (Amber)
- Title Text: `#1E3A8A` (Deep Blue)
- Description: `#1F2937` (Dark Gray)
- Card Shadow: `rgba(0, 0, 0, 0.08)`

**Typography**:
- Section Title: Poppins, 600 weight, 28-32px
- Subtitle: Open Sans, 400 weight, 16-18px
- Year Label: Poppins, 600 weight, 20px
- Card Title: Poppins, 600 weight, 18px
- Description: Open Sans, 400 weight, 15-16px
- CTA Text: Poppins, 600 weight, 16px

**Animations**:
- Timeline Line: Drawing effect (height 0 → 100%, 1.5s)
- Nodes: Fade-in + scale (0.8 → 1, staggered 0.2s delay)
- Cards: Slide from left/right (staggered 0.2s delay, 0.6s duration)
- Text: Fade-up reveal (0.2s delay after card)
- Card Hover: Lift up 5px + shadow deepens
- CTA Button: Scale 1.05 on hover

**Timeline Milestones**:
1. **2011** - Sevashram Founded
2. **2013** - First 10 Children Enrolled
3. **2017** - New Permanent Shelter Home
4. **2020** - 60 Children in Full Care
5. **2025** - 95+ Children Supported

**Milestone Data Structure**:
```javascript
{
  id: 1,
  year: "2011",
  title: "Sevashram Founded",
  description: "Detailed description of the milestone...",
  side: "left" // or "right" for alternating layout
}
```

**Card Structure**:
1. Year (amber, bold, 20px)
2. Title (deep blue, bold, 18px)
3. Description (dark gray, 16px)
4. Left amber border accent (4px)

**Special Features**:

1. **Animated Timeline Line**
   - Draws from top to bottom on scroll
   - 4px width, deep blue color
   - Rounded ends
   - Smooth 1.5s animation

2. **Timeline Nodes**
   - 24px circular markers
   - Amber background
   - White border (4px)
   - Amber glow shadow
   - Fade-in with scale effect

3. **Zigzag Layout (Desktop)**
   - Cards alternate left and right
   - Text alignment matches side
   - Creates visual flow down the page

4. **Staggered Animations**
   - Line draws first
   - Nodes appear sequentially
   - Cards slide in from respective sides
   - Text fades up last

5. **CTA Section**
   - Closing motivational statement
   - "Get Involved" button
   - Amber background, white text
   - Hover scale and shadow effects

**Dependencies**:
- `framer-motion` - For animations and scroll detection
- `useInView` hook - For viewport-based animations

**Usage**:
```jsx
import TimelineSection from "../components/About_Page_Components/TimelineSection";

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <VisionMissionSection />
      <FounderMessageSection />
      <OurTeamSection />
      <TimelineSection />
    </>
  );
};
```

**Accessibility**:
- Semantic HTML structure
- Proper heading hierarchy (h2, h3, h4)
- Color contrast ratio: 4.5:1 minimum
- Respects `prefers-reduced-motion` media query
- Keyboard navigation support
- Focus states for CTA button
- Descriptive content structure

**Responsive Breakpoints**:
- Mobile: ≤767px (linear timeline, left-aligned, 20px line offset)
- Tablet: 768px - 1023px (left-aligned cards, centered line)
- Desktop: ≥1024px (zigzag layout, alternating cards)

**Customization**:
To add more milestones, update the `milestones` array:
```javascript
const milestones = [
  // ... existing milestones
  {
    id: 6,
    year: "2026",
    title: "New Milestone",
    description: "Description of achievement...",
    side: "right",
  },
];
```

**Visual Flow**:
```
Section Header
    ↓
Timeline Line Draws
    ↓
Node 1 (2011) → Card slides in from left
    ↓
Node 2 (2013) → Card slides in from right
    ↓
Node 3 (2017) → Card slides in from left
    ↓
Node 4 (2020) → Card slides in from right
    ↓
Node 5 (2025) → Card slides in from left
    ↓
Closing Statement + CTA
```

**Emotional Design Intent**:
- Inspirational and evolving
- Hopeful and proud
- Growth through compassion
- Continuity and dedication
- "We started small. We grew with love. And we're still growing — together."

---

## Folder Structure

```
About_Page_Components/
├── AboutHeroSection.jsx ✅
├── OurStorySection.jsx ✅
├── VisionMissionSection.jsx ✅
├── FounderMessageSection.jsx ✅
├── OurTeamSection.jsx ✅
├── TimelineSection.jsx ✅
└── README.md (this file)
```

---

## Design Philosophy

The About page components follow these principles:

1. **Emotional Connection**: Warm, compassionate, and trustworthy tone
2. **Visual Hierarchy**: Clear structure with proper spacing
3. **Consistency**: Matches home page color palette and typography
4. **Performance**: Optimized images and animations
5. **Accessibility**: WCAG 2.1 AA compliant
6. **Responsiveness**: Mobile-first approach

---

## Color Theme Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Deep Blue | #1E3A8A | Primary brand color, overlays |
| Amber | #F9A826 | Accent color, CTAs, highlights |
| White | #FFFFFF | Text on dark backgrounds |
| Light Gray | #F8FAFC | Subtle text, secondary content |
| Dark Gray | #1F2937 | Body text |

---

## Notes for Developers

1. **Image Optimization**: Always compress images before adding to `/public/images/about/`
2. **Animation Performance**: Use `will-change` CSS property sparingly
3. **Font Loading**: Ensure Poppins and Open Sans are loaded in the main app
4. **Testing**: Test on multiple devices and browsers
5. **Accessibility**: Run Lighthouse audits regularly

---

## Contact

For questions or suggestions about the About page components, please refer to the main project documentation or contact the development team.

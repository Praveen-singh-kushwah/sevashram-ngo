# Programs & Initiatives Section - Documentation

## Overview
The Programs & Initiatives section showcases Sevashram's key programs through an engaging, interactive card-based layout with smooth animations.

## Design Specifications

### Colors
- **Background**: `#FDE68A` (Soft Warm Yellow)
- **Card Background**: `#FFFFFF` (White)
- **Primary Text**: `#1E3A8A` (Deep Blue)
- **Secondary Text**: `#4B5563` / `#1F2937` (Gray tones)
- **Accent/Links**: `#F9A826` (Primary Amber)

### Typography
- **Label**: Poppins, 600 weight, 18px, uppercase
- **Title**: Poppins, 700 weight, 24-32px (responsive)
- **Card Titles**: Poppins, 600 weight, 20-22px
- **Body Text**: Open Sans, 400 weight, 16-18px

### Layout
- **Desktop**: 2-column grid (2×2 layout for 4 cards, with 5th card spanning)
- **Mobile**: Single column stacked
- **Max Width**: 1280px (7xl container)
- **Padding**: 80px vertical (desktop), 40px (mobile)
- **Card Gap**: 2rem (32px)

## Features Implemented

### 1. **Five Program Cards**
Each card includes:
- Icon from Lucide React (BookOpen, GraduationCap, Heart, Shield, Users)
- Gradient icon background
- Program title
- Detailed description
- "Learn More" link with arrow
- Hover effects (scale, shadow, underline animation)

### 2. **Programs Included**
1. **Child Shelter & Education** - BookOpen icon
2. **Higher Education Sponsorship** - GraduationCap icon
3. **Health & Nutrition Program** - Heart icon
4. **Girls Protection & Rehabilitation** - Shield icon
5. **Community Outreach & Surveys** - Users icon

### 3. **Animations (Framer Motion)**
- **Section entrance**: Fade-in with upward motion
- **Staggered cards**: 0.2s delay between each card
- **Card hover**: Scale up (1.03) + enhanced shadow
- **Icon hover**: Scale up (1.1)
- **Link hover**: Underline slide-in + arrow translation
- **Corner accent**: Fade-in decorative element

### 4. **Responsive Behavior**
- Desktop (≥1024px): 2-column grid
- Tablet (768-1023px): 2-column grid with adjusted spacing
- Mobile (≤767px): Single column, full-width cards

### 5. **Interactive Elements**
- Hover effects on cards
- Animated "Learn More" links
- "View All Programs" CTA button at bottom
- Smooth transitions (0.3s ease-in-out)

## Component Structure

```jsx
ProgramsSection
├── Section Header
│   ├── Label (uppercase)
│   ├── Title
│   └── Intro Paragraph
├── Programs Grid (motion.div with stagger)
│   └── ProgramCard (×5)
│       ├── Icon Container (with gradient)
│       ├── Title
│       ├── Description
│       ├── Learn More Link
│       └── Decorative Corner Accent
└── CTA Button (View All Programs)
```

## Customization Options

### Adding New Programs
Add new program objects to the `programs` array:
```javascript
{
  id: 6,
  icon: YourLucideIcon,
  image: '/images/home/programs/your-image.jpg',
  title: 'Your Program Title',
  description: 'Your program description...',
  link: 'Your CTA Text',
  color: '#F9A826'
}
```

### Modifying Colors
Update the color values in:
- Section background: `bg-[#FDE68A]`
- Card backgrounds: `bg-white`
- Text colors: `text-[#1E3A8A]`, `text-[#4B5563]`, etc.
- Accent colors: `text-[#F9A826]`, `bg-[#F9A826]`

### Adjusting Animations
Modify animation variants:
- `containerVariants`: Controls stagger timing
- `cardVariants`: Controls card entrance animation
- Hover effects: Adjust scale values and transition durations

## Dependencies
- **React**: Core framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Tailwind CSS**: Styling framework

## Usage
```jsx
import ProgramsSection from './components/Home_Page_Components/ProgramsSection';

// In your page component
<ProgramsSection />
```

## Notes
- Icons are used instead of images for better performance and scalability
- All animations use `whileInView` for scroll-triggered effects
- Viewport margin ensures animations trigger at the right time
- `once: true` prevents re-animation on scroll back

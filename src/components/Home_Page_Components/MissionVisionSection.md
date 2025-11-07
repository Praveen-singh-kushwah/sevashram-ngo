# Mission, Vision, and Values Section - Documentation

## Overview
The Mission, Vision, and Values section communicates Sevashram's core philosophy through a clean, modern 3-card layout that builds trust and credibility.

## Design Specifications

### Colors
- **Background**: `#FFFFFF` (White)
- **Card Background**: `#F8FAFC` (Light Grayish Blue)
- **Icon Color**: `#F9A826` (Primary Amber)
- **Icon Backdrop**: `#FDE68A` at 30% opacity
- **Title Text**: `#1E3A8A` (Deep Blue)
- **Body Text**: `#1F2937` (Dark Gray)
- **Subtitle**: `#4B5563` (Muted Gray)
- **Accent Line**: `#F9A826` (Amber)

### Typography
- **Section Title**: Poppins, 600 weight, 24-32px (responsive)
- **Subtitle**: Open Sans, 400 weight, 16-18px
- **Card Titles**: Poppins, 600 weight, 18-20px
- **Card Description**: Open Sans, 400 weight, 16px

### Layout
- **Desktop (≥1024px)**: 3-column grid
- **Tablet (768-1023px)**: 2-column grid
- **Mobile (≤767px)**: Single column stacked
- **Max Width**: 1280px (7xl container)
- **Padding**: 80px vertical (desktop), 48px (mobile)
- **Card Gap**: 1.5-2rem
- **Card Min Height**: 340px (desktop)

## Features Implemented

### 1. **Three Core Cards**
Each card represents:
1. **Our Mission** - Target icon
   - Focus on care, education, and safe home for Tamasha artists' children
   
2. **Our Vision** - Eye icon
   - Dream of equal access to learning for all children
   
3. **Our Values** - Heart icon
   - Compassion, Integrity, Equality, and Empowerment

### 2. **Card Structure**
- **Circular icon backdrop** (80px diameter, 30% opacity yellow)
- **48px icon** from Lucide React
- **Card title** (center-aligned)
- **Description text** (center-aligned, max 340px width)
- **Bottom accent line** (appears on hover)

### 3. **Animations (Framer Motion)**
- **Section entrance**: Fade-in with upward motion
- **Staggered cards**: 0.2s delay between each card
- **Card hover**: Scale up (1.03) + enhanced shadow
- **Icon hover**: 5° rotation
- **Bottom accent**: Fade-in on hover
- **Smooth transitions**: 0.3s ease-in-out

### 4. **Responsive Behavior**
- **Desktop**: 3 cards in a row, full spacing
- **Tablet**: 2 cards per row, adjusted gap
- **Mobile**: Single column, full-width cards, reduced padding

### 5. **Interactive Elements**
- Hover effects on cards (scale + shadow)
- Icon rotation on hover
- Bottom accent line reveal
- Smooth transitions throughout

## Component Structure

```jsx
MissionVisionSection
├── Section Header
│   ├── Title (Our Mission, Vision, and Values)
│   └── Subtitle (optional tagline)
├── Cards Grid (motion.div with stagger)
│   └── MVVCard (×3)
│       ├── Icon Container
│       │   ├── Circular Backdrop (yellow, 30% opacity)
│       │   └── Icon (Lucide React)
│       ├── Card Title
│       ├── Description Text
│       └── Bottom Accent Line (hover reveal)
```

## Card Details

### Mission Card
- **Icon**: Target (Lucide)
- **Color**: Amber (#F9A826)
- **Content**: Care, education, and safe home for children

### Vision Card
- **Icon**: Eye (Lucide)
- **Color**: Amber (#F9A826)
- **Content**: Equal access to learning and growth

### Values Card
- **Icon**: Heart (Lucide)
- **Color**: Amber (#F9A826)
- **Content**: Compassion, Integrity, Equality, Empowerment

## Customization Options

### Modifying Content
Update the `cards` array in the component:
```javascript
{
  id: 1,
  icon: YourLucideIcon,
  title: 'Your Title',
  description: 'Your description text...',
  color: '#F9A826'
}
```

### Changing Colors
- Section background: `bg-white`
- Card background: `bg-[#F8FAFC]`
- Icon color: `text-[#F9A826]`
- Icon backdrop: `bg-[#FDE68A]`
- Title color: `text-[#1E3A8A]`
- Body text: `text-[#1F2937]`

### Adjusting Animations
Modify animation variants:
- `containerVariants`: Controls stagger timing (0.2s)
- `cardVariants`: Controls card entrance (0.5s)
- Hover effects: Adjust scale (1.03) and rotation (5°)

## Design Philosophy

### Visual Mood
- **Calm and trustworthy**: White background with soft blue cards
- **Sincere and authentic**: Clean typography, balanced spacing
- **Professional yet human**: Icons add personality without being playful

### Emotional Tone
- Communicates **credibility** through clean design
- Builds **trust** through balanced hierarchy
- Conveys **sincerity** through thoughtful content

### Section Purpose
Acts as a bridge between:
- **About Section** (storytelling) → Mission/Vision/Values (philosophy)
- **Mission/Vision/Values** → Programs Section (action-oriented)

## Dependencies
- **React**: Core framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library (Target, Eye, Heart)
- **Tailwind CSS**: Styling framework

## Usage
```jsx
import MissionVisionSection from './components/Home_Page_Components/MissionVisionSection';

// In your page component
<MissionVisionSection />
```

## Positioning
Should be placed:
- **After**: About Section (storytelling context)
- **Before**: Programs & Initiatives (action items)

## User Takeaway
> "This organization is thoughtful, guided by strong values, and worthy of my trust."

## Notes
- All cards maintain equal height (min 340px) for visual consistency
- Icons use circular backdrops for visual interest
- Staggered animations create engaging entrance
- Hover effects provide subtle interactivity
- Mobile-optimized with single-column layout
- Center-aligned content for balanced appearance

# Events and Activities Section - Documentation

## Overview
The Events and Activities section highlights recent and upcoming events through a clean grid layout, demonstrating Sevashram's ongoing community involvement and encouraging visitor participation.

## Design Specifications

### Colors
- **Background**: `#F8FAFC` (Light Grayish Blue)
- **Card Background**: `#FFFFFF` (White)
- **Title Text**: `#1E3A8A` (Deep Blue)
- **Meta Text**: `#4B5563` (Muted Gray)
- **Description Text**: `#1F2937` (Dark Gray)
- **Button Background**: `#F9A826` (Amber)
- **Button Hover**: `#F59E0B` (Darker Amber)
- **Icon Color**: `#F9A826` (Amber)

### Typography
- **Section Title**: Poppins, 600 weight, 24-32px (responsive)
- **Subtitle**: Open Sans, 400 weight, 16-18px
- **Card Title**: Poppins, 600 weight, 18-20px
- **Meta Text**: Open Sans, 400 weight, 14px
- **Description**: Open Sans, 400 weight, 16px
- **Button**: Poppins, 600 weight, 16px

### Layout
- **Desktop (≥1024px)**: 3-column grid
- **Tablet (768-1023px)**: 2-column grid
- **Mobile (≤767px)**: Single column stacked
- **Max Width**: 1280px (7xl container)
- **Padding**: 80px vertical (desktop), 48px (mobile)
- **Card Gap**: 1.5-2rem

## Features Implemented

### 1. **Six Event Cards**
Each event card showcases:

1. **Children's Day Celebration 2025**
   - Date: November 14, 2025
   - Category: Celebration
   - Focus: Joy, games, and learning

2. **Smruti Din Fundraiser**
   - Date: October 30, 2025
   - Category: Fundraiser
   - Focus: Raising funds for education

3. **Volunteer Art Workshop**
   - Date: September 21, 2025
   - Category: Workshop
   - Focus: Teaching painting and crafts

4. **Annual Day Celebration**
   - Date: December 15, 2025
   - Category: Celebration
   - Focus: Talent showcase and achievements

5. **Health & Wellness Camp**
   - Date: August 10, 2025
   - Category: Health
   - Focus: Medical check-ups and awareness

6. **Sports Day Extravaganza**
   - Date: January 26, 2026
   - Category: Sports
   - Focus: Athletic competitions and teamwork

### 2. **Event Card Structure**
Each card contains:
- **Event image** (240px height, lazy loaded)
- **Event title** (truncated to 2 lines)
- **Meta information** (date + category with icons)
- **Description** (truncated to 3 lines)
- **View Details button** (full-width, amber)

### 3. **Image Features**
- **Lazy loading** with blur effect
- **Zoom on hover** (scale 1.1)
- **Gradient overlay** (subtle bottom fade)
- **Fixed height** (240px) for consistency
- **Object-fit cover** for proper cropping
- **Rounded top corners** (16px)

### 4. **Meta Information**
Each event displays:
- **Date** with Calendar icon
- **Category** with contextual icon (Calendar/Users/MapPin)
- **Amber colored icons** for brand consistency
- **Flexible layout** with gap spacing

### 5. **Animations (Framer Motion)**
- **Section entrance**: Fade-in with upward motion
- **Staggered cards**: 0.2s delay between each card
- **Card hover**: Upward lift (-5px) + shadow enhancement
- **Image hover**: Zoom in (1.1)
- **Button hover**: Scale (1.05) + darker amber
- **Smooth transitions**: 0.3s ease-in-out

### 6. **Call-to-Action**
- **"View All Events" button** below grid
- **Centered alignment**
- **Amber background** with white text
- **Hover effects**: Scale + darker shade
- **Links to** /events page

### 7. **Responsive Behavior**
- **Desktop**: 3 columns, standard spacing
- **Tablet**: 2 columns, adjusted fonts
- **Mobile**: Single column, full-width buttons

### 8. **Interactive Elements**
- Card hover effects (lift + shadow)
- Image zoom on hover
- Button animations
- Full-width buttons on mobile for accessibility

## Component Structure

```jsx
EventsSection
├── Section Header
│   ├── Title (Events and Activities)
│   └── Subtitle (Stay updated...)
├── Events Grid (3-column responsive)
│   └── EventCard (×6)
│       ├── Image Container
│       │   ├── LazyLoadImage
│       │   └── Gradient Overlay
│       └── Content
│           ├── Event Title
│           ├── Meta Information
│           │   ├── Date (Calendar icon)
│           │   └── Category (Icon)
│           ├── Description
│           └── View Details Button
└── View All Events Button (CTA)
```

## Event Categories & Icons

### Icon Mapping
- **Celebration** → Calendar icon
- **Fundraiser** → Users icon
- **Workshop** → MapPin icon
- **Health** → Users icon
- **Sports** → MapPin icon

### Category Colors
All icons use `#F9A826` (Amber) for brand consistency

## Customization Options

### Adding New Events
Update the `events` array:
```javascript
{
  id: 7,
  image: '/images/home/events/your-event.jpg',
  title: 'Your Event Title',
  date: 'Month Day, Year',
  category: 'Category Name',
  icon: YourLucideIcon,
  description: 'Your event description...',
  link: '/events/your-event-slug'
}
```

### Changing Grid Layout
- Desktop columns: `lg:grid-cols-3`
- Tablet columns: `md:grid-cols-2`
- Mobile: `grid-cols-1`

### Modifying Card Height
- Image height: `h-[240px]`
- Adjust based on content needs
- Maintain consistency across cards

### Adjusting Colors
- Section background: `bg-[#F8FAFC]`
- Card background: `bg-white`
- Title: `text-[#1E3A8A]`
- Meta: `text-[#4B5563]`
- Description: `text-[#1F2937]`
- Button: `bg-[#F9A826]` / `hover:bg-[#F59E0B]`
- Icons: `text-[#F9A826]`

## Design Philosophy

### Visual Tone
- **Light and structured**: Neutral gray background
- **Community-driven**: Event-focused content
- **Dynamic and uplifting**: Active organization showcase
- **Organized**: Clean grid layout

### Emotional Impact
> "This NGO is active — I can join or support these efforts."

### Purpose
- **Highlight ongoing activities** and community connection
- **Demonstrate engagement** with regular events
- **Encourage participation** through clear CTAs
- **Build trust** through transparency

## Technical Details

### Dependencies
- **React**: Core framework
- **Framer Motion**: Animation library (motion, whileHover)
- **Lucide React**: Icons (Calendar, MapPin, Users)
- **react-lazy-load-image-component**: Lazy loading with blur effect
- **Tailwind CSS**: Styling framework

### Performance Optimizations
- **Lazy loading images**: Only loads visible images
- **Blur effect**: Smooth loading transition
- **Efficient animations**: CSS transforms
- **Truncated text**: `line-clamp-2` and `line-clamp-3`
- **Optimized grid**: Native CSS Grid

### Accessibility
- ✅ Semantic HTML structure
- ✅ Alt text for all images
- ✅ Clear text hierarchy
- ✅ High contrast text
- ✅ Full-width buttons on mobile
- ✅ Descriptive meta information
- ✅ Icon + text combinations

## Usage
```jsx
import EventsSection from './components/Home_Page_Components/EventsSection';

// In your page component
<EventsSection />
```

## Positioning
Should be placed:
- **After**: Stories of Hope (emotional connection)
- **Before**: Get Involved or Donate sections (action CTAs)
- Acts as **activity showcase** before engagement prompts

## User Takeaway
> "Sevashram is actively making a difference. These events show real community involvement and I can be part of it."

## Best Practices

### Event Images
- **Recommended size**: 800x600px
- **Format**: JPG or WebP for optimization
- **Content**: Show people, activities, emotions
- **Quality**: High resolution but optimized

### Event Descriptions
- **Length**: 2-3 lines maximum
- **Tone**: Positive and engaging
- **Focus**: Impact and experience
- **Call**: Implicit invitation to participate

### Date Formatting
- **Format**: "Month Day, Year"
- **Example**: "November 14, 2025"
- **Consistency**: Use same format throughout

## Notes
- Cards maintain equal height through auto layout
- Images zoom on hover for engagement
- Staggered entrance creates dynamic reveal
- Full-width buttons on mobile improve UX
- Meta information uses icons for visual clarity
- Truncated text prevents layout breaking
- Grid adapts smoothly across breakpoints
- "View All Events" CTA encourages exploration
- Light background provides visual pause
- Amber accents maintain brand consistency
- Clean design focuses on content
- Hover effects provide tactile feedback

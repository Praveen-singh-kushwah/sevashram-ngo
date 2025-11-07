# Footer Section - Documentation

## Overview
The Footer section is the foundation of the Sevashram NGO website — calm, clear, and reliable. It provides essential information, key navigation links, and contact details while reinforcing Sevashram's brand identity and credibility.

## Design Specifications

### Colors
- **Background**: `#1E3A8A` (Deep Blue)
- **Text Color**: `#FFFFFF` (White)
- **Secondary Text**: `#E2E8F0` (Light Gray)
- **Accent/Hover**: `#FDE68A` (Soft Yellow)
- **Button Background**: `#F9A826` (Amber)
- **Button Hover**: `#F59E0B` (Darker Amber)
- **Divider**: `rgba(255,255,255,0.2)`
- **Social Icons BG**: `rgba(255,255,255,0.1)`
- **Social Icons Hover**: `rgba(255,255,255,0.2)`

### Typography
- **Logo/Brand**: Poppins, 700 weight, 20px
- **Column Titles**: Poppins, 600 weight, 16-18px
- **Tagline**: Open Sans, 400 weight, 14-16px
- **Links**: Open Sans, 400 weight, 14px
- **Contact Info**: Open Sans, 400 weight, 14-15px
- **Copyright**: Open Sans, 400 weight, 14px

### Layout
- **Desktop (≥1024px)**: 4-column grid
- **Tablet (768-1023px)**: 2-column grid
- **Mobile (≤767px)**: Single column stacked
- **Max Width**: 1280px (7xl container)
- **Padding**: 60-80px vertical, 24px horizontal
- **Column Gap**: 2-3rem
- **Row Gap (mobile)**: 2rem

## Features Implemented

### 1. **Four-Column Structure**

#### Column 1: Logo & About
- **Logo**: Gradient circle with heart icon
- **Brand name**: "Sevashram"
- **Tagline**: "A Shelter for the Children of Tamasha Artists."
- **Donate button**: Quick access CTA
- **Max width**: 250px

#### Column 2: Quick Links
- **Title**: "Quick Links"
- **Links**: 8 navigation items
  - Home
  - About Us
  - Programs
  - Impact
  - Gallery
  - Events
  - Blog
  - Contact
- **Hover effect**: Yellow color transition

#### Column 3: Contact Information
- **Title**: "Contact Us"
- **Address**: Full postal address with MapPin icon
- **Phone**: Clickable tel: link with Phone icon
- **Email**: Clickable mailto: link with Mail icon
- **Icons**: 20px, amber accent color
- **Hover**: Yellow color on links

#### Column 4: Social Media & Newsletter
- **Title**: "Connect With Us"
- **Social icons**: 4 platforms
  - Facebook
  - Instagram
  - YouTube
  - Twitter
- **Newsletter**: Email input + Subscribe button
- **Icon size**: 20px in 40px circles

### 2. **Logo Section**
- **Icon container**: 48px gradient circle
- **Icon**: Heart (filled, white)
- **Gradient**: Amber to soft yellow
- **Brand text**: Bold, white, 20px
- **Alignment**: Center on mobile, left on desktop

### 3. **Quick Links**
- **Layout**: Vertical list
- **Spacing**: 8px between items
- **Hover effect**: Color change to yellow
- **Transition**: 300ms smooth
- **Text transform**: Capitalize
- **Line height**: 2 for easy clicking

### 4. **Contact Information**
- **Address block**: Multi-line with icon
- **Phone link**: Opens dialer on mobile
- **Email link**: Opens mail client
- **Icon alignment**: Top-aligned with text
- **Icon color**: Soft yellow accent
- **Hover**: Yellow color transition

### 5. **Social Media**
- **Icon layout**: Horizontal row
- **Icon containers**: 40px circles
- **Background**: White/10 opacity
- **Hover effects**:
  - Scale (1.1)
  - Lift (-2px)
  - Color change to amber
  - Background opacity increase
- **Gap**: 16px between icons
- **Target**: Opens in new tab

### 6. **Newsletter Signup**
- **Input field**:
  - Background: White/10
  - Border: White/20
  - Placeholder: White/50
  - Focus: Yellow border
  - Rounded corners (8px)
- **Subscribe button**:
  - Amber background
  - White text
  - Hover: Darker amber
  - Scale animation
  - Rounded (8px)

### 7. **Divider Line**
- **Color**: White/20 opacity
- **Height**: 1px
- **Width**: Full width
- **Margin**: 32px vertical
- **Animation**: Scale-X from 0 to 1

### 8. **Copyright Bar**
- **Layout**: Flex row (space-between)
- **Copyright text**: Left-aligned
- **Legal links**: Right-aligned
- **Mobile**: Stacked, centered
- **Links**: Privacy Policy, Terms of Use
- **Hover**: Yellow color transition

### 9. **Scroll to Top Button**
- **Position**: Fixed bottom-right
- **Size**: 48px circle
- **Background**: Amber
- **Icon**: Arrow up (white)
- **Visibility**: Shows after 500px scroll
- **Animations**:
  - Fade in/scale in
  - Hover: Scale (1.1) + lift (-2px)
  - Tap: Scale (0.9)
- **Action**: Smooth scroll to top
- **Z-index**: 50

### 10. **Animations (Framer Motion)**
- **Section entrance**: Fade-up (y: 30 → 0)
- **Staggered columns**: 0.1s delay between each
- **Divider**: Scale-X animation
- **Copyright**: Fade-up with delay
- **Links hover**: Color transition
- **Icons hover**: Scale + lift
- **Scroll button**: Fade + scale entrance
- **All transitions**: 300ms smooth

### 11. **Responsive Behavior**

#### Desktop (≥1024px)
- **Layout**: 4 columns
- **Text align**: Left
- **Logo**: Left-aligned
- **Social icons**: Left-aligned
- **Newsletter**: Horizontal input + button

#### Tablet (768-1023px)
- **Layout**: 2 columns
- **Text align**: Left
- **Spacing**: Reduced gaps
- **Font sizes**: Standard

#### Mobile (≤767px)
- **Layout**: Single column
- **Text align**: Center
- **Logo**: Centered
- **Links**: Centered
- **Social icons**: Centered
- **Newsletter**: Stacked vertically
- **Font sizes**: Reduced by 1-2px

## Component Structure

```jsx
Footer
├── Container
│   ├── 4-Column Grid
│   │   ├── Column 1: Logo & About
│   │   │   ├── Logo (Gradient Circle + Heart)
│   │   │   ├── Brand Name
│   │   │   ├── Tagline
│   │   │   └── Donate Button
│   │   ├── Column 2: Quick Links
│   │   │   ├── Title
│   │   │   └── Links List (×8)
│   │   ├── Column 3: Contact Info
│   │   │   ├── Title
│   │   │   ├── Address (with icon)
│   │   │   ├── Phone (with icon)
│   │   │   └── Email (with icon)
│   │   └── Column 4: Social & Newsletter
│   │       ├── Title
│   │       ├── Social Icons (×4)
│   │       └── Newsletter Form
│   │           ├── Input Field
│   │           └── Subscribe Button
│   ├── Divider Line
│   └── Copyright Bar
│       ├── Copyright Text
│       └── Legal Links
└── Scroll to Top Button (Fixed)
```

## Contact Details

### Address
```
Sevashram NGO
Beed Road, Brahmanath Yelamb
Tal Shirur Kasar, Dist Beed – 413249
```

### Phone
```
+91 9822038974
```

### Email
```
sevashram.ngo@gmail.com
```

## Customization Options

### Changing Colors
- Background: `bg-[#1E3A8A]`
- Text: `text-white` / `text-[#E2E8F0]`
- Hover: `hover:text-[#FDE68A]`
- Button: `bg-[#F9A826]` / `hover:bg-[#F59E0B]`

### Adding/Removing Links
Update the `quickLinks` array:
```javascript
{ name: 'Link Name', path: '/path' }
```

### Modifying Social Links
Update the `socialLinks` array:
```javascript
{ name: 'Platform', icon: IconComponent, url: 'https://...' }
```

### Adjusting Layout
- Desktop columns: `lg:grid-cols-4`
- Tablet columns: `md:grid-cols-2`
- Mobile: `grid-cols-1`

### Changing Scroll Threshold
Modify `showScrollTop` condition:
```javascript
setShowScrollTop(window.scrollY > 500);
```

## Design Philosophy

### Visual Tone
- **Calm and trustworthy**: Deep blue background
- **Professional**: Structured grid layout
- **Accessible**: Clear hierarchy and spacing
- **Warm**: Amber accents and hover effects

### Emotional Impact
> "This organization is established, trustworthy, and easy to reach. I can connect with them anytime."

### Purpose
- **Provide navigation** for quick access
- **Display contact info** for easy communication
- **Enable social connection** through multiple channels
- **Build trust** through professional presentation
- **Encourage action** with donate button

## Technical Details

### Dependencies
- **React**: Core framework (useState, useEffect)
- **React Router**: Link component for navigation
- **Framer Motion**: Animation library (motion, variants)
- **Lucide React**: Icons (Phone, Mail, MapPin, social icons, ArrowUp, Heart)
- **Tailwind CSS**: Styling framework

### Performance Optimizations
- **Scroll listener**: Efficient event handling
- **Cleanup**: Removes event listener on unmount
- **Smooth scrolling**: Native browser behavior
- **GPU-accelerated animations**: CSS transforms
- **Conditional rendering**: Scroll button only when needed

### Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels on buttons
- ✅ Keyboard navigation support
- ✅ High contrast text (white on dark blue)
- ✅ Clear text hierarchy
- ✅ Clickable links with hover states
- ✅ External links open in new tab
- ✅ Focus states on interactive elements
- ✅ Descriptive link text

## Usage
```jsx
import Footer from './components/Footer';

// In your layout or page component
<Footer />
```

## Positioning
Should be placed:
- **After**: All page content (last element)
- **Global**: Appears on every page
- Acts as **final anchor point** for the website

## User Takeaway
> "I know how to reach Sevashram, where to find information, and how to stay connected. This is a professional, trustworthy organization."

## Best Practices

### Link Organization
- **Group logically**: Related pages together
- **Prioritize**: Most important links first
- **Keep concise**: 6-10 links maximum
- **Use clear labels**: Descriptive link text

### Contact Information
- **Keep updated**: Verify all contact details
- **Make clickable**: Phone and email links
- **Include icons**: Visual clarity
- **Format clearly**: Easy to read and copy

### Social Media
- **Active accounts only**: Don't link inactive profiles
- **Consistent branding**: Use official handles
- **Open in new tab**: Keep users on site
- **Update regularly**: Maintain active presence

### Newsletter
- **Clear value**: Explain what subscribers get
- **Simple form**: Just email required
- **Privacy note**: Link to privacy policy
- **Confirmation**: Show success message

## Enhancement Ideas

### Optional Additions
1. **Trust badges**: NGO registration numbers
2. **Awards section**: Recognition and certifications
3. **Live social feed**: Recent Instagram posts
4. **Donation progress**: Mini progress bar
5. **Language selector**: Multi-language support
6. **Sitemap link**: Complete site structure
7. **Accessibility statement**: Commitment to inclusion
8. **Annual report**: Download link

## Notes
- Deep blue background creates calm, professional feel
- White text ensures high readability
- Amber accents maintain brand consistency
- Structured grid provides clear organization
- Hover effects provide tactile feedback
- Scroll button improves navigation
- Newsletter builds ongoing connection
- Social icons enable community engagement
- Contact info is prominently displayed
- Legal links ensure compliance
- Responsive design works on all devices
- Animations add polish without distraction
- Divider creates visual separation
- Copyright establishes ownership
- Quick links improve site navigation
- Logo reinforces brand identity
- Donate button provides easy access
- Professional design builds credibility
- Clear hierarchy guides attention
- Consistent spacing creates harmony

# Our Team Section Images

## Required Images

Place team member portrait images in this folder with the following specifications:

### Filenames
- `member1.jpg` - Shri Suresh Rajhans (Founder & Director)
- `member2.jpg` - Mayuri Rajhans (Co-Founder & Managing Director)
- `member3.jpg` - Rohit Deshmukh (Operations Head)
- `member4.jpg` - Priya Sharma (Education Coordinator)
- `member5.jpg` - Amit Patil (Child Welfare Officer)
- `member6.jpg` - Sneha Kulkarni (Healthcare Coordinator)

## Image Specifications

### Technical Requirements
- **Resolution**: Minimum 300x300px (Square aspect ratio required)
- **Aspect Ratio**: 1:1 (Square) for circular display
- **Format**: JPG or PNG (JPG recommended for photos)
- **File Size**: Optimized for web (ideally under 150KB per image)
- **Quality**: High-resolution, clear focus on face

### Display Dimensions
- **Desktop**: 150x150px (circular)
- **Mobile**: 120x120px (circular)
- **Border**: 2px amber border (#F9A826)
- **Shape**: Circular (border-radius: 50%)
- **Shadow**: Soft drop shadow (0 2px 10px rgba(0,0,0,0.08))

## Content Guidelines

### Photo Style - Professional Portraits

#### Recommended Style
✅ **Professional headshot or portrait**
- Clean, professional appearance
- Smart casual or formal attire
- Warm, genuine smile
- Eye contact with camera
- Clear focus on face

#### Alternative Style
✅ **Candid with children (in context)**
- Team member interacting with Sevashram children
- Natural, authentic moment
- Face clearly visible
- Warm, caring expression
- Professional yet approachable

### Composition Guidelines
- **Focus**: Sharp focus on face
- **Framing**: Head and shoulders (headshot style)
- **Positioning**: Centered in frame for circular crop
- **Lighting**: Soft, flattering light (avoid harsh shadows)
- **Background**: Clean, solid color or naturally blurred
- **Expression**: Warm, genuine, approachable
- **Mood**: Professional yet friendly

### What to Avoid
❌ Group photos (one person per image)
❌ Dark or poorly lit images
❌ Blurry or out-of-focus shots
❌ Cluttered or distracting backgrounds
❌ Overly casual or informal poses
❌ Images with existing text overlays
❌ Low-resolution or pixelated photos
❌ Extreme close-ups or wide shots
❌ Harsh lighting or strong shadows
❌ Sunglasses or face coverings

## Visual Style

### Color Tone
- Natural and professional
- Warm color palette
- Avoid overly saturated or filtered images
- Consistent tone across all team members
- Match Sevashram's brand identity

### Emotional Tone
Each image should convey:
- **Professionalism**: Competent and trustworthy
- **Approachability**: Warm and welcoming
- **Compassion**: Caring and empathetic
- **Dedication**: Committed to the cause
- **Authenticity**: Genuine and real

## Circular Crop Considerations

Since images will be displayed in **circular frames**:

### Safe Zone
- Keep face within the center 80% of the image
- Avoid important details near edges (will be cropped)
- Ensure face is not cut off by circular crop

### Positioning
- Center the face in the frame
- Leave some space around head
- Avoid extreme angles or tilted compositions

### Testing
- Preview image in a circular crop before finalizing
- Ensure face is fully visible
- Check that expression is clear

## Consistency Across Team

### Maintain Uniformity
For a cohesive team section, ensure:
- Similar lighting style across all photos
- Consistent background approach (all solid or all blurred)
- Similar framing (all headshots or all waist-up)
- Matching color tone and saturation
- Similar professional level

### Background Options
Choose ONE approach for all team members:

**Option 1: Solid Background** (Recommended)
- White, light gray, or soft blue
- Clean and professional
- Easy to maintain consistency

**Option 2: Blurred Natural Background**
- Outdoor or campus setting
- Naturally blurred (bokeh effect)
- Adds warmth and context

**Option 3: Sevashram Context**
- Campus or classroom setting
- Blurred background
- Shows work environment

## Individual Team Member Guidelines

### Member 1 & 2: Founders (Shri Suresh & Mayuri Rajhans)
- **Style**: Professional yet warm
- **Attire**: Smart casual or semi-formal
- **Expression**: Confident, caring, leadership
- **Note**: Can use individual crops from the founders' portrait if available

### Member 3-6: Staff Members
- **Style**: Professional headshots
- **Attire**: Business casual or smart casual
- **Expression**: Warm, approachable, dedicated
- **Context**: Can show connection to their role (e.g., teacher with books, caregiver with children)

## Technical Notes

### Image Processing
- Images will be displayed in circular containers
- 2px amber border will be applied
- Soft shadow for depth
- Hover effect: slight zoom (scale 1.05)
- Lazy loading enabled for performance

### Optimization Tips
1. Compress images before uploading (use tools like TinyPNG)
2. Ensure square aspect ratio (1:1)
3. Center face for circular crop
4. Test on both desktop and mobile views
5. Verify images load quickly

### Accessibility
- Each image has descriptive alt text: "[Name] - [Role]"
- Lazy loading enabled for performance
- Blur effect during load for smooth experience

## Placement Context

These images appear in the **"Our Team"** section:
- **Layout**: Grid of cards (3 per row on desktop, 2 on tablet, 1 on mobile)
- **Card Style**: White background, rounded corners, shadow
- **Hover Effect**: Card lifts, amber border appears on top
- **Purpose**: Showcase the people behind Sevashram's mission

## Example Team Member Card Structure

```
┌─────────────────────┐
│                     │
│      ╭─────╮        │
│      │     │        │  ← Circular photo (150px)
│      │ 👤  │        │    with amber border
│      ╰─────╯        │
│                     │
│   [Member Name]     │  ← Poppins 600, 18px, #1E3A8A
│   [Role/Title]      │  ← Open Sans 500, 15px, #4B5563
│                     │
│  "Personal Quote"   │  ← Open Sans Italic, 14px, #1F2937
│                     │
└─────────────────────┘
```

## File Naming Convention

Use these exact filenames:
```
member1.jpg  (Shri Suresh Rajhans)
member2.jpg  (Mayuri Rajhans)
member3.jpg  (Rohit Deshmukh)
member4.jpg  (Priya Sharma)
member5.jpg  (Amit Patil)
member6.jpg  (Sneha Kulkarni)
```

Alternative formats accepted:
- `.png` (if transparency needed)
- `.webp` (for better compression)

**Note**: Update the component if using different formats or adding more team members.

## Adding More Team Members

To add additional team members:

1. Add new image to this folder (e.g., `member7.jpg`)
2. Update `OurTeamSection.jsx` component:
   ```jsx
   const teamMembers = [
     // ... existing members
     {
       id: 7,
       name: "New Member Name",
       role: "Role Title",
       quote: "Personal quote here.",
       image: "/images/about/team/member7.jpg",
     },
   ];
   ```

## Quality Checklist

Before adding images, verify:
- [ ] All images are square (1:1 aspect ratio)
- [ ] Resolution is at least 300x300px
- [ ] File size is under 150KB per image
- [ ] All images are clear and well-lit
- [ ] Faces are in focus
- [ ] Expressions are warm and professional
- [ ] Backgrounds are consistent across all photos
- [ ] Images work well in circular crop
- [ ] No distracting elements
- [ ] Consistent color tone across all images
- [ ] All 6 required images are present

## Color Grading Tips

For best results:
- Slightly warm color temperature
- Soft contrast (not too harsh)
- Natural skin tones
- Avoid overly cool or blue tones
- Maintain consistency across all team photos
- Natural look preferred over heavy editing

## Photography Tips

### If Taking New Photos

**Lighting**:
- Use soft, diffused natural light
- Avoid direct harsh sunlight
- Golden hour (early morning/late afternoon) is ideal
- Or use soft indoor lighting

**Camera Settings**:
- Use portrait mode or wide aperture (f/2.8-f/5.6)
- Focus on eyes
- Ensure sharp focus
- Use good quality camera (DSLR, mirrorless, or modern smartphone)

**Direction**:
- Ask for genuine smiles
- Encourage relaxed, natural poses
- Take multiple shots to choose best expression
- Ensure professional yet approachable demeanor

## Contact

For questions about image selection or specifications, refer to:
- Component documentation: `src/components/About_Page_Components/README.md`
- Team section component: `src/components/About_Page_Components/OurTeamSection.jsx`

---

**Remember**: These images represent the heart of Sevashram — the people who make it all possible. Choose photos that authentically represent their warmth, dedication, and professionalism.

**Pro Tip**: Consistency is key! Ensure all team photos have a similar style, lighting, and background approach for a cohesive, professional appearance.

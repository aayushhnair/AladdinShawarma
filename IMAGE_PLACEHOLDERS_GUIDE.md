# Image Placeholder Guide for Aladdin Shawarma Website

## Logo Area (Prologue/Hero Section)

### Enhanced Logo Design
The logo now features:
- **Glowing Ring**: Pulsing radial gradient behind logo for mystical effect
- **Rotating Circle**: Golden ring with 4 decorative dots rotating slowly (40s)
- **Enhanced Shadows**: Stronger golden glow effects
- **Position**: Centered, no side placeholders (clean, focused design)

**No placeholders on hero page** - Logo stands alone with mystical effects

---

## Menu Page Decorative Placeholders

### Large Feature Placeholders

1. **Left Side - Shawarma Plate** (100-200px circle)
   - **Location**: Left side, 20% from top, 5% from left
   - **Suggested Image**: Overhead shot of beautifully plated shawarma with garnish
   - **Alt Text**: "Signature shawarma plate with fresh vegetables and tahini"
   - **Animation**: Floating effect (4s cycle)
   - **File Path**: `src/assets/menu-shawarma-plate.png`

2. **Right Side - Grilling Spit** (80-150px width, 120-220px height rectangle)
   - **Location**: Right side, 30% from top, 5% from right
   - **Suggested Image**: Vertical rotating spit with grilling meat, flames visible
   - **Alt Text**: "Traditional vertical rotisserie with grilling shawarma meat"
   - **Animation**: Floating effect with 0.5s delay (5s cycle)
   - **File Path**: `src/assets/menu-grilling-spit-vertical.png`

### Bottom Row - Ingredient Icons

3. **Fresh Vegetables** (60-100px circle)
   - **Location**: Bottom center (left), 5% from bottom
   - **Suggested Image**: Fresh tomatoes, lettuce, cucumbers, pickles
   - **Alt Text**: "Fresh crisp vegetables for shawarma"
   - **Animation**: Pulsing glow (2s)
   - **File Path**: `src/assets/menu-fresh-veggies.png`

4. **Sauce/Tahini** (60-100px circle)
   - **Location**: Bottom center (right), 5% from bottom
   - **Suggested Image**: Tahini sauce drizzle or garlic sauce bowl
   - **Alt Text**: "Creamy tahini and garlic sauce"
   - **Animation**: Pulsing glow with delay (2.2s)
   - **File Path**: `src/assets/menu-sauce-tahini.png`

---

## Design Specifications

### Image Requirements:
- **Format**: PNG with transparent background
- **Resolution**: 300-500px for main circles, 200-300px for smaller elements
- **Style**: Vibrant colors, professional food photography or illustrated style
- **Background**: Transparent or with slight glow effect
- **Color Palette**: Warm tones (golds, browns, greens) to match Arabian theme

### Visual Theme:
- **Main Logo Decorations**: Bold, eye-catching, mystical Arabian nights theme
- **Below Logo Elements**: Subtle, ingredient-focused, appetizing

### Border Styling:
- Dashed golden borders (rgba(252, 177, 0, 0.4))
- Circular shapes for main decorations
- Rounded rectangles for ingredient icons
- Soft golden glow/shadow effects

## Implementation Notes

### To Replace Placeholders:
1. Save your PNG images to `src/assets/` folder
2. Import them in `StorySection.js` (for menu placeholders):
   ```javascript
   import shawarmaPlate from '../assets/menu-shawarma-plate.png';
   import grillingSpit from '../assets/menu-grilling-spit-vertical.png';
   import freshVeggies from '../assets/menu-fresh-veggies.png';
   import sauceTahini from '../assets/menu-sauce-tahini.png';
   ```

3. Replace the placeholder divs with `<img>` tags in the menu section conditional block
   ```javascript
   <img
     src={shawarmaWrap}
     alt="Freshly wrapped shawarma"
     style={{ ...existing styles... }}
   />
   ```

### Current Placeholder Features:
- ✅ Dashed golden borders
- ✅ Emoji icons with labels
- ✅ Hover tooltips with suggestions
- ✅ Responsive sizing (clamp for all screen sizes)
- ✅ Floating/pulsing animations
- ✅ Golden glow effects
- ✅ Backdrop blur for mystical feel

## Alternative Image Ideas

### For Shawarma Wrap Position:
- Shawarma wrap with ingredients spilling out
- Golden rotating spit with meat
- Stack of warm pita bread

### For Genie Position:
- Aladdin's lamp with magical sparkles
- Mystical smoke swirls forming shapes
- Flying carpet with golden tassels

### For Ingredient Icons:
- Tahini sauce drizzle
- Fresh mint leaves
- Pomegranate seeds
- Garlic cloves
- Lemon wedges
- Pickled turnips
- Hummus bowl

## Color Matching Guide
- **Primary Gold**: #FCB100
- **Navy Background**: #08144F
- **Parchment Text**: rgba(252, 243, 224, 0.95)
- **Glow Effects**: rgba(252, 177, 0, 0.3-0.8)

---

**Note**: All current placeholders have helpful titles (hover to see suggestions) and are designed to maintain the mystical Arabian storytelling theme while showcasing the food elements.

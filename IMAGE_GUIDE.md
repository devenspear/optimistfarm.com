# Bunny's Thank-You Garden - Image Placement Guide

## 📸 Complete Image List - UPDATED FOR SPREADS

Replace the spread placeholders with your **square watercolor PNG images** using these exact filenames:

### Act 1: Setup and Problem (Spreads 01-02 to 04-05)

**spread_01_02.png** - Title & Bunny Plants Seeds 🌱
- **Spreads**: Title page + "In a sunny garden, Bunny sowed her seeds..."
- **Position**: Center for title, Random floating for intro spread
- **Suggested Content**: Bunny in a beautiful garden planting carrot seeds
- **Layout**: Perfect square with watercolor edges, floating randomly

**spread_03_04.png** - Waiting & Small Sprouts 🌿
- **Spread**: "One day, two days, three days creeped..."  
- **Position**: Random floating (currently top-left area with 5° rotation)
- **Suggested Content**: Tiny green sprouts emerging, Bunny looking concerned
- **Layout**: Square watercolor with soft edges

**spread_04_05.png** - Frustrated Bunny 😤
- **Spread**: "Sprouts so small, no carrots to munch!"
- **Position**: Random floating (currently right side, -12° rotation)
- **Suggested Content**: Bunny tugging at tiny sprouts, frustrated expression
- **Layout**: Square watercolor showing Bunny's frustration

### Act 2: Adventure and Learning (Spreads 06-07 to 16-17)

**spread_06_07.png** - Wise Owl 🦉
- **Spread**: "Bunny hopped to Owl in the tree..."
- **Position**: Random floating (currently center area, 3° rotation)
- **Suggested Content**: Wise owl in tree with Bunny below, magical atmosphere
- **Layout**: Square watercolor with enchanted forest vibes

**spread_08_09.png** - Thank You, Soil! ✨ **(INTERACTIVE)**
- **Spread**: "Thank you, Soil!" 
- **Position**: Random floating (currently left area, -6° rotation)
- **Suggested Content**: Soil glowing with warm light, magical sparkles, earth energy
- **Layout**: Square watercolor with warm browns and golden glows

**spread_10_11.png** - Thank You, Sun and Rain! 🌞🌧️ **(INTERACTIVE)**
- **Spread**: "Thank you, Sun!" and "Thank you, Rain!"
- **Position**: Random floating (currently right side, 10° rotation)
- **Suggested Content**: Split scene - sunny sky and gentle rain, rainbow elements
- **Layout**: Square watercolor with bright yellows and soft blues

**spread_12_13.png** - Thank You, Wind and Bees! 💨🐝 **(INTERACTIVE)**
- **Spread**: "Thank you, Wind!" and "Thank you, Bees!"
- **Position**: Random floating (currently bottom-left, -15° rotation)
- **Suggested Content**: Bees flying around flowers, gentle breeze effects
- **Layout**: Square watercolor with movement and buzzing life

**spread_14_15.png** - Carrots Begin to Grow! 🥕 **(INTERACTIVE)**
- **Spread**: "Day by day, Bunny thanked with cheer..."
- **Position**: Random floating (currently mid-right, 7° rotation)
- **Suggested Content**: Carrot tops growing bigger, visible progress, hope
- **Layout**: Square watercolor showing growth progression

**spread_16_17.png** - Carrots Appear! 🥕✨ **(INTERACTIVE)**
- **Spread**: "Carrots popped with a bright, bright spark!"
- **Position**: Random floating (currently left-center, -4° rotation)
- **Suggested Content**: Full grown carrots emerging dramatically with magical sparkles
- **Layout**: Square watercolor, dynamic and celebratory

### Act 3: Resolution and Reflection (Spreads 18-19 to 22-24)

**spread_18_19.png** - Sharing with Friends 🐰🦝🐿️
- **Spread**: "Bunny shared her carrots, crunch, crunch, yum!"
- **Position**: Random floating (currently right side, 12° rotation)
- **Suggested Content**: Bunny and forest friends eating carrots together
- **Layout**: Square watercolor, community gathering scene

**spread_20_21.png** - Peaceful Evening ⭐🌙
- **Spread**: "Thanks, dear garden, for all you share..."
- **Position**: Random floating (currently center-left, -9° rotation)
- **Suggested Content**: Bunny in garden at twilight, stars appearing, peaceful mood
- **Layout**: Square watercolor, serene and contemplative

**spread_22_24.png** - Your Turn to Thank! 💝🌈 **(INTERACTIVE)**
- **Spread**: "Thank you makes hearts and gardens grow..."
- **Position**: Center (special final page)
- **Suggested Content**: Colorful, joyful scene with hearts, rainbows, universal gratitude
- **Layout**: Square watercolor, vibrant and uplifting finale

## 🎨 Art Direction Guidelines

### Color Palettes by Section:
- **Act 1**: Earth tones, greens, growing energy
- **Act 2**: Bright, magical colors with sparkles and light
- **Act 3**: Warm, community colors transitioning to peaceful evening hues

### Character Consistency:
- Bunny should be recognizable throughout
- Show emotional journey: frustrated → curious → grateful → joyful
- Other characters: Wise Owl, friendly forest animals

### Interactive Spreads (✨):
These spreads have special sound effects and animations:
- spread_08_09.png - Thank You, Soil! (soil rumbling sounds)
- spread_10_11.png - Thank You, Sun and Rain! (bright sun tones)
- spread_12_13.png - Thank You, Wind and Bees! (buzzing and wind sounds)  
- spread_14_15.png - Carrots Growing! (magical sparkles)
- spread_16_17.png - Carrots Appear! (magical popping sounds)
- spread_22_24.png - Your Turn to Thank! (sparkly finale sounds)

## 📁 How to Add Your Square Watercolor Images

1. **Create Images Folder**:
   ```
   bunny-interactive-book/
   ├── public/
   │   └── images/
   │       ├── spread_01_02.png
   │       ├── spread_03_04.png
   │       ├── spread_04_05.png
   │       ├── spread_06_07.png
   │       ├── spread_08_09.png
   │       ├── spread_10_11.png
   │       ├── spread_12_13.png
   │       ├── spread_14_15.png
   │       ├── spread_16_17.png
   │       ├── spread_18_19.png
   │       ├── spread_20_21.png
   │       └── spread_22_24.png
   ```

2. **Image Specifications**:
   - **Format**: PNG (.png) for transparent watercolor edges
   - **Dimensions**: Perfect square (e.g., 800x800px, 1000x1000px)  
   - **Style**: Watercolor with artistic soft edges
   - **File Size**: Under 2MB each for optimal loading
   - **Naming**: Exactly as shown above (case sensitive)
   - **Background**: Transparent or watercolor bleeding into transparency

3. **Watercolor Edge Treatment**:
   - Your square images will float randomly on colored backgrounds
   - Transparent edges will blend naturally with page backgrounds
   - No white borders should appear with proper PNG transparency

## 🚀 Testing Your Images

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:3000

3. Navigate through pages to see your images in context

4. Test interactive features and sounds

## 🔧 Technical Features

### ✨ What's Already Built:
- **3D Page Turning Animation** - Smooth transitions between pages
- **Contextual Sound Effects** - Different sounds for each page type  
- **Interactive Elements** - Click to trigger special effects
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Progress Indicators** - Page dots and counters
- **Accessibility** - Screen reader support, keyboard navigation

### 🎵 Sound Effects by Page:
- **Soil**: Deep, earthy rumbling
- **Sun**: Warm, bright ascending tones  
- **Rain**: Gentle pitter-patter
- **Wind**: Whooshing breeze effects
- **Bees**: Realistic buzzing sounds
- **Magic**: Sparkly, ascending musical notes
- **Crunch**: Munching/eating sounds
- **Gentle**: Soft, peaceful tones
- **Sparkle**: Twinkling, magical effects

Ready to bring Bunny's story to life! 🐰✨
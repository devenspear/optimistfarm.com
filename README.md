# Optimist Farm

An interactive digital storybook platform that brings character-driven stories to life for young readers and their families.

## About the Project

Optimist Farm is a Next.js-based web application featuring interactive children's books with engaging animations, tap-to-discover moments, and family activities. The platform currently features **Bunny's Thank-You Garden**, a story about gratitude and patience featuring Barnaby Bunny and friends.

### Key Features

**Interactive Reading Experience**
- Full-screen immersive reader with tap-to-play animations
- Cozy narration with read-along functionality
- Seek-and-find game (spot Pippin the Snail on every page!)
- Page-turn animations and interactive story elements

**Book Hub Dashboard**
- Story Seeds: Parent activities to bring story themes to life
- Filtering by activity type (craft, game, conversation) and duration
- Expandable activity cards with materials and instructions
- Mobile-optimized layout for iPad and tablet reading

**Recent Updates (Oct 31, 2024)**
- Streamlined Book Hub layout for better iPad viewing
- Updated book cover imagery to BB1.png
- Added shimmer animation to "Read Together Now" button
- Restructured header hierarchy with book title prominence
- Condensed left column to maximize Story Seeds visibility

## Tech Stack

- **Framework:** Next.js 15.5.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Animations:** Framer Motion
- **Fonts:** Custom Google Fonts (Baloo, Bubblegum, Fredoka)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devenspear/optimistfarm.com.git
cd OptimistFarm1.1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3002](http://localhost:3002) (or the assigned port) in your browser.

### Project Structure

```
app/
├── page.tsx                    # Home page with book library
├── books/
│   └── bunnys-garden/
│       ├── page.tsx           # Book Hub with Story Seeds
│       └── read/
│           └── page.tsx       # Interactive reader
public/
├── Images/
│   ├── BB1.png               # Book cover image
│   └── ...                   # Story page illustrations
tailwind.config.js            # Custom animations & theme
```

## Available Books

### Bunny's Thank-You Garden
**Themes:** Gratitude, Patience
**Character:** Barnaby Bunny
**Story Seeds:** 6 family activities (3 unlocked, 3 premium)

**Activities Include:**
- The "Thank You" Jar (10-min craft)
- Gratitude Scavenger Hunt (5-min game)
- "What Made You Smile Today?" (1-min conversation)

## Development

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Custom Animations

The project uses custom Tailwind animations defined in `tailwind.config.js`:
- `shimmer` - 3s gradient sweep effect
- `bounce-gentle` - 2s gentle bounce
- `pulse-gentle` - 3s soft pulse

## Deployment

This project is deployed on Vercel and accessible at:
- **Production:** https://optimistfarm.com
- **Book Hub:** https://optimistfarm.com/books/bunnys-garden
- **Reader:** https://optimistfarm.com/books/bunnys-garden/read

### Environment Variables

For Vercel deployment automation, configure:

```
VERCEL_TOKEN=your-vercel-api-token
VERCEL_TEAM_ID=your-team-id
BASE_DOMAIN=optimistfarm.com
```

## Design Philosophy

Optimist Farm creates a cozy, engaging reading experience that:
- Encourages parent-child interaction through Story Seeds
- Teaches character values (gratitude, patience, kindness) through story
- Provides multi-sensory engagement with animations and narration
- Offers flexible reading modes (independent or guided)

## Future Roadmap

- Additional interactive books featuring farm characters
- Premium Story Seeds subscription tier
- Progress tracking and reading achievements
- Mobile app versions (iOS/Android)
- Character-specific activity collections

## Contributing

This is a private project by Nancy Jo Spear and Deven Spear. For inquiries, please contact through the website.

## License

Copyright © 2024 Optimist Farm. All rights reserved.

---

**Built with Claude Code** 🤖

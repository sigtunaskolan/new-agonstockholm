# Modern Landing Page Component

A complete, high-impact landing page implementation based on the Claude 3.7 design mockup, featuring a bold industrial aesthetic and modern layout.

## Features

- Full-page implementation matching the HTML/CSS mockup
- Responsive design for all screen sizes
- Sophisticated hover effects and transitions
- Ready-to-use component with sensible defaults
- Follows modern design principles with industrial aesthetic
- Consistent typographic hierarchy

## Sections

1. **Navigation** - Clean, minimal navigation with distinctive CTA
2. **Hero** - Bold, full-screen hero with striking typography
3. **Markets** - Card-based grid showcasing markets/products
4. **Global Reach** - Stats section with accent-colored numbers
5. **Insights** - Additional card section for market insights
6. **Footer** - Structured footer with organized content sections

## Usage

```tsx
import LandingPage from '@/components/LandingPage';

// Define your data (optional - component has defaults)
const markets = [
  {
    id: '1',
    title: 'Non-ferrous Metals',
    description: 'Description here...',
    image: '/images/metals.jpg'
  },
  // Add more markets/products...
];

const stats = [
  { number: '25+', label: 'Countries Served' },
  { number: '₵50M', label: 'Annual Trading Volume' },
  // Add more stats...
];

// Use in your page component
export default function HomePage() {
  return (
    <main>
      <LandingPage 
        markets={markets}
        stats={stats}
        // Optional: insights={insights}
        // Optional: footerSections={footerSections}
      />
    </main>
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| markets | Market[] | No | Array of markets/products to display |
| stats | Stat[] | No | Array of statistics for the Global Reach section |
| insights | Insight[] | No | Array of market insights to display |
| footerSections | FooterSection[] | No | Footer content sections |

## Integration Options

This component can be integrated in three ways:

1. **Complete page replacement** - Use the standalone LandingPage component
2. **Section integration** - Import individual styled components to use in existing pages
3. **Hybrid approach** - Keep existing header/footer and replace the content sections

## Design Origin

Based on a Claude 3.7 web-generated design, following principles of:
- Bold, split-screen layouts
- Industrial material textures
- Minimal color schemes with strong accent
- Clean navigation and clear visual hierarchy
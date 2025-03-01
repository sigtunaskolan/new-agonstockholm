# DesignShowcase Component

A modern, visually striking component for showcasing product categories with a clean, industrial aesthetic.

## Features

- Responsive grid layout with elegant hover effects
- Customizable background header image
- Bold typographic style with primary color accents
- Card-based design with subtle shadows and animations
- Mobile-optimized layout

## Usage

```tsx
import DesignShowcase from '@/components/DesignShowcase';

// Define your product categories
const productCategories = [
  {
    id: '1',
    code: 'Al',
    name: 'Aluminum',
    imageUrl: '/images/products/aluminum.jpg',
    link: '/product/1'
  },
  // Add more categories as needed
];

// Use the component in your page
<DesignShowcase 
  title="Our Products"
  subtitle="Explore our range of high-quality recycling materials"
  categories={productCategories}
  ctaText="View All Products"
  ctaLink="/products"
  backgroundImage="/images/header-background.jpg"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Main title displayed in the header section |
| subtitle | string | No | Optional subtitle displayed under the title |
| categories | ProductCategory[] | Yes | Array of product categories to display |
| ctaText | string | No | Text for the call-to-action button (defaults to "View All Products") |
| ctaLink | string | No | Link for the call-to-action button (defaults to "/products") |
| backgroundImage | string | No | URL for the background header image |

## ProductCategory Interface

```typescript
interface ProductCategory {
  id: string;      // Unique identifier
  code: string;    // Short code (displayed prominently, e.g., chemical symbol)
  name: string;    // Full name of the category
  imageUrl: string; // URL to the category image
  link?: string;   // Optional custom link (defaults to /product/{id})
}
```

## Styling Notes

- Uses the project's theme colors for consistent branding
- Responsive breakpoints match the site's global breakpoints
- Optimized images using Next.js Image component with proper sizing
- Priority loading for above-the-fold images

## Design Inspiration

Based on modern industrial/commodity websites with:
- Bold typography with mixed weights
- Material texture backgrounds
- Limited color palette with strong accent colors
- Clean navigation and clear hierarchy
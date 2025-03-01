# CLAUDE.md - Development Guidelines

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run publish` - Deploy to Heroku (git push heroku main)

## Code Style Guidelines
- **Components**: Use functional components with named exports
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File Structure**: Each component has its own directory with component, container, index files
- **Typing**: Use TypeScript interfaces/types for props and state
- **Styling**: Use @emotion/styled for component styling with theme access
- **Imports**: Group imports by: React, third-party, local components, utils
- **Error Handling**: Use try/catch with console.log for errors
- **Context**: Use React Context API for global state management
- **Responsive Design**: Use theme.breakPoint values for media queries
- **Path Aliases**: Use @/ for imports from src directory

## Conventions
- Separate styling from component logic using styled components
- Use Next.js App Router with [locale] directory for internationalization
- Container components handle layout/styling, presentational components handle UI

### Summary Sat Mar 1 00:13
This is a multilingual e-commerce website for a company called Agon that focuses on scrap recycling. The site is built with Next.js and
  includes internationalization support for English and Swedish.

  Project Summary:

  - Purpose: Company website for Agon, showcasing sustainability and recycling products
  - Framework: Next.js 14 with App Router
  - Languages: TypeScript, React
  - Styling: Emotion + Material UI
  - CMS: Contentful for content management
  - Internationalization: next-intl for English and Swedish support
  - Deployment: Configured for Heroku

  Code Structure:

  1. Component Organization:
    - Follows atomic design with modular components
    - Each component has its own directory with component, container (styling), and index files
  2. Routing:
    - Uses Next.js App Router with [locale] for internationalization
    - Pages include: Home, About, Contact, Sustainability, Product details
  3. State Management:
    - React Context for global state
    - Content fetched from Contentful

  Areas Needing Improvement:

  1. Outdated Dependencies:
    - Next.js 14.0.0 should be updated to the latest version
    - next-intl 2.22.1 is outdated (current is 3.x) which has breaking changes
  2. ✅ Hard-coded API Keys: [FIXED Mar 1, 2025]
    - Contentful API keys moved to .env.local file
    - Environment variables are now used instead of hardcoded values
  3. Type Safety Issues:
    - Multiple any types with eslint-disable comments
    - Inconsistent type definitions
  4. Error Handling:
    - Poor error handling (just console.log)
    - No user feedback for failed API calls
  5. Component Structure:
    - Excessive nesting in component directories makes navigation difficult
    - Could benefit from reorganization
  6. Accessibility:
    - Missing aria attributes and proper semantic HTML
    - No keyboard navigation support
  7. ✅ Performance Issues: [FIXED Mar 1, 2025]
    - ✅ Image optimization implemented with Next.js Image component
    - No server components usage despite using App Router
  8. Internationalization:
    - Old implementation of next-intl needs complete refactoring

  Critical improvements would be updating dependencies, improving type safety, and implementing better
  error handling for API calls.
  
## Environment Variables
The following environment variables need to be set in .env.local for development or in the hosting environment:

- NEXT_PUBLIC_CONTENTFUL_SPACE_ID - Contentful space ID
- NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN - Contentful access token

## Image Optimization Guidelines

Always use Next.js Image component instead of regular `<img>` tags or CSS background images:

### Hero Images
```tsx
<Image 
  src={`/${imagePath}`} 
  fill 
  className="object-cover" 
  alt="Descriptive alt text"
  priority  // For above-the-fold images
  sizes="100vw"
  quality={90}
  placeholder="blur"
  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
/>
```

### Product Grid Images
```tsx
<Image 
  src={imageUrl} 
  alt="Product description"
  fill
  className="object-cover"
  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
  loading="lazy"  // For below-the-fold images
  quality={80}
/>
```

### Content Images
```tsx
<div style={{ position: 'relative', width: '100%', height: '400px', maxWidth: '800px' }}>
  <Image
    src={imageUrl}
    alt="Image description"
    fill
    style={{ objectFit: 'contain' }}
    sizes="(max-width: 768px) 100vw, 800px"
    quality={85}
  />
</div>
```

### next.config.js Configuration
```js
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
      // Add other domains as needed
    ],
  }
}

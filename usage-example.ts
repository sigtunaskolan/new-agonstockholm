// Example usage in a page file (e.g., pages/index.tsx or app/page.tsx)
import DesignShowcase from '@/components/DesignShowcase';

// Mock data for the categories
const productCategories = [
  {
    id: '1',
    code: 'Al',
    name: 'Aluminum',
    imageUrl: '/images/products/aluminum.jpg'
  },
  {
    id: '2',
    code: 'St',
    name: 'Steel',
    imageUrl: '/images/products/steel.jpg'
  },
  {
    id: '3',
    code: 'Tw',
    name: 'Twisted Metal',
    imageUrl: '/images/products/twisted.jpg'
  },
  {
    id: '4',
    code: 'Br',
    name: 'Brass',
    imageUrl: '/images/products/brass.jpg'
  },
  {
    id: '5',
    code: 'Co',
    name: 'Copper',
    imageUrl: '/images/products/copper.jpg'
  },
  {
    id: '6',
    code: 'Sh',
    name: 'Shredded Metal',
    imageUrl: '/images/products/shredded.jpg'
  },
  {
    id: '7',
    code: 'Ca',
    name: 'Cables',
    imageUrl: '/images/products/cables.jpg'
  },
  {
    id: '8',
    code: 'Mi',
    name: 'Mixed Metals',
    imageUrl: '/images/products/mixed.jpg'
  }
];

export default function HomePage() {
  return (
    <main>
      {/* Other components */}
      
      <DesignShowcase 
        title="Our Products"
        subtitle="Check out our latest Product on the current Scraping industry"
        categories={productCategories}
      />
      
      {/* Other components */}
    </main>
  );
}

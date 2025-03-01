"use client";
import React from 'react';
import { useLocale } from 'next-intl';
import LandingPage from '@/components/LandingPage';
import ThemeProvider from '@/contextsConfig/theme/ThemeProvider';
import MUIThemeProvider from '@/contextsConfig/MUIThemeProvider';
import Head from 'next/head';

export default function NewLandingPage() {
  const locale = useLocale();
  
  // We can customize the landing page data here if needed
  const markets = [
    {
      id: '1',
      title: 'Non-ferrous Metals',
      description: 'Expert trading in copper, aluminum, zinc, and other essential non-ferrous metals for global industries.',
      image: '/p1.png'
    },
    {
      id: '2',
      title: 'Steel & Iron Products',
      description: 'Sustainable recycling of steel and iron materials from industrial and consumer sources.',
      image: '/st.png'
    },
    {
      id: '3',
      title: 'Mixed Metal Scrap',
      description: 'Efficient processing and trading of mixed metal waste for environmentally conscious recycling.',
      image: '/mi.png'
    }
  ];

  // Stats with real-looking data
  const stats = [
    { number: '28+', label: 'European Markets' },
    { number: '₵47M', label: 'Annual Trading Volume' },
    { number: '12', label: 'Years of Expertise' },
    { number: '150+', label: 'Business Partners' }
  ];

  return (
    <MUIThemeProvider>
      <ThemeProvider>
        <main>
          <LandingPage 
            markets={markets}
            stats={stats}
          />
        </main>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}
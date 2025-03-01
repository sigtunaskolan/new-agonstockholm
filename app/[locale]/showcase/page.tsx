"use client";
import React from "react";
import { useLocale } from "next-intl";
import ThemeProvider from "@/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "@/contextsConfig/MUIThemeProvider";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import DesignShowcase from "@/components/DesignShowcase";

export default function ShowcasePage() {
  const locale = useLocale();

  // Mock data for the categories
  const productCategories = [
    {
      id: '1',
      code: 'Al',
      name: 'Aluminum',
      imageUrl: '/p1.png',
      link: '/product/1'
    },
    {
      id: '2',
      code: 'St',
      name: 'Steel',
      imageUrl: '/st.png',
      link: '/product/2'
    },
    {
      id: '3',
      code: 'Br',
      name: 'Brass',
      imageUrl: '/br.png',
      link: '/product/3'
    },
    {
      id: '4',
      code: 'Co',
      name: 'Copper',
      imageUrl: '/co.png',
      link: '/product/4'
    },
    {
      id: '5',
      code: 'Ca',
      name: 'Cables',
      imageUrl: '/ca.jpeg',
      link: '/product/5'
    },
    {
      id: '6',
      code: 'Mi',
      name: 'Mixed Metals',
      imageUrl: '/mi.png',
      link: '/product/6'
    },
    {
      id: '7',
      code: 'In',
      name: 'Industrial',
      imageUrl: '/in.png',
      link: '/product/7'
    },
    {
      id: '8',
      code: 'Bi',
      name: 'Birketorp',
      imageUrl: '/bir.png',
      link: '/product/8'
    },
  ];

  return (
    <MUIThemeProvider>
      <ThemeProvider>
        <main>
          <Header />
          <div style={{ paddingTop: '80px' }}>
            <DesignShowcase 
              title="Our Recycling Products"
              subtitle="Explore our range of high-quality metal recycling materials, sourced and processed with sustainability in mind"
              categories={productCategories}
              ctaText="View All Products"
              ctaLink="/product"
              backgroundImage="/sustainability.jpg"
            />
          </div>
          <Footer />
        </main>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}
"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { createClient } from "contentful";
import { useLocale } from "next-intl";
import Hero from "@/components/home/Hero";
import ProductsList from "@/components/home/ProductsList";
import Footer from "@/components/Shared/Footer";
import data from "../../src/contextsConfig/content/data";
import ThemeProvider from "../../src/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "../../src/contextsConfig/MUIThemeProvider";
import { parseHeaderHeadline } from "@/utils/stringUtils";

type HeroProps = {
  headline: Array<any>; // eslint-disable-line
  subHeadline: string;
  bgImg: string;
};

export default function Home() {
  const locale = useLocale();
  const [content, setContent] = useState({
    headline: [],
    subHeadline: "",
    bgImg: "",
  } as HeroProps);
  useEffect(() => {
    fetchData();
  }, []);

  const [productItems, setProductItems] = useState([] as any); // eslint-disable-line

  const fetchData = async () => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    });

    client
      .getEntries()
      .then((response) => {
        let resp;
        if (locale === "sv") {
          resp = response.items.find((item) => item.fields.page === "home_sv");
        } else {
          resp = response.items.find((item) => item.fields.page === "home");
        }

        let tempProductItems = response.items.filter(
          (item) => item.sys.contentType.sys.id === "products"
        );

        tempProductItems = tempProductItems
          .map((item) => {
            const bgImg =
              (item?.fields?.productImage as any)?.fields?.file.url || ""; // eslint-disable-line
            return {
              key: item.sys.id,
              label: item.fields.name,
              bgImg: `https:${bgImg}`,
              id: item.fields.id,
            };
          })
          .sort((a, b) => {
            return Number(a.id) - Number(b.id);
          }) as any; // eslint-disable-line

        const subheadline = resp?.fields?.subheadline as any; // eslint-disable-line
        const contentTemp = {
          headline: parseHeaderHeadline(
            (resp?.fields?.headline as string) || ""
          ),
          subHeadline: subheadline.content[0].content[0].value || "",
          bgImg: data.home.bgImg || "",
        };
        setContent(contentTemp as HeroProps);
        setProductItems(tempProductItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MUIThemeProvider>
      <ThemeProvider>
        <ContentContext.Provider value={content}>
          <main>
            <Hero />
            <ProductsList productItems={productItems} />
            <Footer />
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

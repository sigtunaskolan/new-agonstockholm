"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { createClient } from "contentful";
import { useLocale } from "next-intl";
import SectionsList from "@/Sections/SectionsList";
import Hero from "../../../src/components/sustainability/Hero";
import data from "../../../src/contextsConfig/content/data";
import ThemeProvider from "../../../src/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "../../../src/contextsConfig/MUIThemeProvider";
import { StatSectionProps } from "../../../src/Sections/StatSection/types";
import { parseHeaderHeadline } from "@/utils/stringUtils";
import { formatSectionsArray } from "@/utils/dataFormater";
import Footer from "@/components/Shared/Footer";

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

  const fetchData = async () => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    });

    client
      .getEntries({ content_type: "page" })
      .then((response) => {
        let resp: any; // eslint-disable-line
        if (locale === "sv") {
          resp = response.items.find(
            (item) => item.fields.page === "sustainability_sv"
          );
        } else {
          resp = response.items.find(
            (item) => item.fields.page === "sustainability"
          );
        }

        let sections = formatSectionsArray(resp?.fields?.section) as Array<any>; // eslint-disable-line

        const subheadline = resp?.fields?.subheadline; // eslint-disable-line

        const contentTemp = {
          headline: parseHeaderHeadline(
            (resp?.fields?.headline as string) || ""
          ),
          subHeadline: subheadline.content[0].content[0].value || "",
          bgImg: data.about.bgImg || "",
          sections: sections as Array<StatSectionProps>,
        };
        setContent(contentTemp as HeroProps);
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
            <SectionsList />
            <Footer />
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

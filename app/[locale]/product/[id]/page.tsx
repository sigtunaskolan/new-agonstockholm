"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/product/Hero";
import { createClient } from "contentful";
import MUIThemeProvider from "../../../../src/contextsConfig/MUIThemeProvider";
import ThemeProvider from "../../../../src/contextsConfig/theme/ThemeProvider";
import Description from "@/components/product/ProductList";

type Props = {
  params: {
    id: string;
  };
};

const ProductDetail = ({ params }: Props) => {
  const id = Number(params.id);

  const [name, setName] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [bgImg, setBgImg] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imgesList, setImgesList] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    });

    client
      .getEntries({
        content_type: "products",
      })
      .then((response) => {
        const product = response.items.find((item) => item.fields.id === id);

        const imgesListTemp =
          // eslint-disable-next-line
          (product?.fields?.imgesList as any[])?.map(
            (img) => `https:${img.fields.file.url}`
          ) || [];

        const bgImgTemp = `https:${
          // eslint-disable-next-line
          (product?.fields?.productImage as any)?.fields?.file.url
        }`;

        setName((product?.fields?.name as string) || "");
        setHeadline((product?.fields?.headline as string) || "");
        setBgImg(bgImgTemp);
        setDescription(
          // eslint-disable-next-line
          (product?.fields?.description as any)?.content[0]?.content[0]
            ?.value || ""
        );
        setImgesList(imgesListTemp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MUIThemeProvider>
      <ThemeProvider>
        <main>
          <Hero
            name={name}
            headline={headline}
            bgImg={bgImg}
            description={description}
          />
          <Description name={name} imgesList={imgesList} />
        </main>
      </ThemeProvider>
    </MUIThemeProvider>
  );
};

export default ProductDetail;

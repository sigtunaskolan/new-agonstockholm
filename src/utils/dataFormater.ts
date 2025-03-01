// eslint-disable-next-line
const fromtStatSectionProps = (item: any) => {
  const deskParagraphs =
    item.fields.description?.content?.map(
      (descItem: any) => descItem.content[0].value // eslint-disable-line
    ) || [];

  const description = deskParagraphs.join(";") || "";

  let stat = [];

  if (item.fields.stat) {
    stat = Object.keys(item.fields.stat)
      .sort((a: string, b: string) => {
        return Number(a) - Number(b);
      })
      .map((key) => {
        return {
          label: item.fields.stat[key].label,
          value: item.fields.stat[key].value,
        };
      }) as Array<any>; // eslint-disable-line
  }

  return {
    sectionType: item?.sys?.contentType?.sys?.id || "",
    title: item.fields?.title || "",
    description,
    image: item.fields?.image?.fields?.file?.url || "",
    stat,
  };
};

// eslint-disable-next-line
const fromtSteperSectionProps = (item: any) => {
  let steps = [];

  if (item?.fields?.steps) {
    steps = Object.keys(item?.fields?.steps)
      .sort((a: string, b: string) => {
        return Number(a) - Number(b);
      })
      .map((key) => {
        return {
          title: item?.fields?.steps[key]?.title,
          description: item?.fields?.steps[key]?.description,
        };
      }) as Array<any>; // eslint-disable-line
  }

  return {
    sectionType: item?.sys?.contentType?.sys?.id || "",
    title: item?.fields?.title || "",
    details: item?.fields?.details || "",
    steps,
  };
};

// eslint-disable-next-line
const formatProductsListSection = (item: any) => {
  const tempProduct = item.fields.products
    // eslint-disable-next-line
    .map((product: any) => {
      const bgImg =
        (product?.fields?.productImage as any)?.fields?.file.url || ""; // eslint-disable-line
      return {
        key: product.sys.id,
        label: product.fields.name,
        bgImg: `https:${bgImg}`,
        id: product.fields.id,
      };
    })
    // eslint-disable-next-line
    .sort((a: any, b: any) => {
      return Number(a.id) - Number(b.id);
    }) as any; // eslint-disable-line
  return {
    title: item.fields.title,
    subtitle: item.fields.subtitle,
    products: tempProduct,
  };
};

// eslint-disable-next-line
const formatSectionsArray = (sections: any[]) => {
  return sections.map((item) => {
    if (item?.sys?.contentType?.sys?.id === "statSection") {
      return fromtStatSectionProps(item);
    }

    if (item?.sys?.contentType?.sys?.id === "steperSection") {
      return fromtSteperSectionProps(item);
    }

    if (item?.sys?.contentType?.sys?.id === "productsListSection") {
      return formatProductsListSection(item);
    }

    return "unknown section type";
  });
};

export { formatSectionsArray };

// these data are just for test and they will be replaced by the Contentful data
import { TokenVariant } from "./contentType";

const data = {
  home: {
    headline: [
      {
        token: "Transforming",
        variant: TokenVariant.HIGHLIGHTED,
      },
      {
        token: "Scrap",
        variant: TokenVariant.DEFAULT,
      },

      {
        token: "for",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "a",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "Greener",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "Tomorrow",
        variant: TokenVariant.HIGHLIGHTED,
      },
    ],
    subHeadline:
      "Partner with Agon and pioneer a future of sustainable recycling. Together, we drive value from every scrap, a brighter tomorrow.",
    bgImg: "home.png",
  },
  about: {
    headline: [
      {
        token: "Transforming",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "Scrap",
        variant: TokenVariant.HIGHLIGHTED,
      },
      {
        token: "into",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "Pure",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "Value",
        variant: TokenVariant.HIGHLIGHTED,
      },
    ],
    subHeadline:
      "Partner with Agon and pioneer a future of sustainable recycling.",
    bgImg: "about.png",
  },
  sustainability: {
    headline: [
      {
        token: "Building",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "a",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "Future",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "Together",
        variant: TokenVariant.HIGHLIGHTED,
      },
    ],
    subHeadline:
      "Partner with Agon and pioneer a future of sustainable recycling.",
    bgImg: "sustainability.jpg",
  },
  contact: {
    headline: [
      {
        token: "Reach",
        variant: TokenVariant.DEFAULT,
      },

      {
        token: "us",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "we re",
        variant: TokenVariant.DEFAULT,
      },
      {
        token: "here",
        variant: TokenVariant.HIGHLIGHTED,
      },
      {
        token: "to help!",
        variant: TokenVariant.HIGHLIGHTED,
      },
    ],
    subHeadline:
      "Partner with Agon and pioneer a future of sustainable recycling. Together, we drive value from every scrap, a brighter tomorrow.",
    bgImg: "contact.jpg",
  },
};

export default data;

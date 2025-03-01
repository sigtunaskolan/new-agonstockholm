enum TokenVariant {
  DEFAULT = "DEFAULT",
  HIGHLIGHTED = "HIGHLIGHTED",
  TRANSPARENT = "TRANSPARENT",
}

type BgImg = string;

type HeadlineToken = {
  token: string;
  variant: TokenVariant;
};

type ContentContext = {
  bgImg: BgImg;
  headline: HeadlineToken[];
  subHeadline: string;
  richTextContent?: string; // HTML string for rich text content
};

export { TokenVariant };
export type { BgImg, HeadlineToken };
export default ContentContext;

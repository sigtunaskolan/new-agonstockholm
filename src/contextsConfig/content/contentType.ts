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
};

export { TokenVariant };
export type { BgImg };
export default ContentContext;

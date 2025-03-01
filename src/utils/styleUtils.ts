type ConvereToRGBAProps = {
  rgb: string;
  opacity: number;
};

type CreateBackgroundProps = {
  backgroundImage: string;
  backgroundColor: string;
  gradientMaxOpacity: number;
  gradientMinOpacity: number;
};

export function convertToRGBA({
  rgb,
  opacity,
}: ConvereToRGBAProps): string | null {
  const matches = rgb.match(/\d+/g);
  if (!matches || matches.length !== 3) return null;
  const [r, g, b] = matches.map(Number);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function createBackground({
  backgroundImage,
  backgroundColor,
  gradientMaxOpacity,
  gradientMinOpacity,
}: CreateBackgroundProps) {
  const gradient = `linear-gradient(
    180deg,
    ${convertToRGBA({
      rgb: backgroundColor,
      opacity: gradientMaxOpacity,
    })} 0%,
    ${convertToRGBA({
      rgb: backgroundColor,
      opacity: gradientMinOpacity,
    })} 100%
  )`;

  return `${gradient}, url(${backgroundImage})`;
}

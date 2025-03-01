import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  bgColor?: string;
  height?: string;
  width?: string;
};

const Separator = styled.div<Props>(({ bgColor, height, width }) => {
  const theme = useTheme();
  return {
    width: width || "100%",
    height: height || "2px",
    backgroundColor: bgColor || theme.colors.secondaryDark,
  };
});

export default Separator;

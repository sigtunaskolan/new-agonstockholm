import * as React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useTheme } from "@emotion/react";
import Container from "./container";

type Props = {
  backgroundColor?: string;
  onClick?: () => void;
};

function Button({ onClick }: Props) {
  const theme = useTheme();
  return (
    <Container className="hideToDisplay" onClick={onClick}>
      <DoubleArrowIcon
        sx={{
          fontSize: 20,
          color: theme.colors.primary,
          animation: "bounceHorizontal 2s infinite",
          [`@media (max-width: ${theme.breakPoint.tablet})`]: {
            fontSize: 20,
          },
          [`@media (max-width: ${theme.breakPoint.mobile})`]: {
            fontSize: 20,
          },
          "@keyframes bounceHorizontal": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(0)",
            },
            "40%": {
              transform: "translateX(10px)",
            },
            "60%": {
              transform: "translateX(5px)",
            },
          },
        }}
      />
    </Container>
  );
}

export default Button;

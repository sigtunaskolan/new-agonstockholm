import * as React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Container from "./container";
import { useTheme } from "@emotion/react";

function Button() {
  const theme = useTheme();
  return (
    <a href="#details">
      <Container>
        <KeyboardDoubleArrowDownIcon
          sx={{
            fontSize: 80,
            color: theme.colors.primary,
            animation: "bounceVertical 2s infinite",
            [`@media (max-width: ${theme.breakPoint.tablet})`]: {
              fontSize: 80,
            },
            [`@media (max-width: ${theme.breakPoint.mobile})`]: {
              fontSize: 80,
            },
            "@keyframes bounceVertical": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-10px)",
              },
              "60%": {
                transform: "translateY(-5px)",
              },
            },
          }}
        />
      </Container>
    </a>
  );
}

export default Button;

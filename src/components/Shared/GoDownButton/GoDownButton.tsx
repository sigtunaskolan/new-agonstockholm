import * as React from "react";
import Container from "./container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@emotion/react";

type Props = {
  href: string;
};

function Button({ href }: Props) {
  const theme = useTheme();
  return (
    <a href={href}>
      <Container>
        <KeyboardArrowDownIcon
          sx={{
            fontSize: 40,
            color: theme.colors.white,
            [`@media (max-width: ${theme.breakPoint.tablet})`]: {
              fontSize: "35px",
            },
            [`@media (max-width: ${theme.breakPoint.mobile})`]: {
              fontSize: "30px",
            },
          }}
        />
      </Container>
    </a>
  );
}

export default Button;

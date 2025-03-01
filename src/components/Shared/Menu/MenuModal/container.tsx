import React, { ReactNode } from "react";
import Fade from "@mui/material/Fade";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

type Props = {
  open: boolean;
  children: ReactNode;
};

const ContainerStyled = styled("div")(() => {
  const theme = useTheme();
  return {
    width: "70%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.colors.white,
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.5)",
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderRadius: "16px",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      width: "85%",
      paddingLeft: "25px",
      paddingRight: "25px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      width: "90%",
      paddingLeft: "16px",
      paddingRight: "16px",
      borderRadius: "8px",
    },
  };
});

export default function Container({ open, children }: Props) {
  return (
    <Fade in={open} timeout={500}>
      <ContainerStyled>{children}</ContainerStyled>
    </Fade>
  );
}

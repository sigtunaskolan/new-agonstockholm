import React from "react";
import Container from "./container";
import Logo from "./Logo";
import Menu from "../Menu";
import MainColorContext from "./MainColorContext";
import { useTheme } from "@emotion/react";

type Props = {
  mainColor?: string;
};

export default function Header({ mainColor }: Props) {
  const theme = useTheme();
  return (
    <MainColorContext.Provider value={mainColor || theme.colors.primary}>
      <Container>
        <Logo />
        <Menu />
      </Container>
    </MainColorContext.Provider>
  );
}

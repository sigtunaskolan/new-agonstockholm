import { useContext } from "react";
import styled from "@emotion/styled";
import Theme from "../../../../contextsConfig/theme/themeType";
import MainColorContext from "../MainColorContext";

type Props = {
  theme: Theme;
};

const Container = styled("div")(({ theme }: Props) => {
  const mainColor = useContext(MainColorContext);
  return {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: mainColor || theme.colors.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
  };
});

export default Container;

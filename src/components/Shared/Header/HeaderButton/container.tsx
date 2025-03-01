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
    height: 54,
    width: 54,
    borderRadius: 27,
    backgroundColor: mainColor || theme.colors.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(82, 245, 151, 0.2)",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 4px 15px rgba(82, 245, 151, 0.3)",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      height: 46,
      width: 46,
      borderRadius: 23,
    },
  };
});

export default Container;

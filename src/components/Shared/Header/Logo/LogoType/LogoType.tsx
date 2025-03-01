import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import MainColorContext from "../../MainColorContext";
import Text from "./Text";

const Logo: React.FC = () => {
  const theme = useTheme();
  const mainColor = useContext(MainColorContext);
  return (
    <div>
      <Text color={theme.colors.white}>Ag</Text>
      <Text color={mainColor}>on</Text>
    </div>
  );
};

export default Logo;

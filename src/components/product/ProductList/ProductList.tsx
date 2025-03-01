import React from "react";
import { useTheme } from "@emotion/react";
import Container from "./container";
import Text from "../Text";
import { Box } from "@mui/material";
import ProductGrid from "./productsGrid/ProductsGrid";

type Props = {
  name: string;
  imgesList: string[];
};

export default function ProductList({ name, imgesList }: Props) {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: theme.colors.white }}
    >
      <Container id="productList">
        <Box
          pl={{
            xs: "20px",
            sm: "40px",
            md: "100px",
          }}
          pr={{
            xs: "20px",
            sm: "40px",
            md: "100px",
          }}
          pt="50px"
          pb="50px"
          bgcolor="#000"
        >
          <Text textVariant="title" color="#ff">
            {`Our latest  ${name}`}
          </Text>
        </Box>

        <ProductGrid imgesList={imgesList} />
      </Container>
    </Box>
  );
}

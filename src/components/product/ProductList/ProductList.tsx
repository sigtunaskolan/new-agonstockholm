import React from "react";
import { useTheme } from "@emotion/react";
import Container from "./container";
import Text from "../Text";
import { Box, Fade } from "@mui/material";
import ProductGrid from "./productsGrid/ProductsGrid";

type Props = {
  name: string;
  imgesList: string[];
};

export default function ProductList({ name, imgesList }: Props) {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    setVisible(true);
  }, []);
  
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{ 
        backgroundColor: theme.colors.silverGray + "08",
        paddingTop: { xs: "40px", md: "80px" },
        paddingBottom: { xs: "60px", md: "120px" }
      }}
      id="productList"
    >
      <Fade in={visible} timeout={800}>
        <Container>
          <Box
            pl={{
              xs: "20px",
              sm: "40px",
              md: "60px",
            }}
            pr={{
              xs: "20px",
              sm: "40px",
              md: "60px",
            }}
            py={{
              xs: "30px",
              md: "40px",
            }}
            mb={{
              xs: "20px",
              md: "40px",
            }}
            bgcolor={theme.colors.primary}
            borderRadius="4px"
            sx={{
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              position: "relative",
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                width: "100px",
                height: "100%",
                background: `linear-gradient(to left, ${theme.colors.primary}, transparent)`,
              },
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: `${theme.colors.secondary}40`,
              }
            }}
          >
            <Text textVariant="title" color="#fff">
              {`Our latest ${name}`}
            </Text>
          </Box>

          <ProductGrid imgesList={imgesList} />
        </Container>
      </Fade>
    </Box>
  );
}

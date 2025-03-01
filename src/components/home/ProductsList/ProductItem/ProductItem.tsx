import React from "react";
import { Box, Fade } from "@mui/material";
import Container from "./container";
import Text from "../Text";
import Button from "./Button";
import Link from "next/link";

type Props = {
  bgImg: string;
  label: string;
  id: string;
};

export default function ProductItem({ bgImg, label, id }: Props) {
  return (
    <Container bgImg={bgImg}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ 
          width: "100%",
          padding: "20px",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            padding: "8px",
            height: "36px",
          }}
        >
          <Text data-fulltext={label.substring(2)} className="streachOnHover">
            {`${label[0]}${label[1]}`}
          </Text>
        </Box>
        <Link href={`/product/${id}`} style={{ textDecoration: 'none' }}>
          <Button />
        </Link>
      </Box>
    </Container>
  );
}

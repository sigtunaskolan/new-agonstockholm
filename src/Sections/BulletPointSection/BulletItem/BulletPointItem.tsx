import React from "react";
import Container from "./container";
import { Box } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Text from "../../../components/Shared/Text";

type Props = {
  title: string;
  description: string;
};

export default function BulletPointItem({ title, description }: Props) {
  let Icon = RecyclingIcon;

  if (title === "Circular Economy") {
    Icon = CurrencyExchangeIcon;
  }

  if (title === "Waste Minimisation") {
    Icon = TrendingDownIcon;
  }

  return (
    <Box
      ml={{
        lg: 2,
        md: 2,
        sm: 0,
        xs: 0,
      }}
      mr={{
        lg: 2,
        md: 2,
        sm: 0,
        xs: 0,
      }}
      mt={{
        lg: 0,
        md: 0,
        sm: 2,
        xs: 2,
      }}
      mb={{
        lg: 0,
        md: 0,
        sm: 2,
        xs: 2,
      }}
    >
      <Container id="form">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="72px"
          height="72px"
          borderRadius="50%"
          bgcolor="#011f53"
        >
          <Icon sx={{ fontSize: 40 }} />
        </Box>
        <Box mt={2} sx={{ textAlign: "center" }}>
          <Text textVariant="statValue">{title}</Text>
        </Box>
        <Box mt={1} sx={{ textAlign: "center", maxWidth: "300px" }}>
          <Text textVariant="statLabel">{description}</Text>
        </Box>
      </Container>
    </Box>
  );
}

import React, { useContext } from "react";
import Container from "./container";
import Box from "@mui/material/Box";
import ContentContext from "@/contextsConfig/content/ContentContext";
import Text from "../../components/Shared/Text";
import BulletPointItem from "./BulletItem";
import { BulletPointSectionProps } from "./type";

type Props = Omit<BulletPointSectionProps, "sectionType">;

export default function BulletPointSection({ title, details, steps }: Props) {
  const content: any = useContext(ContentContext); // eslint-disable-line
  return (
    <Container id="form">
      <Box
        display="flex"
        width="100%"
        maxWidth="1250px"
        alignItems="center"
        flexDirection="column"
      >
        <Text textVariant="subtitle">{title}</Text>
        <Box
          mt={2}
          sx={{ width: "100%", maxWidth: "600px", textAlign: "center" }}
        >
          <Text textVariant="paraghraph">{details}</Text>
        </Box>
        <Box
          display="flex"
          flexDirection={{
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          }}
          mt={{
            lg: 8,
            md: 8,
            sm: 2,
            xs: 2,
          }}
        >
          {steps?.map((step, index) => (
            <BulletPointItem
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

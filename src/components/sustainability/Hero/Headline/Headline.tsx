"use client";
import React, { useContext } from "react";
import Container from "./container";
import Text from "./Text";
import ContentContext from "@/contextsConfig/content/ContentContext";

export default function Headline() {
  const content = useContext(ContentContext);
  return (
    <Container>
      {content.headline.map((element, index) => (
        <Text key={index} color={element.variant}>
          {element.token}
        </Text>
      ))}
    </Container>
  );
}

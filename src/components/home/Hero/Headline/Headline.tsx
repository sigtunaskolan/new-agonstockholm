"use client";
import React, { useContext } from "react";
import Container from "./container";
import Text from "./Text";
import ContentContext from "@/contextsConfig/content/ContentContext";
import styled from "@emotion/styled";

// Create a styled h1 element with proper spacing
const HeadlineWrapper = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.1;
`;

export default function Headline() {
  const content = useContext(ContentContext);
  return (
    <Container>
      <HeadlineWrapper>
        {content.headline.map((element, index) => (
          <Text key={index} color={element.variant}>
            {element.token}
          </Text>
        ))}
      </HeadlineWrapper>
    </Container>
  );
}

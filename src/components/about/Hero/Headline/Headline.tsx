"use client";
import React, { useContext } from "react";
import Container from "./container";
import Text from "./Text";
import ContentContext from "@/contextsConfig/content/ContentContext";
import * as S from '@/components/LandingPage/container';

export default function Headline() {
  const content = useContext(ContentContext);
  
  if (!content.headline || content.headline.length === 0) {
    return (
      <S.H1>
        About <S.Span>Agon</S.Span> Stockholm
      </S.H1>
    );
  }
  
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

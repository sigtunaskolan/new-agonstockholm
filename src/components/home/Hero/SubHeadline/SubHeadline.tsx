"use client";
import React, { useContext } from "react";
import Container from "./container";
import Paragraph from "./Paragraph";
import ContentContext from "@/contextsConfig/content/ContentContext";

export default function SubHeadline() {
  const content = useContext(ContentContext);
  return (
    <Container>
      <Paragraph>{content.subHeadline}</Paragraph>
    </Container>
  );
}

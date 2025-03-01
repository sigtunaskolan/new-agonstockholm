import React, { useContext } from "react";
import { useTranslations } from "next-intl";
import StatSection from "@/Sections/StatSection";
import BulletPointSection from "@/Sections/BulletPointSection";
import ContentContext from "@/contextsConfig/content/ContentContext";
import Container from "./container";
import Text from "../../components/Shared/Text";
import { StatSectionProps } from "../StatSection/types";
import { BulletPointSectionProps } from "../BulletPointSection/type";

type Section = StatSectionProps | BulletPointSectionProps;

export default function Details() {
  const t = useTranslations("Sustainability");
  const content: any = useContext(ContentContext); // eslint-disable-line
  const sections: StatSectionProps[] = content.sections; // eslint-disable-line

  return (
    <Container id="details">
      <Text textVariant="title">{t("WHY_AGON")}</Text>
      {sections?.map((section: Section, index) => {
        if (section.sectionType === "statSection") {
          return (
            <StatSection
              key={index}
              title={section.title}
              description={section.description}
              stat={section.stat}
              image={section.image}
            />
          );
        }
        return (
          <BulletPointSection
            key={index}
            title={section.title}
            details={section.details}
            steps={section.steps}
          />
        );
      })}
    </Container>
  );
}

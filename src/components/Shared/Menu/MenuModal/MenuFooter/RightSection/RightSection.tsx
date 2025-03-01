import React from "react";
import { useTranslations } from "next-intl";
import Container from "./container";
import Text, { TextVariant } from "../../shared/Text";

export default function LeftSection() {
  const t = useTranslations("Menu");
  return (
    <Container
      renderTopElement={() => (
        <Text variant={TextVariant.FOOTER_LABEL}>{t("ADDRESS")}</Text>
      )}
      renderBottomElement={() => (
        <Text variant={TextVariant.FOOTER_VALUE}>
          Norrlandsgatan 10 111 43 Stockholm
        </Text>
      )}
    />
  );
}

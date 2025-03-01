import React from "react";
import { useTranslations } from "next-intl";
import Container from "./container";
import Text, { TextVariant } from "../../shared/Text";
import SMList from "./SMList";

export default function LeftSection() {
  const t = useTranslations("Menu");
  return (
    <Container
      renderTopElement={() => (
        <Text variant={TextVariant.FOOTER_LABEL}>{t("REACH_OUT")}</Text>
      )}
      renderBottomElement={() => <SMList />}
    />
  );
}

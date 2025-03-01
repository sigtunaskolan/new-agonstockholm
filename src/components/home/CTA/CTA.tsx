import React from "react";
import Link from "next/link";
import { useTheme } from "@emotion/react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Container from "./container";
import Button from "./Button";

export default function CTA() {
  const theme = useTheme();
  const t = useTranslations("Home");
  const locale = useLocale();
  const buttons = [
    { text: t("GET_IN_TOUCH"), backgroundColor: theme.colors.primary },
    { text: t("LERAN_MORE"), backgroundColor: theme.colors.white },
  ];

  return (
    <Container
      childrenArray={[
        <a href="#productsList" key={0}>
          <Button
            text={buttons[1].text}
            backgroundColor={buttons[1].backgroundColor}
            key={1}
            withIcon
          />
        </a>,
        <Link href={"/contact"} locale={locale} key={2}>
          <Button
            text={buttons[0].text}
            backgroundColor={buttons[0].backgroundColor}
            key={0}
          />
        </Link>,
      ]}
    />
  );
}

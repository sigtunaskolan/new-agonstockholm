import React from "react";
import { useTranslations } from "next-intl";
import Container from "./container";

export default function MenuList() {
  const t = useTranslations("Menu");
  const items = [
    { title: t("HOME"), subtitle: "(01)", link: "/" },
    { title: t("ABOUT"), subtitle: "(02)", link: "/about" },
    { title: t("SUSTAINABILITY"), subtitle: "(03)", link: "/sustainability" },
    { title: t("CONTACT"), subtitle: "(04)", link: "/contact" },
  ];

  return <Container items={items} />;
}

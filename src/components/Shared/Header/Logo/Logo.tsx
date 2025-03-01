import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Container from "./container";
import LogoType from "./LogoType";

const Logo: React.FC = () => {
  const locale = useLocale();
  return (
    <Link href={"/"} locale={locale || "en"}>
      <Container>
        <LogoType />
      </Container>
    </Link>
  );
};

export default Logo;

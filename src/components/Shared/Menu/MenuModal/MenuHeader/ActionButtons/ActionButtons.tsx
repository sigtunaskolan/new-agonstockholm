import * as React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import HideOnMobile from "@/components/Shared/HideOnMobile";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Container from "./container";
import Text, { TextVariant } from "../../shared/Text";
import ButtonContainer from "../../shared/ButtonContainer";
import MenuButton from "../../shared/MenuButton";

type Props = {
  onClose: () => void;
};

export default function ActionButtons({ onClose }: Props) {
  const theme = useTheme();
  const t = useTranslations("Menu");
  return (
    <Container
      childrenArray={[
        <HideOnMobile key={0}>
          <Link href="/contact">
            <ButtonContainer key={0}>
              <div style={{ marginRight: "12px" }}>
                <Text variant={TextVariant.TEXT_BUTTON}>{t("LET_TALK")}</Text>
              </div>
              <ArrowForwardIcon sx={{ color: theme.colors.secondary }} />
            </ButtonContainer>
          </Link>
        </HideOnMobile>,
        <MenuButton key={0} />,
        <ButtonContainer onClick={onClose} key={1}>
          <CloseIcon
            sx={{
              color: theme.colors.secondary,
              [`@media (max-width: ${theme.breakPoint.tablet})`]: {
                fontSize: "20px",
              },
              [`@media (max-width: ${theme.breakPoint.mobile})`]: {
                fontSize: "18px",
              },
            }}
          />
        </ButtonContainer>,
      ]}
    />
  );
}

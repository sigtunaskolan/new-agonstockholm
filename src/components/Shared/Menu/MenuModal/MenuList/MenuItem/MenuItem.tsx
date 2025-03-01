import React from "react";
import { useTheme } from "@emotion/react";
import Link from "next-intl/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "./container";
import Text, { TextVariant } from "../../shared/Text";
import ButtonContainer from "../../shared/ButtonContainer";

type Props = {
  title: string;
  subtitle: string;
  link: string;
  isSelected?: boolean;
};

export default function MenuItem({ title, subtitle, link, isSelected }: Props) {
  const theme = useTheme();
  return (
    <Link href={link}>
      <Container>
        <div>
          <Text
            color={isSelected ? theme.colors.active : theme.colors.secondary}
            variant={TextVariant.ITEM_MENU_TITLE}
          >
            {title}
          </Text>
          <span style={{ marginLeft: "8px", marginBottom: "4px" }}>
            <Text
              color={isSelected ? theme.colors.active : theme.colors.secondary}
              variant={TextVariant.ITEM_MENU_SUBTITLE}
            >
              {subtitle}
            </Text>
          </span>
        </div>
        <ButtonContainer isSelected={isSelected}>
          <ArrowForwardIcon
            sx={{
              color: isSelected ? theme.colors.active : theme.colors.secondary,
              [`@media (max-width: ${theme.breakPoint.tablet})`]: {
                fontSize: "20px",
              },
              [`@media (max-width: ${theme.breakPoint.mobile})`]: {
                fontSize: "18px",
              },
            }}
          />
        </ButtonContainer>
      </Container>
    </Link>
  );
}

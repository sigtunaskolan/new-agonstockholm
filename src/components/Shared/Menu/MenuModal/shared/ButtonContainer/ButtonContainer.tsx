import React, { ReactNode, MouseEventHandler } from "react";
import styled from "@emotion/styled";

type Props = {
  isSelected?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  paddingRight?: string;
};

function ButtonContainer({
  isSelected,
  children,
  onClick,
  paddingRight,
}: Props) {
  const ButtonContainerStyled = styled.div(({ theme }) => {
    return {
      height: "50px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: isSelected ? theme.colors.active : theme.colors.secondary,
      paddingTop: "16px",
      paddingBottom: "16px",
      paddingLeft: "20px",
      paddingRight: paddingRight || "20px",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      "&:hover": {
        color: theme.colors.hoverGray,
        borderColor: theme.colors.hoverGray,
      },
      "&:hover *": {
        color: theme.colors.hoverGray,
        borderColor: theme.colors.hoverGray,
      },
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        height: "40px",
        paddingTop: "12px",
        paddingBottom: "12px",
        paddingLeft: "16px",
        paddingRight: "16px",
        borderRadius: "25px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        height: "35px",
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
    };
  });

  return (
    <ButtonContainerStyled onClick={onClick}>{children}</ButtonContainerStyled>
  );
}

export default ButtonContainer;

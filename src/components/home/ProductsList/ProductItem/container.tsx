import React from "react";
import styled from "@emotion/styled";

type ItemContainerStyledProps = React.HTMLAttributes<HTMLDivElement> & {
  bgImg?: string;
};

const ItemContainer = styled.div<ItemContainerStyledProps>(
  ({ theme, bgImg = "" }) => {
    return {
      flex: 1,
      width: "25%",
      height: "100%",
      display: "flex",
      alignItems: "flex-end",
      transition: "all 0.5s ease",
      backgroundColor: "red",
      background: `linear-gradient(to top, rgba(20, 45, 68, 0.8), rgba(20, 45, 68, 0.1)), url('${bgImg}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      "& .streachOnHover::after": {
        content: "attr(data-fulltext)",
        display: "none",
      },
      "& .hideToDisplay": {
        display: "none",
      },
      "&:hover": {
        flexGrow: 4,
        "& .streachOnHover::after": {
          display: "inline-block",
        },
        "& div.hideToDisplay": {
          display: "inherit",
        },
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        flexDirection: "column",
        width: "100%",
        height: "25%",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        flexGrow: 1,
        "&:hover": {
          flexGrow: 1,
        },
        "& .streachOnHover::after": {
          content: "attr(data-fulltext)",
          display: "inline-block",
        },
        "& .hideToDisplay": {
          display: "inherit",
        },
      },
    };
  }
);

export default ItemContainer;

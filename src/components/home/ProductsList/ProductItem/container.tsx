import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

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
      position: "relative",
      isolation: "isolate",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      overflow: "hidden",
      "& .streachOnHover::after": {
        content: "attr(data-fulltext)",
        display: "none",
        transition: "all 0.3s ease",
      },
      "& .hideToDisplay": {
        display: "none",
        opacity: 0,
        transition: "opacity 0.5s ease",
      },
      "& .productOverlay": {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(20, 45, 68, 0.9), rgba(20, 45, 68, 0.1))",
        zIndex: 1,
        transition: "all 0.5s ease",
      },
      "&:hover": {
        flexGrow: 4,
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
        zIndex: 10,
        "& .streachOnHover::after": {
          display: "inline-block",
        },
        "& div.hideToDisplay": {
          display: "inherit",
          opacity: 1,
        },
        "& .productOverlay": {
          background: "linear-gradient(to top, rgba(20, 45, 68, 0.95), rgba(20, 45, 68, 0.3))",
        },
        "& .productImage": {
          transform: "scale(1.1)",
        },
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        flexDirection: "column",
        width: "100%",
        height: "250px",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        flexGrow: 1,
        "&:hover": {
          flexGrow: 1,
          "& .productImage": {
            transform: "scale(1.05)",
          },
        },
        "& .streachOnHover::after": {
          content: "attr(data-fulltext)",
          display: "inline-block",
        },
        "& .hideToDisplay": {
          display: "inherit",
          opacity: 1,
        },
      },
    };
  }
);

type ProductItemContainerProps = {
  bgImg: string;
  children: React.ReactNode;
};

const ProductItemContainer: React.FC<ProductItemContainerProps> = ({ bgImg, children }) => {
  return (
    <ItemContainer bgImg={bgImg}>
      <div className="productImage" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image 
          src={bgImg}
          alt="Product background"
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 33vw, 25vw"
          className="object-cover"
          quality={85}
        />
      </div>
      <div className="productOverlay"></div>
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {children}
      </div>
    </ItemContainer>
  );
};

export default ProductItemContainer;

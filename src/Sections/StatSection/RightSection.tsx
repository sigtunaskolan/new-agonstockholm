import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import Image from "next/image";

type Props = {
  image: string;
};

export default function RightSection({ image }: Props) {
  const theme = useTheme();
  return (
    <Box
      ml={{
        lg: 8,
        md: 0,
        sm: 0,
        xs: 0,
      }}
      mb={{
        lg: 0,
        md: 6,
        sm: 6,
        xs: 6,
      }}
      width="100%"
    >
      <div
        style={{
          height: "600px",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src={`https://${image}`}
          alt="Statistical visualization"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          loading="lazy"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image 
            src="/points.svg" 
            alt="Icon"
            width={24}
            height={24}
            priority
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "160px",
              width: "160px",
              backgroundColor: theme.colors.primary,
              alignSelf: "flex-end",
            }}
          />
          <div
            style={{
              height: "160px",
              width: "160px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
            }}
          />
        </div>
      </div>
    </Box>
  );
}

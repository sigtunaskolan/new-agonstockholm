import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";

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
          backgroundImage: `url(https://${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src="/points.svg" alt="Icon" />
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

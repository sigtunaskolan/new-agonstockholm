import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@emotion/react";

const iconStyle = {
  width: "24px",
  height: "24px",
  fill: "currentColor",
};

function SocialMedia() {
  const theme = useTheme();
  
  return (
    <Box
      display="flex"
      gap={2}
      sx={{
        "& .MuiIconButton-root": {
          color: theme.colors.white,
          transition: "all 0.2s ease",
          "&:hover": {
            color: theme.colors.primary,
            transform: "translateY(-3px)",
          },
        },
      }}
    >
      <Tooltip title="LinkedIn">
        <IconButton
          aria-label="LinkedIn"
          component="a"
          href="https://www.linkedin.com/company/agon-stockholm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Facebook">
        <IconButton
          aria-label="Facebook"
          component="a"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
          </svg>
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Instagram">
        <IconButton
          aria-label="Instagram"
          component="a"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
          </svg>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default SocialMedia;
import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import Link from "next-intl/link";
import { useLocale } from "next-intl";
import Text, { TextVariant } from "../Text";

export default function BasicMenu() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const locale = useLocale();
  const [currentPath, setCurrentPath] = useState("/");
  useEffect(() => {
    if (typeof window !== "undefined") {
      let temp = "";
      if (window.location.pathname === "/sv") {
        temp = "/";
      } else {
        temp = window.location.pathname;
        temp = temp.replace("/sv", "");
      }
      setCurrentPath(temp);
    }
  }, []);
  const open = Boolean(anchorEl);
  const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const langs = [
    { code: "en", name: "EN", link: currentPath },
    { code: "sv", name: "SV", link: currentPath },
  ];

  return (
    <div>
      <Button
        onClick={handleClick}
        sx={{
          borderColor: theme.colors.secondary,
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "30px",
          paddingLeft: "15px",
        }}
        id={"basic-button"}
      >
        <div style={{ marginRight: "6px" }}>
          <Text variant={TextVariant.TEXT_BUTTON}>{locale}</Text>
        </div>
        <ArrowDropDownIcon sx={{ color: theme.colors.secondary }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {langs.map((lang) => (
          <Link key={lang.code} href={lang.link} locale={lang.code}>
            <MenuItem selected={lang.code === locale} onClick={handleClose}>
              {lang.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

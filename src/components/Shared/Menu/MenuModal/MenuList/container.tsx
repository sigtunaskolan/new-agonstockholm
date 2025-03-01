import React from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import { useLocale } from "next-intl";
import MenuItem from "./MenuItem";

type Item = {
  title: string;
  subtitle: string;
  link: string;
  isSelected?: boolean;
};

type Props = {
  items: Item[];
};

export default function Container({ items }: Props) {
  let pathname = usePathname();
  const locale = useLocale();
  if (locale === "sv") {
    if (pathname === "/sv") {
      pathname = "/";
    } else {
      pathname = pathname.replace("sv/", "");
    }
  }

  return (
    <div>
      {items.map((item, index) => {
        const mb = index === items.length - 1 ? 0 : 4;
        return (
          <Box key={index} mb={mb}>
            <MenuItem
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              isSelected={pathname === item.link}
            />
          </Box>
        );
      })}
    </div>
  );
}

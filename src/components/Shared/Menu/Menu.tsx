import React, { useState } from "react";
import MenuButton from "../Header/HeaderButton";
import MenuModal from "./MenuModal";
import Container from "./container";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <MenuButton onClick={toggleDrawer} />
      <MenuModal open={open} onClose={toggleDrawer} />
    </Container>
  );
}

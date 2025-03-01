import * as React from "react";
import Modal from "@mui/material/Modal";
import Container from "./container";
import MenuHeader from "./MenuHeader";
import Separator from "../../Separator";
import MenuList from "./MenuList";
import MenuFooter from "./MenuFooter";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function BasicModal({ open, onClose }: Props) {
  return (
    <Modal
      disableAutoFocus
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          style: { backgroundColor: "rgba(10, 40, 40, 0.9)" },
          timeout: 500,
        },
      }}
    >
      <Container open={open}>
        <MenuHeader onClose={onClose} />
        <div style={{ marginTop: "16px", marginBottom: "25px" }}>
          <Separator />
        </div>
        <MenuList />
        <div style={{ marginTop: "25px", marginBottom: "25px" }}>
          <Separator />
        </div>
        <MenuFooter />
      </Container>
    </Modal>
  );
}

import styled from "@emotion/styled";

const Container = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  padding: "1.8rem 6%",
  background: "rgba(3, 7, 18, 0.7)",  // Using secondary color with transparency
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});

export default Container;

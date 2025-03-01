import styled from "@emotion/styled";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  "&:hover *": {
    color: theme.colors.hoverGray,
    borderColor: theme.colors.hoverGray,
  },
}));

export default Container;

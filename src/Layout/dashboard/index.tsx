import React from "react";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  //   [theme.breakpoints.up("lg")]: {
  display: "flex",
  minHeight: "100%",
  //   },
}));

export function DashboardLayout() {
  return <RootStyle></RootStyle>;
}

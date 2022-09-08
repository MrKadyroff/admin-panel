import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar } from "@mui/material";
import cssStyles from "../../../utils/cssStyle";

type RootStyleProps = {
  isCollapse: boolean | undefined;
};

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isCollapse",
})<RootStyleProps>(({ isCollapse, theme }) => ({
  boxShadow: "none",
  ...cssStyles(theme).bgBlur(),
  transition: theme.transitions.create("width", {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("lg")]: {
    width: "calc(100% - 281px)",
    ...(isCollapse && {
      width: "calc(100% - 88px)",
    }),
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: 64,
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 5),
    minHeight: 92,
  },
}));

export default function DashboardHeader() {}

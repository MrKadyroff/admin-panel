import { forwardRef, ReactNode } from "react";
// import { Helmet } from "react-helmet-async";
// @mui
import { Box, BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = "", ...other }, ref) => (
    <Box ref={ref} {...other}>
      {/* <Helmet> */}
      <title>{`${title} | ADMIN`}</title>
      {/* </Helmet> */}
      {children}
    </Box>
  )
);

export default Page;

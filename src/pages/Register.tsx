import { styled } from "@mui/material/styles";
import { Box, Card, Stack, Container, Typography } from "@mui/material";
// import {
//   Page,
//   Logo,
//   //   useResponsive,
//   //   MaintenanceIllustration as MainIllustration,
// } from "../ui-kit/components";
import Page from "../ui-kit/components/Page";
import Logo from "../ui-kit/components/Logo";
import LoginForm from "../sections/auth/login/LoginForm";
import RegisterForm from "../sections/auth/register/RegisterForm";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  maxHeight: "100%",
  //   height: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  maxHeight: "100%",
  height: "100%",
  minHeight: "100%",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function Register() {
  //   const mdUp = useResponsive("up", "md");

  return (
    <Page title="Вход">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>
        {/* {mdUp && ( */}
        <ContentStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Регистрация
          </Typography>
          <Box px={3}>
            <img src="assets/img/RegisterImg.svg" />
            {/* <MainIllustration /> */}
          </Box>
        </ContentStyle>
        {/* )} */}
        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                  Начните абсолютно бесплатно
                </Typography>
              </Box>
            </Stack>

            <RegisterForm />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}

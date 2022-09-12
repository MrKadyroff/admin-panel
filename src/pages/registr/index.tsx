import { styled } from "@mui/material/styles";
import { Box, Stack, Container, Typography } from "@mui/material";
import { Logo, Page } from "../../components";
import RegisterForm from "../../sections/register/RegisterForm";

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

    return (
        <Page title="Вход">
            <RootStyle>
                <HeaderStyle>
                    <Logo />
                </HeaderStyle>
                <ContentStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Регистрация
                    </Typography>
                    <Box px={3}>
                        <img src="icons/register.svg" />
                    </Box>
                </ContentStyle>
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

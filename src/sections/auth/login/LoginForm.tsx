import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Stack,
  Alert,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Container,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PasswordHide from "@mui/icons-material/VisibilityOffOutlined";
import PasswordShow from "@mui/icons-material/VisibilityOutlined";

type InitialValues = {
  email: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

export default function LoginForm() {
  const [showPassword, setShowpassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Container style={{ maxHeight: "100%", width: "100%", overflow: "hidden" }}>
      <form autoComplete="off">
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="email"
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="пароль"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowpassword(!showPassword)}
                    edge="end"
                  >
                    {/* <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  /> */}
                    {showPassword ? <PasswordShow /> : <PasswordHide />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                style={{ color: "green" }}
                onChange={() => setRemember(!remember)}
              />
            }
            label="Запомнить пароль"
          />
          <Link
            component={RouterLink}
            variant="subtitle2"
            style={{ color: "green" }}
            to={"/forgot-password"}
          >
            Забыли пароль?
          </Link>
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          color="success"
        >
          Войти
        </LoadingButton>
      </form>
    </Container>
  );
}

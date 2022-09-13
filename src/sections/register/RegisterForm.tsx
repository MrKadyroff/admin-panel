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
  Typography,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PasswordHide from "@mui/icons-material/VisibilityOffOutlined";
import PasswordShow from "@mui/icons-material/VisibilityOutlined";
import { Dialog } from "@mui/material";

type InitialValues = {
  email: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

export default function RegisterForm() {
  const [showPassword, setShowpassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [offert, setOffert] = useState(false);

  return (
    <Container style={{ maxHeight: "100%", width: "100%", overflow: "hidden" }}>
      <Dialog open={offert} onClose={() => setOffert(false)}>
        <DialogTitle>Договор оферты</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
      <form autoComplete="off">
        <Typography variant="h6">Контакты</Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="Имя"
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="Фамилия"
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="email"
          />
        </Stack>
        <Typography variant="h6">Реквизиты компании</Typography>
        <Stack spacing={3}>
          <TextField fullWidth type="text" label="Название компании" />
          <TextField fullWidth type="text" label="Адрес компании" />
          <TextField fullWidth type="text" label="Банк" />
          <TextField fullWidth type="text" label="Адрес компании" />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ my: 2 }}>
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="БИН"
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="БИК"
          />
        </Stack>
        <Stack spacing={3} sx={{ my: 2 }}>
          <TextField fullWidth type="text" label="ИИК" />
          <TextField fullWidth type="text" label="ФИО руководителя" />
          <TextField fullWidth type="text" label="Контактный номер" />
        </Stack>

        <Typography variant="h6">Пароль</Typography>
        <Stack spacing={3} sx={{ my: 2 }}>
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
                    {showPassword ? <PasswordShow /> : <PasswordHide />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
                    {showPassword ? <PasswordShow /> : <PasswordHide />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack sx={{ my: 2 }}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            color="success"
          >
            Регистрация
          </LoadingButton>

          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                style={{ color: "green" }}
                onChange={() => setRemember(!remember)}
              />
            }
            label="прочитал условия и согласен с "
          />

          <Typography align="center" style={{ marginTop: 10 }}>
            <span
              style={{
                color: "#00AB55",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setOffert(!offert)}
            >
              Договором оферты.
            </span>
          </Typography>
        </Stack>
      </form>
    </Container>
  );
}

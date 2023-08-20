import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string().required("Login is required"),
  password1: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  password2: yup
    .string()
    .oneOf([yup.ref("password1"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function SignUp({ switchTab }) {
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleBtnChange = (data) => {
    clearErrors();

    schema
      .validate(data, { abortEarly: false })
      .then(() => {
        if (data.login && data.password2) {
          localStorage.setItem("user login", data.login);
          localStorage.setItem("user password", data.password2);
          switchTab();
        }
      })
      .catch((validationErrors) => {
        validationErrors.inner.forEach((error) => {
          setError(error.path, { message: error.message });
        });
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleBtnChange)}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Controller
        name="login"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="Login"
            variant="outlined"
            error={!!errors.login}
            helperText={errors.login?.message}
          />
        )}
      />
      <br />
      <Controller
        name="password1"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            error={!!errors.password1}
            helperText={errors.password1?.message}
          />
        )}
      />
      <br />
      <Controller
        name="password2"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            error={!!errors.password2}
            helperText={errors.password2?.message}
          />
        )}
      />
      <br />
      <Button type="submit" variant="outlined">
        Enter
      </Button>
    </Box>
  );
}

import React, { FC, useCallback } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createUser } from "../../utils/create-user";
import { AxiosError, AxiosResponse } from "axios";
import { useGlobalContext } from "../../contexts/starwars/starwars.context";
import { ICreateUser } from "../../interface/create-user.interface";
import { registrationSchema } from "./registration.data";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { formTheme } from "./styled-registration";

export const Registration: FC = () => {
  const { star_wars_data } = useGlobalContext();
  const { isLoading, isError, error, mutate } = useMutation<
    AxiosResponse,
    AxiosError,
    ICreateUser
  >(createUser);
  const formSchema = Yup.object().shape(registrationSchema);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
    delayError: 500,
  });

  const submit = useCallback(
    (formData: FieldValues) => {
      mutate({ formData, star_wars_data });
    },
    [star_wars_data]
  );

  return (
    <ThemeProvider theme={formTheme}>
      <Paper elevation={0}>
        <Grid
          container
          item
          margin="0 auto"
          justifyContent="flex-end"
          xs={11}
          sm={9}
          md={6}
        >
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="h6">formularz rejestracyjny</Typography>
            <Divider></Divider>
          </Box>
          <Box component="form" method="POST" autoComplete="off" sx={{ mt: 9 }}>
            {isError ? (
              <Box width="100%" display="flex" justifyContent="center">
                <Typography variant="body1" color={error ? "error" : "inherit"}>
                  {error.message}
                </Typography>
              </Box>
            ) : null}
            <Grid container item spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  {...register("login")}
                  error={!!errors["login"]}
                  id="login"
                  label="Login:"
                  autoFocus
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={
                    errors["login"] ? errors["login"].message?.toString() : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  {...register("password")}
                  error={!!errors["password"]}
                  id="password"
                  label="Has??o:"
                  type="password"
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={
                    errors["password"]
                      ? errors["password"].message?.toString()
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  type="email"
                  id="email"
                  margin="dense"
                  {...register("email")}
                  error={!!errors["email"]}
                  label="E-mail:"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={
                    errors["email"] ? errors["email"].message?.toString() : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  {...register("phoneNumber")}
                  error={!!errors["phoneNumber"]}
                  label="Numer telefonu:"
                  type="text"
                  id="phoneNumber"
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={
                    errors["phoneNumber"]
                      ? errors["phoneNumber"].message?.toString()
                      : ""
                  }
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  {...register("acceptTerms")}
                  control={
                    <Controller
                      control={control}
                      defaultValue="false"
                      name="acceptTerms"
                      render={({ field: { onChange } }) => (
                        <Checkbox
                          sx={{
                            ".MuiSvgIcon-root": {
                              color: errors["acceptTerms"] ? "#FF0000" : "#000",
                            },
                          }}
                          name="acceptTerms"
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                  }
                  label={<Typography>Akceptuj?? Regulamin</Typography>}
                />
                <FormHelperText error={!!errors["acceptTerms"]}>
                  {errors["acceptTerms"]
                    ? errors["acceptTerms"]?.message?.toString()
                    : ""}
                </FormHelperText>
              </Grid>
            </Grid>
            <Box width="100%" display="flex" justifyContent="center" py={2}>
              <LoadingButton
                loading={isLoading}
                loadingPosition="start"
                startIcon={<></>}
                variant="contained"
                onClick={handleSubmit(submit)}
              >
                <Typography variant="button">zapisz</Typography>
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

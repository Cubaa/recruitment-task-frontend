import React, { FC } from 'react'
import { registrationSchema } from './registration.data';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { 
  Box, 
  Button, 
  Checkbox, 
  Divider, 
  FormControlLabel, 
  FormHelperText, 
  Grid,
  Paper, 
  TextField, 
  ThemeProvider, 
  Typography 
} from '@mui/material'
import { formTheme } from './styled-registration';

export const Registration: FC = () => {
  const formSchema = Yup.object().shape(registrationSchema);

  const {
    register, handleSubmit,
    control, formState: { errors }
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    delayError: 500
  });

  const submit = (formData: FieldValues) => 
  {
    console.log(formData)
  };

  return (
    <ThemeProvider theme={formTheme}>
      <Paper elevation={0}>
        <Grid container item margin="0 auto" justifyContent="flex-end" xs={11} sm={9} md={6}>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant='h6'>formularz rejestracyjny</Typography>
            <Divider></Divider>
          </Box>
          <Box component="form" method="POST" autoComplete='off' sx={{ mt: 9 }}>
          <Grid container item spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  {...register('login')}
                  error={!!errors['login']}
                  id="login"
                  label="Login:"
                  autoFocus
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={errors['login'] ? errors['login'].message?.toString() : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  {...register('password')}
                  error={!!errors['password']}
                  id="password"
                  label="Hasło:"
                  type="password"
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={errors['password'] ? errors['password'].message?.toString() : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  type="email"
                  id="email"
                  margin="dense"
                  {...register('email')}
                  error={!!errors['email']}
                  label="E-mail:"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={errors['email'] ? errors['email'].message?.toString() : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  {...register('phoneNumber')}
                  error={!!errors['phoneNumber']}
                  label="Numer telefonu:"
                  type="text"
                  id="phoneNumber"
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText={errors['phoneNumber'] ? errors['phoneNumber'].message?.toString() : ''}
                />
              </Grid>
              <Grid container item xs={12} alignItems="center" justifyContent="space-between">
                <FormControlLabel
                {...register('acceptTerms')}
                  control={
                    <Controller
                      control={control}
                      defaultValue="false"
                      name="acceptTerms"
                      render={({ field: { onChange } }) => (
                        <Checkbox
                          sx={{
                            '.MuiSvgIcon-root': {
                              color: errors['acceptTerms'] ? "#FF0000" : '#000'
                            }
                          }}
                          onChange={e => onChange(e.target.checked)}
                        />
                      )}
                      
                    />
                    
                  }
                  label={
                    <Typography>
                      Akceptuję Regulamin
                    </Typography>
                  }
                />
                <FormHelperText error={!!errors['acceptTerms']}>
                  {errors['acceptTerms'] ? errors['acceptTerms']?.message?.toString() : ''}
                </FormHelperText>
              </Grid>
            </Grid>
            <Box width="100%" display="flex" justifyContent="center" py={2}>
            <Button onClick={handleSubmit(submit)} variant="contained">
              <Typography variant="button">zapisz</Typography>
            </Button>
            </Box>
          </Box>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout.tsx';

export const LoginPage = (): ReactElement => {
  const { errorMessage, status } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm({
    defaultValues: { email: '', password: '' },
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit: SubmitHandler<{ email: string; password: string }> = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): void => {
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = (): void => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField
              fullWidth
              label="Email"
              placeholder="name@email.com"
              type="email"
              {...register('email')}
            />
          </Grid>

          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField
              fullWidth
              label="Password"
              placeholder="password"
              type="password"
              {...register('password')}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid display={errorMessage !== null ? '' : 'none'} item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button
                disabled={isAuthenticating}
                fullWidth
                type="submit"
                variant="contained">
                Login
              </Button>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button
                disabled={isAuthenticating}
                fullWidth
                onClick={onGoogleSignIn}
                type="button"
                variant="contained">
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link color="inherit" component={RouterLink} to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

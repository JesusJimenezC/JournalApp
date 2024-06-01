import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store';
import { startCreateUserWithEmailAndPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout.tsx';

interface IFormRegister {
  displayName: string;
  email: string;
  password: string;
}

const RegisterDefaultValues: IFormRegister = {
  displayName: '',
  email: '',
  password: '',
};

export const RegisterPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { errorMessage, status } = useAppSelector((state) => state.auth);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<IFormRegister>({ defaultValues: RegisterDefaultValues });

  const onSubmit: SubmitHandler<IFormRegister> = ({
    displayName,
    email,
    password,
  }: IFormRegister): void => {
    setFormSubmitted(true);

    if (!isValid) return;

    dispatch(
      startCreateUserWithEmailAndPassword({ displayName, email, password }),
    );
  };

  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status],
  );

  return (
    <AuthLayout title="Register">
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField
              error={!!errors.displayName && formSubmitted}
              fullWidth
              helperText={errors.displayName?.message}
              label="Complete Name"
              placeholder="Complete Name"
              type="text"
              {...register('displayName', {
                minLength: {
                  message: 'Complete Name must have at least 3 characters',
                  value: 3,
                },
                required: 'Complete Name is required',
              })}
            />
          </Grid>

          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField
              error={!!errors.email && formSubmitted}
              fullWidth
              helperText={errors.email?.message}
              label="Email"
              placeholder="name@email.com"
              type="email"
              {...register('email', {
                pattern: {
                  message: 'Enter a valid email',
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
                required: 'Email is required',
              })}
            />
          </Grid>

          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField
              error={!!errors.password && formSubmitted}
              fullWidth
              helperText={errors.password?.message}
              label="Password"
              placeholder="password"
              type="password"
              {...register('password', {
                minLength: {
                  message: 'Password must have at least 6 characters',
                  value: 6,
                },
                required: 'Password is required',
              })}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid display={errorMessage !== null ? '' : 'none'} item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                fullWidth
                type="submit"
                variant="contained">
                Create Account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
            <Link color="inherit" component={RouterLink} to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout.tsx";

export const RegisterPage = (): ReactElement => (
  <AuthLayout title="Register">
    <form>
      <Grid container>
        <Grid item sx={{ mt: 2 }} xs={12}>
          <TextField
            fullWidth
            label="Complete Name"
            placeholder="Complete Name"
            type="text"
          />
        </Grid>

        <Grid item sx={{ mt: 2 }} xs={12}>
          <TextField
            fullWidth
            label="Email"
            placeholder="name@email.com"
            type="email"
          />
        </Grid>

        <Grid item sx={{ mt: 2 }} xs={12}>
          <TextField
            fullWidth
            label="Password"
            placeholder="password"
            type="password"
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item sm={12}>
            <Button fullWidth type="button" variant="contained">
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

import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import type { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout.tsx";

export const LoginPage = (): ReactElement => {
  console.log("LoginPage");

  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
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
            <Grid item sm={6} xs={12}>
              <Button fullWidth type="button" variant="contained">
                Login
              </Button>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button fullWidth type="button" variant="contained">
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

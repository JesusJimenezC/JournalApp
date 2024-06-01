import { CircularProgress, Grid } from '@mui/material';
import type { ReactElement } from 'react';

export const CheckingAuth = (): ReactElement => (
  <Grid
    alignItems="center"
    container
    direction="column"
    justifyContent="center"
    spacing={0}
    sx={{
      backgroundColor: 'primary.main',
      minHeight: '100vh',
      pr: 4,
    }}>
    <Grid container direction="row" item justifyContent="center">
      <CircularProgress color="warning" />
    </Grid>
  </Grid>
);

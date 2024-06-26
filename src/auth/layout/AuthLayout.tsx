import { Grid, Typography } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export const AuthLayout = ({
  children,
  title = '',
}: AuthLayoutProps): ReactElement => (
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
    <Grid
      className="box-shadow"
      item
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 3,
        width: { md: 450 },
      }}
      xs={3}>
      <Typography sx={{ mb: 1 }} variant="h5">
        {title}
      </Typography>

      {children}
    </Grid>
  </Grid>
);

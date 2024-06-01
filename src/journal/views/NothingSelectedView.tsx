import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export const NothingSelectedView = (): ReactElement => {
  console.log('NothingSelectedView');

  return (
    <Grid
      alignItems="center"
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="column"
      justifyContent="center"
      spacing={0}
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: 2,
        minHeight: 'calc(100vh - 110px)',
      }}>
      <Grid item xs={12}>
        <StarOutline sx={{ color: 'white', fontSize: 100 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};

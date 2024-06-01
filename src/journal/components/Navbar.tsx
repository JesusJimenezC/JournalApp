import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import type { ReactElement } from 'react';

import { useAppDispatch } from '../../store';
import { startLogout } from '../../store/auth';

export const Navbar = ({
  drawerWidth,
}: {
  drawerWidth: number;
}): ReactElement => {
  const dispatch = useAppDispatch();

  const onLogout = (): void => {
    console.log('logout');
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        ml: { sm: `${drawerWidth}px` },
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ display: { sm: 'none' }, mr: 2 }}>
          <MenuOutlined />
        </IconButton>

        <Grid
          alignItems="center"
          container
          direction="row"
          justifyContent="space-between">
          <Typography component="div" noWrap variant="h6">
            Journal App
          </Typography>

          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

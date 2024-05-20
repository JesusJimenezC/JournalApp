import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import type { ReactElement } from "react";

export const Navbar = ({
  drawerWidth,
}: {
  drawerWidth: number;
}): ReactElement => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        edge="start"
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuOutlined />
      </IconButton>

      <Grid
        alignItems="center"
        container
        direction="row"
        justifyContent="space-between"
      >
        <Typography component="div" noWrap variant="h6">
          Journal App
        </Typography>

        <IconButton color="error">
          <LogoutOutlined />
        </IconButton>
      </Grid>
    </Toolbar>
  </AppBar>
);

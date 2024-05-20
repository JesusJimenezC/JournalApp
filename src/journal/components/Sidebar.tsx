import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import type { ReactElement } from "react";

export const Sidebar = ({
  drawerWidth = 240,
}: {
  drawerWidth: number;
}): ReactElement => {
  console.log("Sidebar");

  return (
    <Box component="nav" sx={{ width: drawerWidth, flexShrink: { sm: 0 } }}>
      <Drawer
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        variant="permanent"
      >
        <Toolbar>
          <Typography component="div" noWrap variant="h6">
            Jesus Jimenez
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
            <ListItem disablePadding key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
              </ListItemButton>
              <Grid container>
                <ListItemText primary={text} />
                <ListItemText secondary="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              </Grid>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

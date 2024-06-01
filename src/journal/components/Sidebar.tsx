import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import type { ReactElement } from 'react';

import { useAppSelector } from '../../store';
import { SidebarItem } from './';

export const Sidebar = ({
  drawerWidth = 240,
}: {
  drawerWidth: number;
}): ReactElement => {
  const { displayName } = useAppSelector((state) => state.auth);
  const { notes } = useAppSelector((state) => state.journal);

  return (
    <Box component="nav" sx={{ flexShrink: { sm: 0 }, width: drawerWidth }}>
      <Drawer
        open
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          'display': { xs: 'block' },
        }}
        variant="permanent">
        <Toolbar>
          <Typography component="div" noWrap variant="h6">
            {displayName}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {notes.map((note) => (
            <SidebarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

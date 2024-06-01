import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { ReactElement } from 'react';
import { useMemo } from 'react';

import { useAppDispatch } from '../../store';
import type { Note } from '../../store/journal';
import { setActiveNote } from '../../store/journal';

export const SidebarItem = ({
  body,
  date,
  id,
  imageUrls,
  title,
}: Note): ReactElement => {
  const newTitle = useMemo(
    () => (title.length > 17 ? title.substring(0, 17) + '...' : title),
    [title],
  );
  const dispatch = useAppDispatch();

  return (
    <ListItem disablePadding key={id}>
      <ListItemButton
        onClick={() =>
          dispatch(setActiveNote({ body, date, id, imageUrls, title }))
        }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { ReactElement } from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { startNewNote } from '../../store/journal';
import { JournalLayout } from '../layour/JournalLayout.tsx';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { activeNote, isSaving } = useAppSelector((state) => state.journal);
  const onClickNewNote = (): void => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {activeNote ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          'backgroundColor': 'error.main',
          'bottom': 50,
          'color': 'white',
          'position': 'fixed',
          'right': 50,
        }}>
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};

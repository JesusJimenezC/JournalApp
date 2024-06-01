import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import type { ChangeEvent, ReactElement } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import Swal from 'sweetalert2';

import { useAppDispatch, useAppSelector } from '../../store';
import type { Note } from '../../store/journal';
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
  updateNote,
} from '../../store/journal';
import { ImageGallery } from '../components';

export const NoteView = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { activeNote, isSaving, savedMessage } = useAppSelector(
    (state) => state.journal,
  );
  const { control, register, reset } = useForm<Note>({
    defaultValues: activeNote || {},
  });
  const formValues = useWatch<Note>({ control });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dateString = useMemo(() => {
    const newDate = new Date(formValues.date as number);
    return newDate.toUTCString();
  }, [formValues.date]);

  const onSaveNote = (): void => {
    dispatch(setActiveNote(formValues));
    dispatch(startSaveNote());
    dispatch(updateNote(formValues));
  };

  const onFileInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    if (target.files?.length === 0) return;
    dispatch(startUploadingFiles(target.files as FileList));
  };

  const onDelete = (): void => {
    dispatch(startDeletingNote());
  };

  useEffect(() => {
    if (savedMessage) {
      Swal.fire({
        icon: 'success',
        text: savedMessage,
        title: 'Saved!',
      });
    }
  }, [savedMessage]);

  useEffect(() => {
    reset(activeNote || {});
  }, [activeNote, reset]);

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          multiple
          onChange={onFileInputChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          type="file"
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current?.click()}>
          <UploadOutlined sx={{ fontSize: 30 }} />
        </IconButton>

        <Button
          color="primary"
          disabled={isSaving}
          onClick={onSaveNote}
          sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          fullWidth
          label="Title"
          placeholder="Add title"
          sx={{ border: 'none', mb: 1 }}
          type="text"
          variant="filled"
          {...register('title')}
        />

        <TextField
          fullWidth
          label="Description"
          minRows={5}
          multiline
          placeholder="What do you want to write today?"
          type="text"
          variant="filled"
          {...register('body')}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button color="error" onClick={onDelete} sx={{ mt: 2 }}>
          <DeleteOutline /> Delete
        </Button>
      </Grid>

      <ImageGallery images={activeNote?.imageUrls as string[]} />
    </Grid>
  );
};

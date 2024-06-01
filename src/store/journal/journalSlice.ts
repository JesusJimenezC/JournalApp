import { createSlice } from '@reduxjs/toolkit';

export interface Note {
  body: string;
  date: number;
  id: string;
  imageUrls: string[];
  title: string;
}

interface JournalSliceState {
  activeNote: Note | null;
  isSaving: boolean;
  notes: Note[];
  savedMessage: string;
}

const initialState: JournalSliceState = {
  activeNote: null,
  isSaving: false,
  notes: [],
  savedMessage: '',
};

export const journalSlice = createSlice({
  initialState,
  name: 'journal',
  reducers: {
    addNewEmptyNote: (state, { payload }): void => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    clearNotesLogout: (state): void => {
      state.isSaving = false;
      state.savedMessage = '';
      state.notes = [];
      state.activeNote = null;
    },
    deleteNote: (state, action): void => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.isSaving = false;
      state.activeNote = null;
    },
    savingNote: (state): void => {
      state.isSaving = true;
    },
    setActiveNote: (state, { payload }): void => {
      state.activeNote = payload;
    },
    setImagesActiveNote: (state, { payload }): void => {
      state.isSaving = false;
      if (state.activeNote === null) return;
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...payload];
    },
    setNotes: (state, { payload }): void => {
      state.notes = payload;
    },
    updateNote: (state, { payload }): void => {
      state.notes = state.notes.map((note) =>
        note.id === payload.id ? payload : note,
      );
      state.isSaving = false;
      state.savedMessage = `${payload.title}, updated successfully!`;
    },
  },
});

export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNote,
  savingNote,
  setActiveNote,
  setImagesActiveNote,
  setNotes,
  updateNote,
} = journalSlice.actions;

import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import type { Dispatch } from 'redux';

import { FirebaseDB } from '../../firebase/config.ts';
import { fileUpload, loadNotes } from '../../helpers';
import type { AppThunk } from '../store.ts';
import type { Note } from './';
import {
  addNewEmptyNote,
  deleteNote,
  savingNote,
  setActiveNote,
  setImagesActiveNote,
  setNotes,
} from './';

export const startNewNote =
  (): AppThunk => async (dispatch: Dispatch, getState) => {
    dispatch(savingNote());
    const { uid } = getState().auth;

    const newNote: Note = {
      body: '',
      date: new Date().getTime(),
      id: '',
      imageUrls: [],
      title: '',
    };

    const docRef = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    newNote.id = docRef.id;
    await setDoc(docRef, newNote);

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };

export const startLoadingNotes =
  (): AppThunk => async (dispatch: Dispatch, getState) => {
    const { uid } = getState().auth;

    if (uid !== null) {
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes));
    }
  };

export const startSaveNote =
  (): AppThunk => async (dispatch: Dispatch, getState) => {
    const { activeNote } = getState().journal;
    const { uid } = getState().auth;

    if (activeNote !== null && uid !== null) {
      const { id, ...note } = activeNote;
      const docRef = doc(FirebaseDB, `${uid}/journal/notes/${id}`);
      await setDoc(docRef, note, { merge: true });

      dispatch(setActiveNote(activeNote));
    }
  };

export const startUploadingFiles =
  (files: FileList): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(savingNote());

    const fileUploadPromises: Promise<string>[] = [];

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const imageUrls = await Promise.all(fileUploadPromises);

    dispatch(setImagesActiveNote(imageUrls));
  };

export const startDeletingNote =
  (): AppThunk => async (dispatch: Dispatch, getstate) => {
    dispatch(savingNote());

    const { uid } = getstate().auth;
    const { activeNote } = getstate().journal;

    if (activeNote !== null && uid !== null) {
      const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
      await deleteDoc(docRef);
      dispatch(deleteNote(activeNote.id));
    }
  };

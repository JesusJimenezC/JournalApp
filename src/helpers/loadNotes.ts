import { collection, getDocs } from 'firebase/firestore/lite';

import { FirebaseDB } from '../firebase/config.ts';
import type { Note } from '../store/journal';

export const loadNotes = async (uid: string): Promise<Note[]> => {
  const notesCollection = collection(FirebaseDB, `${uid}/journal/notes`);
  const notesSnapshot = await getDocs(notesCollection);
  const notes: Note[] = [];

  notesSnapshot.forEach((doc) => {
    notes.push(doc.data() as Note);
  });

  return notes;
};

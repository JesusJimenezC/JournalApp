import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { FirebaseAuth } from '../firebase/config.ts';
import { useAppDispatch, useAppSelector } from '../store';
import type { Status } from '../store/auth';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';

export const useCheckAuth = (): { status: Status } => {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        dispatch(login({ displayName, email, photoURL, uid }));
        dispatch(startLoadingNotes());
      } else {
        dispatch(logout({ errorMessage: null }));
      }
    });
  }, [dispatch]);

  return {
    status,
  };
};

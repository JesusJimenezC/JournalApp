import { createSlice } from '@reduxjs/toolkit';

export type Status = 'checking' | 'authenticated' | 'not-authenticated';

interface AuthSliceState {
  displayName: string | null;
  email: string | null;
  errorMessage: string | null;
  photoURL: string | null;
  status: Status;
  uid: string | null;
}

const initialState: AuthSliceState = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  status: 'checking',
  uid: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
  },
});

export const { checkingCredentials, login, logout } = authSlice.actions;

import type { Dispatch } from 'redux';

import type { UserData } from '../../firebase/providers.ts';
import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase/providers.ts';
import type { AppThunk } from '../';
import { clearNotesLogout } from '../journal';
import { checkingCredentials, login, logout } from './';

export const checkingAuthentication =
  (): AppThunk => async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };

export const startGoogleSignIn = (): AppThunk => async (dispatch: Dispatch) => {
  dispatch(checkingCredentials());
  const result = await signInWithGoogle();

  if (!result.ok)
    return dispatch(logout({ errorMessage: result.errorMessage }));

  dispatch(login(result));
};

export const startCreateUserWithEmailAndPassword =
  (formData: UserData): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailAndPassword(formData);

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };

export const startLoginWithEmailPassword =
  ({ email, password }: { email: string; password: string }): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailAndPassword({ email, password });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };

export const startLogout = (): AppThunk => async (dispatch: Dispatch) => {
  await logoutFirebase();
  dispatch(clearNotesLogout());
  dispatch(logout({ errorMessage: null }));
};

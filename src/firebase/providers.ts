import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  type UserCredential,
} from 'firebase/auth';

import { FirebaseAuth } from './config.ts';

interface FirebaseError {
  message: string;
}

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

export interface User {
  displayName: string | null;
  email: string | null;
  errorMessage?: string;
  ok: boolean;
  photoURL: string | null;
  uid: string | null;
}

export interface UserData {
  displayName: string;
  email: string;
  password: string;
}

export const signInWithGoogle = async (): Promise<User> => {
  try {
    const result: UserCredential = await signInWithPopup(
      FirebaseAuth,
      googleProvider,
    );
    // const credentials: OAuthCredential | null =
    //   GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      displayName,
      email,
      ok: true,
      photoURL,
      uid,
    };
  } catch (error) {
    const { message } = error as FirebaseError;

    return {
      displayName: null,
      email: null,
      errorMessage: message,
      ok: false,
      photoURL: null,
      uid: null,
    };
  }
};

export const registerUserWithEmailAndPassword = async (
  user: UserData,
): Promise<User> => {
  const { displayName, email, password } = user;

  try {
    const result: UserCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );

    const { photoURL, uid } = result.user;

    if (FirebaseAuth.currentUser) {
      await updateProfile(FirebaseAuth.currentUser, { displayName });
    }

    return {
      displayName,
      email,
      ok: true,
      photoURL,
      uid,
    };
  } catch (error) {
    const { message } = error as FirebaseError;

    return {
      displayName: null,
      email: null,
      errorMessage: message,
      ok: false,
      photoURL: null,
      uid: null,
    };
  }
};

export const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  try {
    const result: UserCredential = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );

    const { displayName, photoURL, uid } = result.user;

    return {
      displayName,
      email,
      ok: true,
      photoURL,
      uid,
    };
  } catch (error) {
    const { message } = error as FirebaseError;

    return {
      displayName: null,
      email: null,
      errorMessage: message,
      ok: false,
      photoURL: null,
      uid: null,
    };
  }
};

export const logoutFirebase = async (): Promise<void> =>
  await FirebaseAuth.signOut();

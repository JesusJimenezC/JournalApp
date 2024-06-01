import type { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../pages';

/* eslint-disable react-perf/jsx-no-jsx-as-prop */
export const AuthRoutes = (): ReactElement => (
  <Routes>
    <Route element={<LoginPage />} path="login" />
    <Route element={<RegisterPage />} path="register" />

    <Route element={<Navigate to="/" />} path="/*" />
  </Routes>
);

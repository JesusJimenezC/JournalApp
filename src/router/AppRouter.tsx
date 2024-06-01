import type { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes.tsx';
import { useCheckAuth } from '../hooks';
import { JournalRoutes } from '../journal/routes/JournalRoutes.tsx';
import { CheckingAuth } from '../ui';

/* eslint-disable react-perf/jsx-no-jsx-as-prop */
export const AppRouter = (): ReactElement => {
  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route element={<JournalRoutes />} path="/*" />
      ) : (
        <Route element={<AuthRoutes />} path="/auth/*" />
      )}

      <Route element={<Navigate to="/auth/login" />} path="/*" />
    </Routes>
  );
};

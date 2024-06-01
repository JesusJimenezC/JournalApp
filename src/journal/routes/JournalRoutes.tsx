import type { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { JournalPage } from '../pages/JournalPage.tsx';

/* eslint-disable react-perf/jsx-no-jsx-as-prop */
export const JournalRoutes = (): ReactElement => (
  <Routes>
    <Route element={<JournalPage />} path="/" />

    <Route element={<Navigate to="/" />} path="/*" />
  </Routes>
);

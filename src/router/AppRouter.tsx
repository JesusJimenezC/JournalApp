import type { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes.tsx";
import { JournalRoutes } from "../journal/routes/JournalRoutes.tsx";

/* eslint-disable react-perf/jsx-no-jsx-as-prop */
export const AppRouter = (): ReactElement => {
  console.log("AppRouter");

  return (
    <Routes>
      {/* eslint-disable-next-line react-perf/jsx-no-jsx-as-prop */}
      <Route element={<AuthRoutes />} path="/auth/*" />
      <Route element={<JournalRoutes />} path="/*" />
    </Routes>
  );
};

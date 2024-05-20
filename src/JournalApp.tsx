import type { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router/AppRouter.tsx";
import { AppTheme } from "./theme";

export const JournalApp = (): ReactElement => (
  <BrowserRouter>
    <AppTheme>
      <AppRouter />
    </AppTheme>
  </BrowserRouter>
);

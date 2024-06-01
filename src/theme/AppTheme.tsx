import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

import { purpleTheme } from './';

export const AppTheme = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => (
  <ThemeProvider theme={purpleTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

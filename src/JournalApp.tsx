import 'sweetalert2/dist/sweetalert2.min.css';

import type { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter.tsx';
import { store } from './store';
import { AppTheme } from './theme';

export const JournalApp = (): ReactElement => (
  <BrowserRouter>
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
  </BrowserRouter>
);

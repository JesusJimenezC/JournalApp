// eslint-disable-next-line filename-rules/match
import { StrictMode } from 'react';
// eslint-disable-next-line import/no-unresolved
import { createRoot } from 'react-dom/client';

import { JournalApp } from './JournalApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JournalApp />
  </StrictMode>,
);

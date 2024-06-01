/// <reference types="vite/client" />

// eslint-disable-next-line filename-rules/match
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

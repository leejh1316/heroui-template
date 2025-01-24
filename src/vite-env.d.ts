/// <reference types="vite/client" />

/**
 * Git commit hash
 */
declare const __COMMIT_HASH__: string;

interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

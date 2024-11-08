/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly API_BASE_URL: string
    readonly API_PREFIX: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  
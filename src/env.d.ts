interface ImportMetaEnv {
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  type SmartOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
  }
}

export {}

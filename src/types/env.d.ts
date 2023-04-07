declare interface ImportMeta {
  readonly env: {
    // Environment variables defined in .env
    readonly VITE_UNSPLASH_ACCESS_KEY: string;
    readonly VITE_GITHUB_CLIENT_ID: string;
  };
}

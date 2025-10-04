declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_API_BASE_URL: string;
}

declare interface ImportMeta {
  readonly env: Env;
}

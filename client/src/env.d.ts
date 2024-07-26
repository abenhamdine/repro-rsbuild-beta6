/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
    readonly PUBLIC_MODE: string;
    readonly PUBLIC_DEBUG: string;
    readonly PUBLIC_SENTRY_DSN: string;
    readonly PUBLIC_GLEAP_API_KEY: string;
    readonly PUBLIC_GRAPHQL_SERVER_URL: string;
    readonly PUBLIC_CLARITY_PROJECT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
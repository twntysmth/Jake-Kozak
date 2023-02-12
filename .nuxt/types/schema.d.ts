import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["storyblok"]?: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-jsonld"]?: typeof import("nuxt-jsonld").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },
  }
  interface PublicRuntimeConfig {
     storyblok: {
        usePlugin: boolean,

        accessToken: string,
    },
  }
}
import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/activevalue/projects/Nuxt-3/Storyblok/Jake-Kozak/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
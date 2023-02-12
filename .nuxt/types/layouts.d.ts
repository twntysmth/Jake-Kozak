import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/activevalue/projects/Nuxt-3/Storyblok/Jake-Kozak/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
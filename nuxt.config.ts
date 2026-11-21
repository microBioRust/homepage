// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/hints', '@nuxt/image', '@nuxt/ui', '@nuxtjs/device', '@nuxtjs/seo', '@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})

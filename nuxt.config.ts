// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/device",
    "@nuxtjs/seo",
    "@pinia/nuxt",
    "@opeolluwa/ryder",
    "nuxt-aos",
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['rust', 'python', 'bash', 'toml', 'json', 'powershell', 'css'],
        },
      },
    },
  },
  build: { transpile: ["@opeolluwa/ryder"] },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});

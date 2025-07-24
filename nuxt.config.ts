export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxtjs/cloudinary",
    "nuxt-auth-utils",
    "nuxt-tiptap-editor",
  ],
  runtimeConfig: {
    githubId: process.env.NUXT_GITHUB_CLIENT_ID || "",
    githubSecret: process.env.NUXT_GITHUB_CLIENT_SECRET || "",
    public: {
      githubId: process.env.NUXT_GITHUB_CLIENT_ID || "",
    },
  },
  nitro: {
    preset: "vercel",
  },
});

// nuxt.config.ts
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
    githubId: "",
    githubSecret: "",
  },

  // 👇 เพิ่มส่วนนี้
  nitro: {
    handlers: [
      {
        route: '/api/auth/login',
        method: 'post',
        handler: '~/server/api/auth/login.post.ts',
      },
    ],
  },
});

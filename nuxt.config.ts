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

  nitro: {
    handlers: [
      {
        route: '/api/auth/github',
        method: 'get',
        handler: '~/server/api/auth/github.get.ts',
      },
      {
        route: '/api/auth/register',
        method: 'post',
        handler: '~/server/api/auth/register.post.ts',
      },
      {
        route: '/api/account/stats',
        method: 'get',
        handler: '~/server/api/account/stats.get.ts',
      },
      {
        route: '/api/history/:id',
        method: 'get',
        handler: '~/server/api/history/[id].get.ts',
      },
      {
        route: '/api/history',
        method: 'get',
        handler: '~/server/api/history/index.get.ts',
      },
      {
        route: '/api/history',
        method: 'post',
        handler: '~/server/api/history/index.post.ts',
      },
      {
        route: '/api/report',
        method: 'post',
        handler: '~/server/api/report/index.post.ts',
      },
    ],
  },
});

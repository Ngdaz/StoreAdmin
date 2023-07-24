// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
  devtools: { enabled: true },
  // pages: true,
  modules: ['@element-plus/nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  tailwindcss: {
    exposeConfig: true,
  },
  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
      global: true,
    },
  ],
});

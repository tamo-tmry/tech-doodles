// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    cdnURL: process.env.PUBLIC_PATH,
    buildAssetsDir: process.env.BUILD_ASSETS_DIR,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
// import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  css: ["@/assets/main.sass"],
  devtools: { enabled: true },
  // sitemap: {
  //   hostname: "https://celia-blog.vercel.app/",
  //   routes: async () => {

  //     const routes = ["/"];
  //     return routes;
  //   },
  // },
  modules: ["@pinia/nuxt"],
  vite: {
    vue: {},
    esbuild: {
      drop: process.env.VITE_DEBUG_MODE ? [] : ["console", "debugger"],
    },
  },
  app: {
    head: {
      // title: `Celia's Blog`,
      meta: [
        // {
        //   name: "google-site-verification",
        //   content: "RxsAX-B4Wx58KvSm9bLHxM7AwMSsw3SvJnwoSrcgg1I",
        // },
      ],
    },
  },
});

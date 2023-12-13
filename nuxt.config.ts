// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // builder: "webpack",
  css: ["@/assets/styles/index.less"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `,
        },
      },
    },
  },
  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    }
  },

  modules: ["nuxt-proxy-request"],
  proxy: {
    options: [
      {
        target: "http://127.0.0.1:3600",
        pathFilter: ["/api"],
      },
      {
        target: "https://api.vvhan.com/api/joke",
        pathRewrite: {
          "^/getjoke": "",
        },
        pathFilter: ["/getjoke"],
      },
    ],
  },
  devServer: {
    port: 3006,
  },
});

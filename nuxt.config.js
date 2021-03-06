import { injectRoutes } from "./routes"

export default {
  target: "static",
  ssr: true,
  head: {
    title: "Cine35.com - Tous les films, Toutes les salles de cinéma d'Ille-et-Vilaine",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Programmes des cinémas en Ille-et-Vilaine (Département 35)",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
      },
      {
         rel: "stylesheet",
         href:
           "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap",
       },
       {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap",
        },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      //   integrity:
      //     "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      //   crossorigin: "anonymous",
      // },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
        integrity:
          "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
        crossorigin: "anonymous",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        integrity:
          "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
        crossorigin: "anonymous",
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
        integrity:
          "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
        crossorigin: "anonymous",
      },
      // {
      //    'data-ad-client': 'ca-pub-3777403068080720',
      //    async: true,
      //    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      // },
      {
         async: true,
         src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
      },
      {
         src: '/ads.js',
      },
      {
         src: '/js/custom.js',
      }
    ],
  },
  loading: { color: "#fff" },
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // "bootstrap-vue/nuxt"
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyD4stH-RFN9I2T1Kh-mVYM20BbVJ11sDZE",
          authDomain: "cine35-e53b7.firebaseapp.com",
          databaseURL: "https://cine35-e53b7.firebaseio.com",
          projectId: "cine35-e53b7",
          storageBucket: "cine35-e53b7.appspot.com",
          messagingSenderId: "26992070412",
          appId: "1:26992070412:web:f7054089e5992b030a8329",
        },
        services: {
          firestore: {
            chunkName: "firebase-auth",
            enablePersistence: true,
          },
        },
      },
    ],
  ],
  css: [
   "~assets/scss/app.scss"
  ],
  router: {
    linkActiveClass: "active",
    injectRoutes,
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map"
      }

      // Exécuter ESLint lors de la sauvegarde
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
             fix: true,
          }
        })
      }
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },
  generate: {
    dir: "release",
    // see https://fr.nuxtjs.org/api/configuration-generate#routes
    routes: [
       '/cinemas/1541',
       '/cinemas/846',
       '/cinemas/98746',
       '/cinemas/181',
       '/cinemas/451',
       '/cinemas/2156',
       '/movies/2446822f-b48d-4a39-9dc8-08c07fae05f4',
       '/movies/353680c1-5de6-44b9-8144-245cc74e56e1',
       '/movies/744e0d9c-227a-4c60-91da-c79f2254025d',
       '/movies/754d7aca-3922-447b-9e3b-469565260a5d',
       '/movies/7e43f64d-23ba-470f-abd3-c840a1511463',
       '/movies/a93f27dc-2de5-4a2f-b534-a5afb64f2305',
       '/movies/cbfc0413-cb8d-4b91-a312-290505a735df',
       '/movies/xJABSfO0P91AUEXcKzLj',
       '/news/123',
       '/movies/critiques/123'
    ]
  },
}

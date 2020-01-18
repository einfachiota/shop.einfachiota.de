module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Shop - einfachIOTA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    { src: '~/plugins/paypal.js', ssr: false },
    {
      src: '~/plugins/socket.io.js',
      ssr: false // <-- this line is required
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    '@nuxtjs/proxy',
    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }],
    'nuxt-i18n'
  ],

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: {
        en: {
          greeting: 'Hello world!'
        },
        de: {
          greeting: 'Hallo Welt!'
        }
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  /*
   ** Build configuration
   */

  build: {
    transpile: [/^element-ui/],
    vendor: ['vue-paypal-checkout'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    backendUrl: process.env.BACKEND_URL || 'http://localhost:5000'
  }
}

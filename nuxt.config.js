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
          greeting: 'Hello world!',
          order: {
            form: {
              first_name_label: 'First name',
              first_name_placeholder: 'Your First name',
              last_name_label: 'Last name',
              last_name_placeholder: 'Your Last name',
              address_label: 'Address',
              address_placeholder: 'Your address with house number',
              zip_code_label: 'Zip code',
              zip_code_placeholder: 'Your zip code',
              city_label: 'City',
              city_placeholder: 'Your city',
              country_label: 'Counry',
              country_placeholder: 'Choose your country',
              amount_label: 'Amount',
              email_label: 'Email',
              email_placeholder: 'Your email address',
              newsletter_label: 'Neuigkeiten per E-Mail',
              newsletter_placeholder: 'Ich möchte Neuigkeiten erhalten.'
            }
          }
        },
        de: {
          greeting: 'Hallo Welt!',
          order: {
            form: {
              first_name_label: 'Vorname',
              first_name_placeholder: 'Dein Vorname',
              last_name_label: 'Nachname',
              last_name_placeholder: 'Dein Nachname',
              address_label: 'Adresse',
              address_placeholder: 'Deine Adresse und Hausnummer',
              zip_code_label: 'Postleitzahl',
              zip_code_placeholder: 'Deine Postleitzahl',
              city_label: 'Stadt',
              city_placeholder: 'Deine Stadt',
              country_label: 'Land',
              country_placeholder: 'Wähle dein Land',
              amount_label: 'Menge der Magazine',
              email_label: 'E-Mail',
              email_placeholder:
                'Deine E-Mail Adresse, falls bei der Lieferung etwas schief geht.',
              newsletter_label: 'Neuigkeiten per E-Mail',
              newsletter_placeholder: 'Ich möchte Neuigkeiten erhalten.'
            }
          }
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

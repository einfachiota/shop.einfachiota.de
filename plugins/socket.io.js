// ~/plugins/socket.io.js
import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io-extended'

export default ({ store }) => {
  Vue.use(
    VueSocketIO,
    io('https://store.einfachiota.de', {
      path: '/api/iota_payments/socket',
      origins: '*:*'
    }),
    {
      store
    }
  )
}

// ~/plugins/socket.io.js
import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io-extended'

export default ({ store }) => {
  Vue.use(
    VueSocketIO,
    io('http://localhost:5000', { path: '/api/iota_payments/socket' }),
    {
      store
    }
  )
}

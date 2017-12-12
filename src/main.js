// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
import Es6Promise from 'es6-promise'
import moment from 'moment'
import 'babel-polyfill'
Es6Promise.polyfill()

window.jQuery = jQuery
window.$ = jQuery
window['moment'] = moment
window.MotionUI = require('motion-ui')

require('foundation-sites')

Vue.use(vueResource)

Vue.http.interceptors.push((request, next) => {
  request.credentials = true
  // request.headers.set('Authentization', 'Your header')
  next()
})

Vue.http.options.credentials = true

Vue.http.options.xhr = {
  withCredentials: true
}
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
Vue.http.options.crossOrigin = true

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

window.$(document).foundation()
moment.locale('da')

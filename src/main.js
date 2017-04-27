import Vue from 'vue'
import VIscroll from 'viscroll'

import App from './App'

Vue.use(VIscroll, {
  mouseWheel: true,
  click: false,
  preventDefault: true,
  tap: false,
  bounce: false,
  disableTouch: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
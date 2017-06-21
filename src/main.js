import Vue from 'vue'
import VIscroll from 'viscroll'

import App from './App'

Vue.use(VIscroll, {
  mouseWheel: true,
  click: false,
  preventDefault: true,
  tap: false,
  bounce: false,
  disableMouse: false,
  disablePointer: true,
  disableTouch: false
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
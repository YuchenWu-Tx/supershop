import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from './test'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('./assets/logo.png'),
  err:require('./assets/logo.png')
})
Vue.use(Toast)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

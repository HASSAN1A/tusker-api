import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueResource from 'vue-resource'
import VueModalTor from 'vue-modaltor'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueModalTor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

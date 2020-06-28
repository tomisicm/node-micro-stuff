import '@/assets/css/tailwind.css'

import VueLoading from 'vuejs-loading-plugin'
import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VueLoading, { text: 'Loading...' })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

/* eslint no-param-reassign: "error" */

import VueLoading from 'vuejs-loading-plugin'
import VueCompositionApi from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import store from './store'

function applicationInit(VueInstance) {
  VueInstance.config.productionTip = false

  VueInstance.use(VueCompositionApi)
  VueInstance.use(VueLoading, { text: 'Loading...' })

  return VueInstance
}

function getApplication(VueInstance) {
  const Application = new VueInstance({
    router,
    store,
    render: (h) => h(App)
  }).$mount('#app')

  return Application
}

export { applicationInit, getApplication }

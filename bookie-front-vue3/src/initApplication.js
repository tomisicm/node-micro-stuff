import { createApp } from 'vue'
import registerGlobalComponents from './components/registerGlobals'
import router from '@/router'
import store from '@/store'
// import VueCompositionAPI from '@vue/composition-api'

function createApplication (App) {
  return createApp(App)
}

function useApplicationPlugins (Application) {
  //   Application.use(VueCompositionAPI)
  Application.use(router)
  Application.use(store)
  registerGlobalComponents(Application)
  return Application
}

function mountApplication (Application) {
  return Application.mount('#app')
}

export {
  createApplication, useApplicationPlugins, mountApplication
}

import { createApp } from 'vue'
import registerGlobalComponents from './components/registerGlobals'
import router from '@/router'
import store from '@/store'

// @ts-ignore
function createApplication (App) {
  return createApp(App)
}

// @ts-ignore
function useApplicationPlugins (Application) {
  Application.use(router)
  Application.use(store)
  registerGlobalComponents(Application)
  return Application
}

// @ts-ignore
function mountApplication (Application) {
  return Application.mount('#app')
}

export {
  createApplication, useApplicationPlugins, mountApplication
}

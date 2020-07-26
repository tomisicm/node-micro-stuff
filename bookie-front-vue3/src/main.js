import { createApplication, useApplicationPlugins, mountApplication } from './initApplication'
import App from './App.vue'
import '@/assets/css/tailwind.css'

mountApplication(useApplicationPlugins(createApplication(App)))

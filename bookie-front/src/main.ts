import '@/assets/css/tailwind.css'

import Vue from 'vue'
import '@/components/globals'

import { applicationInit, getApplication } from './application-init'

getApplication(applicationInit(Vue))

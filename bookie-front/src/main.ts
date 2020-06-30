import '@/assets/css/tailwind.css'

import Vue from 'vue'

import { applicationInit, getApplication } from './application-init'

getApplication(applicationInit(Vue))

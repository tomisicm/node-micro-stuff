import Vue from 'vue'
import registerGlobalComponents from './registerGlobals'

const registerComponents = registerGlobalComponents(Vue)

const shared = require.context('./base', false, /.vue$/)

registerComponents(shared)

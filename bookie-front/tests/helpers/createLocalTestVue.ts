import { createLocalVue } from '@vue/test-utils'
import { createStore } from './createStore'
import { createRouter } from './createRouter'
import registerGlobalComponents from './registerGlobalComponents'

// register hook for the test env
require('babel-plugin-require-context-hook/register')()

type StoreArgs = { state; mutations; actions; modules}

const createLocalTestVue = (initStore: StoreArgs) => {
  const localVue = createLocalVue()
  registerGlobalComponents(localVue)

  const store = createStore(localVue, initStore)
  const router = createRouter(localVue)

  return { localVue, store, router }
}

export default createLocalTestVue

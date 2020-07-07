import { createLocalVue } from '@vue/test-utils'
import { createStore } from '../helpers/createStore'
import { createRouter } from '@/router'

type StoreArgs = { state, mutations, actions, modules}

const createLocalTestVue = (initStore: StoreArgs) => {
  const localVue = createLocalVue()

  const store = createStore(localVue, initStore)
  const router = createRouter()

  return { localVue, store, router }
}

export default createLocalTestVue

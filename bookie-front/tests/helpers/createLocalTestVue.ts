import { createLocalVue } from '@vue/test-utils'
import { createStore } from '../helpers/createStore'
import { createRouter } from '../helpers/createRouter'

type StoreArgs = { state, mutations, actions, modules}

const createLocalTestVue = (initStore: StoreArgs) => {
  const localVue = createLocalVue()

  const store = createStore(localVue, initStore)
  const router = createRouter(localVue)

  return { localVue, store, router }
}

export default createLocalTestVue

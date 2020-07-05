import { createLocalVue } from '@vue/test-utils'
import { applicationInit } from '@/application-init'
import store from '@/store'

jest.mock('vuejs-loading-plugin', () => ({
}))

const localVue = applicationInit(createLocalVue())
// patching
localVue.$loading = jest.fn()

jest.doMock('vue', () => ({
  default: localVue
}))

describe('loaders', () => {
  beforeEach(() => {
    store.state.loader.visible = false
    store.state.loader.count = 0
  })

  it('hide modal once', () => {
    store.commit('hideLoader', localVue)

    expect(store.state.loader.visible).toBe(false)
    expect(store.state.loader.count).toBe(0)
    expect(localVue.$loading).toHaveBeenCalled()
    expect(localVue.$loading.mock.calls[0][0]).toBe(false)
  })

  it('show modal once', () => {
    store.commit('showLoader', localVue)

    expect(store.state.loader.visible).toBe(true)
    expect(store.state.loader.count).toBe(1)
    expect(localVue.$loading).toHaveBeenCalled()
    expect(localVue.$loading.mock.calls[1][0]).toBe(true)
  })

  it('show modal twice', () => {
    store.commit('showLoader', localVue)
    store.commit('showLoader', localVue)

    expect(store.state.loader.visible).toBe(true)
    expect(store.state.loader.count).toBe(2)
  })

  it('show modal twice and hide one', () => {
    store.commit('showLoader', localVue)
    store.commit('showLoader', localVue)
    store.commit('hideLoader', localVue)

    expect(store.state.loader.visible).toBe(true)
    expect(store.state.loader.count).toBe(1)
  })
})

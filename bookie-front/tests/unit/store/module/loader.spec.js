import { createLocalVue } from '@vue/test-utils'
import { applicationInit } from '@/application-init'
import store from '@/store'

jest.mock('vuejs-loading-plugin', () => ({
}))

const localVue = applicationInit(createLocalVue())
// patching
localVue.$loading = jest.fn()

jest.doMock("vue", () => ({
  default: localVue
}))

describe('loaders', () => {

  beforeEach(() => {
    store.state.loader.visible = false
    store.state.loader.count = 0
  })

  it('show modal once', () => {
    store.commit('hideLoader', localVue)

    expect(store.state.loader.visible).toBe(false)
    expect(store.state.loader.count).toBe(0)
  })

  it('show modal once', () => {
    store.commit('showLoader', localVue)

    expect(store.state.loader.visible).toBe(true)
    expect(store.state.loader.count).toBe(1)
  })

  it('show modal once', () => {
    store.commit('hideLoader', localVue)
    expect(store.state.loader.visible).toBe(false)
    expect(store.state.loader.count).toBe(0)
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

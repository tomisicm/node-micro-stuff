import Vuex from 'vuex'
import VueCompositionApi from '@vue/composition-api'
import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

describe('Header.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      computed: {
        isLoggedIn: () => false
      },
      localVue,
      stubs: ['router-link']
    })
  })

  it('if user is not logged in', () => {
    wrapper = shallowMount(Header, {
      computed: {
        isLoggedIn: () => false
      },
      localVue,
      stubs: ['router-link']
    })

    expect(wrapper.find('.login').text())
      .toContain('Login')
  })

  it('if user is logged in', () => {
    wrapper = shallowMount(Header, {
      computed: {
        isLoggedIn: () => true
      },
      localVue,
      stubs: ['router-link']
    })

    expect(wrapper.find('.my-account').text())
      .toContain('My Account')
  })
})

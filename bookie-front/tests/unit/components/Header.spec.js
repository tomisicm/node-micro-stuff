// eslint-disable-next-line
import VueCompositionApi from '@vue/composition-api'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('if user is not logged in', () => {
    const wrapper = shallowMount(Header, {
      // swap with props Data since its only used for rendering
      computed: {
        isLoggedIn: () => false
      },
      stubs: ['router-link']
    })

    expect(wrapper.find('.login').text())
      .toContain('Login')
  })

  it('if user is logged in', () => {
    const wrapper = shallowMount(Header, {
      computed: {
        isLoggedIn() {
          return true
        }
      },
      stubs: ['router-link']
    })

    expect(wrapper.find('.my-account').text())
      .toContain('My Account')
  })
})

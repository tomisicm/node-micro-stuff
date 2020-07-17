import VueCompositionApi from '@vue/composition-api'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('if user is not logged in', () => {
    let wrapper = shallowMount(Header, {
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
    let wrapper = shallowMount(Header, {
      computed: {
        isLoggedIn (){
          return true
        } 
      },
      stubs: ['router-link']
    })

    expect(wrapper.find('.my-account').text())
      .toContain('My Account')
  })
})

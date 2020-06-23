import VueCompositionApi from '@vue/composition-api'
import { shallowMount } from '@vue/test-utils'
import AppLogin from '@/components/auth/AppLogin.vue'
import flushPromises from 'flush-promises'

jest.mock('@/services/AuthService.ts', () => ({
  login: jest.fn().mockResolvedValue({ userLogin: { id: '1', token: 'token', expiresIn: '1h' } })
}))
const AuthServiceLogin = require('@/services/AuthService.ts')

describe('AppLogin.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppLogin, {
      stubs: ['router-link']
    })
  })

  it('login functionality', async () => {
    expect.assertions(3)

    const loginData = { email: 'qqqq', password: 'qqqq' }

    wrapper.setData(loginData)
    const submitButton = wrapper.find('#submit-login')
    submitButton.trigger('click')

    await flushPromises()

    expect(AuthServiceLogin.login).toHaveBeenCalled()
    expect(AuthServiceLogin.login.mock.calls.length).toBe(1)
    expect(AuthServiceLogin.login.mock.calls[0][0]).toStrictEqual(loginData)
  })

  it.skip('form is cleared', async () => {
    expect.assertions(3)

    const loginData = { email: 'qqqq', password: 'qqqq' }

    wrapper.setData(loginData)
    const submitButton = wrapper.find('#submit-login')
    submitButton.trigger('click')

    await flushPromises()
    
    // assertions
  })
})

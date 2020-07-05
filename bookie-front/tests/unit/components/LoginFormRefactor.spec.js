import VueCompositionApi from '@vue/composition-api'
import createLocalTestVue from '../../helpers/createLocalTestVue'
import { shallowMount, mount } from '@vue/test-utils'
import LoginForm from '@/components/auth/LoginForm.vue'
import flushPromises from 'flush-promises'

const { localVue, store } = createLocalTestVue({
  mutations: {
    showLoader: jest.fn(),
    hideLoader: jest.fn(),
  }
})

// jest module loader gets this 'hoisted' on top
jest.mock('@/services/AuthService.ts', () => ({
  login: jest.fn().mockResolvedValue({ userLogin: { id: '1', token: 'token', expiresIn: '1h' } })
}))

const AuthServiceLogin = require('@/services/AuthService.ts')

const mockloginData = { id: '1', token: 'token', expiresIn: '1h' }

const shallowMountFactory = (props) => shallowMount(LoginForm, {
  // mocks: {
  //   $store: store
  // },
  store: store,
  localVue,
  propsData: { ...props },
  stubs: ['router-link']
})

describe('LoginForm.vue', () => {
  let wrapper
  

  beforeEach(() => {
    wrapper = shallowMountFactory()
  })

  it.only('login functionality', async () => {
    expect.assertions(5)

    const loginData = { email: 'qqqq', password: 'qqqq' }
    setFormData(wrapper, loginData)

    const submitButton = wrapper.find('#submit-login')
    submitButton.trigger('click')
    
    expect(showLoader).toHaveBeenCalled()
    await flushPromises()
    expect(AuthServiceLogin.login).toHaveBeenCalled()
    expect(AuthServiceLogin.login.mock.calls.length).toBe(1)
    expect(AuthServiceLogin.login.mock.calls[0][0]).toStrictEqual(loginData)
    expect(hideLoader).toHaveBeenCalled()
  })

  it('form is cleared', async () => {
    expect.assertions(2)

    const loginData = { email: 'qqqq', password: 'qqqq' }

    wrapper.setData(loginData)
    const submitButton = wrapper.find('#submit-login')
    submitButton.trigger('click')

    await flushPromises()

    expect(wrapper.vm.email).toBe('')
    expect(wrapper.vm.password).toBe('')
  })
})

describe.skip('LoginForm', () => {
  it('computed returns the current user', async () => {
    expect.assertions(1)

    const wrapper = mount(LoginForm, {
      stubs: ['router-link'],
      mocks: {
        $store: store
      }
    })

    const loginData = { email: mockloginData.email, password: mockloginData.password }

    wrapper.setData(loginData)
    const submitButton = wrapper.find('#submit-login')
    submitButton.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.isLoggedIn).toEqual(true)
  })
})

// helper functions
const setFormData = (form, formData) => {
  form.find('[name="email"]').setValue(formData.email)
  form.find('[name="password"]').setValue(formData.password)
}

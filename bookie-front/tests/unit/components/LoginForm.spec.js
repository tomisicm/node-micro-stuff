import VueCompositionApi from '@vue/composition-api'
import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import LoginForm from '@/components/auth/LoginForm.vue'
import flushPromises from 'flush-promises'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
const mockloginData = { id: '1', token: 'token', expiresIn: '1h' }
jest.mock('@/services/AuthService.ts', () => ({
  login: jest.fn().mockResolvedValue({ userLogin: { id: '1', token: 'token', expiresIn: '1h' } })
}))
const AuthServiceLogin = require('@/services/AuthService.ts')

const mutations = {
  showLoader: jest.fn(),
  hideLoader: jest.fn()
}
const store = new Vuex.Store({
  mutations
})

const shallowMountFactory = (props) => shallowMount(LoginForm, {
  store: store,
  localVue: localVue,
  propsData: { ...props },
  stubs: ['router-link'],
})

describe('LoginForm.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMountFactory()
  })

  it.only('login functionality', async () => {
    expect.assertions(3)

    const loginData = { email: 'qqqq', password: 'qqqq' }
    setFormData(wrapper, loginData)

    const submitButton = wrapper.find('#submit-login')
    submitButton.trigger('click')

    await flushPromises()

    expect(AuthServiceLogin.login).toHaveBeenCalled()
    expect(AuthServiceLogin.login.mock.calls.length).toBe(1)
    expect(AuthServiceLogin.login.mock.calls[0][0]).toStrictEqual(loginData)
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

describe('LoginForm', () => {
  it('computed returns the current user', async () => {
    expect.assertions(2)

    const wrapper = mount(LoginForm, {
      stubs: ['router-link']
    })

    const loginData = { email: mockloginData.email, password: mockloginData.password }

    wrapper.setData(loginData)
    const submitButton = wrapper.find('#submit-login')
    submitButton.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.isLoggedIn).toEqual(true)
    expect(wrapper.vm.currentUser).toStrictEqual({ id: mockloginData.id, ...loginData })
  })
})


// helper functions
const setFormData = (form, formData) => {
  form.find('[name="email"]').setValue(formData.email)
  form.find('[name="password"]').setValue(formData.password)
}
// eslint-disable-next-line
import VueCompositionApi from '@vue/composition-api'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

const localVue = createLocalVue()

const shallowMountFactory = () => shallowMount(BaseCheckbox, {
  propsData: {
    value: true
  },
  localVue
})

describe('base-checkbox', () => {
  it('recieves a value prop', () => {
    const wrapper = shallowMountFactory()
    expect(wrapper.vm.value).toBe(true)
  })
})

describe('base-checkbox.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMountFactory()
  })

  it('emits an event', async () => {
    wrapper.vm.$emit('input', true)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input).toBeTruthy()
  })
})

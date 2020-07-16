import VueCompositionApi from '@vue/composition-api'
import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

const shallowMountFactory = () => {
    return shallowMount(BaseCheckbox, {
        propsData: {
          value: true
        },
        localVue
    })
}

describe('base-checkbox', () => {
  it('recieves a value prop', () => {
    let wrapper = shallowMountFactory()
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

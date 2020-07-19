import VueCompositionApi from '@vue/composition-api'
import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/base/BaseButton.vue'

const shallowMountFactory = () => {
  return shallowMount(BaseButton, {
    propsData: {
      value: true
    },
  })
}

describe('base-button.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMountFactory()
  })

  it('emits an event', async () => {
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().click).toBeTruthy()
  })
})

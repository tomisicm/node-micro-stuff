import { shallowMount } from '@vue/test-utils'
import HomeView from '@/components/HomeView.vue'

describe('HomeView.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.contains('div')).toBe(true)
    expect(wrapper.text()).toMatch('dicks')
  })
})

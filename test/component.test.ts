import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Main from '../src/components/Main.vue'

describe('Main.vue', () => {
  it('should render', () => {
    const wrapper = mount(Main)
    expect(wrapper.text()).toContain('广州地铁换乘助手')
  })

  it('should be interactive', async () => {
    const wrapper = mount(Main)
    await wrapper.get('input').setValue('mds')
    expect(wrapper.text()).toContain('磨碟沙')
  })
})

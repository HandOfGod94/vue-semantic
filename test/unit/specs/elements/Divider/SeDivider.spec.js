import SeDivider from '@/elements/Divider/SeDivider'
import { mount } from '@vue/test-utils'

describe('SeDivider snapshot test', () => {
  it('should match exisiting snapshot', () => {
    const wrapper = mount(SeDivider)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('SeDivider props tests', () => {
  it('should have horizontal class', () => {
    const data = { propsData: { horizontal: true } }
    const wrapper = mount(SeDivider, data)
    expect(wrapper.classes()).toContain('horizontal')
  })

  it('should have "fitted" class', () => {
    const data = { propsData: { fitted: true } }
    const wrapper = mount(SeDivider, data)
    expect(wrapper.classes()).toContain('fitted')
  })

  it('should have "clearing" class', () => {
    const data = { propsData: { clearing: true } }
    const wrapper = mount(SeDivider, data)
    expect(wrapper.classes()).toContain('clearing')
  })

  it('should have "section" class', () => {
    const data = { propsData: { section: true } }
    const wrapper = mount(SeDivider, data)
    expect(wrapper.classes()).toContain('section')
  })
})

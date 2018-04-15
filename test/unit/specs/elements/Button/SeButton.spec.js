import SeButton from '@/elements/Button/SeButton'
import { mount } from '@vue/test-utils'

describe('SeButton snapshot test', () => {
  it('should match with exisitng snapshot', () => {
    const wrapper = mount(SeButton)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should match with button having icon and label snapshot', () => {
    const data = { propsData: { icon: 'mail', label: 'Send Mail' } }
    const wrapper = mount(SeButton, data)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeButton classes test', () => {
  it('should have correct classes for primary color', () => {
    const data = { propsData: { color: 'primary' } }
    const wrapper = mount(SeButton, data)
    expect(wrapper.classes()).toContain('primary')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have correct classes for custom color', () => {
    const data = { propsData: { color: 'orange' } }
    const wrapper = mount(SeButton, data)
    expect(wrapper.classes()).toContain('orange')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have correct classes for circular variation', () => {
    const data = { propsData: { circular: true } }
    const wrapper = mount(SeButton, data)
    expect(wrapper.classes()).toContain('circular')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have correct classes for basic variation', () => {
    const data = { propsData: { basic: true } }
    const wrapper = mount(SeButton, data)
    expect(wrapper.classes()).toContain('basic')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "icon" class', () => {
    const data = { propsData: { icon: 'play' } }
    const wrapper = mount(SeButton, data)
    expect(wrapper.contains('i')).toBe(true)
    expect(wrapper.classes()).toContain('icon')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have correct classes for float', () => {
    const data = { propsData: { float: 'right' } }
    const wrapper = mount(SeButton, data)
    expect(wrapper.classes()).toContain('right')
    expect(wrapper.classes()).toContain('floated')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

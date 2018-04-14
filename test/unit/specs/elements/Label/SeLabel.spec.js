import SeLabel from '@/elements/Label/SeLabel'
import { mount } from '@vue/test-utils'

describe('SeLabel snapshot test', () => {
  it('should match with existing snapshot', () => {
    const wrapper = mount(SeLabel)
    expect(wrapper.classes()).toContain('ui')
    expect(wrapper.classes()).toContain('label')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeLabel classes test', () => {
  it('should have "floating" class', () => {
    const data = { propsData: { floating: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('floating')
  })

  it('should have "tag" class', () => {
    const data = { propsData: { tag: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('tag')
  })

  it('should have "ribbon" class', () => {
    const data = { propsData: { ribbon: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('ribbon')
  })

  it('should have "empty" class', () => {
    const data = { propsData: { empty: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('empty')
  })

  it('should have "corner" class', () => {
    const data = { propsData: { corner: 'left' } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('left')
    expect(wrapper.classes()).toContain('corner')
  })
})

describe('SeLabel mixin classes test', () => {
  it('should have "basic" class', () => {
    const data = { propsData: { basic: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('basic')
  })

  it('should have "circular" class', () => {
    const data = { propsData: { circular: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('circular')
  })

  it('should have "red" class for color', () => {
    const data = { propsData: { color: 'red' } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('red')
  })

  it('should have "mini" class for size', () => {
    const data = { propsData: { size: 'mini' } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('mini')
  })
})

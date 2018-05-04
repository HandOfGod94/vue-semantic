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
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "tag" class', () => {
    const data = { propsData: { tag: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('tag')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "ribbon" class', () => {
    const data = { propsData: { ribbon: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('ribbon')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "empty" class', () => {
    const data = { propsData: { empty: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('empty')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "corner" class', () => {
    const data = { propsData: { position: 'left corner' } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('left')
    expect(wrapper.classes()).toContain('corner')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeLabel mixin classes test', () => {
  it('should have "basic" class', () => {
    const data = { propsData: { basic: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('basic')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "circular" class', () => {
    const data = { propsData: { circular: true } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('circular')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "red" class for color', () => {
    const data = { propsData: { color: 'red' } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('red')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "mini" class for size', () => {
    const data = { propsData: { size: 'mini' } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.classes()).toContain('mini')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "detail" div as child', () => {
    const data = {
      propsData: { detail: 214 }
    }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.contains('.ui.label>div.detail')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

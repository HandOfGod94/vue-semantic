import SeHeader from '@/elements/Header/SeHeader.vue'
import { mount } from '@vue/test-utils'

const headerContent = 'Hello World'

describe('SeHeader basic snapshot test', () => {
  it('should match with exisiting snapshot', () => {
    const data = {propsData: {as: 'h1'}, slots: {default: headerContent}}
    const wrapper = mount(SeHeader, data)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeHeader classes test', () => {
  it('should have "disabled" class', () => {
    const data = {propsData: {as: 'h1', disabled: true}, slots: {default: headerContent}}
    const wrapper = mount(SeHeader, data)
    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "icon" child', () => {
    const data = {propsData: {as: 'h1', icon: 'settings'}, slots: {default: headerContent}}
    const wrapper = mount(SeHeader, data)
    expect(wrapper.contains('i')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "block" class', () => {
    const data = {propsData: {as: 'h1', block: true}, slots: {default: headerContent}}
    const wrapper = mount(SeHeader, data)
    expect(wrapper.classes()).toContain('block')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have aligned class', () => {
    const data = {propsData: {as: 'h1', align: 'right'}, slots: {default: headerContent}}
    const wrapper = mount(SeHeader, data)
    expect(wrapper.contains('.right.aligned')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have appropriate structure for content and subheader', () => {
    const data = {
      propsData: { as: 'h1', content: 'Hello World', subheader: 'Hello World Subheader' }
    }
    const wrapper = mount(SeHeader, data)
    expect(wrapper.contains('.ui.header>div.content>div.sub.header')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have appropriate structure when slots are used', () => {
    const data = {
      propsData: { as: 'h1' },
      slots: { content: 'Hello World', subheader: 'Hello World Subheader' }
    }
    const wrapper = mount(SeHeader, data)
    expect(wrapper.contains('.ui.header>div.content>div.sub.header')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "justified" class', () => {
    const data = {propsData: {as: 'h1', justified: true}, slots: {default: headerContent}}
    const wrapper = mount(SeHeader, data)
    expect(wrapper.classes()).toContain('justified')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have color class', () => {
    const data = {propsData: {as: 'h1', color: 'orange'}, slots: {default: headerContent}}
    const wrapper = mount(SeHeader, data)
    expect(wrapper.classes()).toContain('orange')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

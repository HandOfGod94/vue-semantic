import SeButtonGroup from '@/elements/Button/SeButtonGroup'
import SeButton from '@/elements/Button/SeButton'
import { mount } from '@vue/test-utils'

const labeledButtonsWrapper = {
  render (h) {
    return (
      <template>
        <SeButton label="hello"></SeButton>
        <SeButton label="world"></SeButton>
        <SeButton label="something"></SeButton>
      </template>
    )
  }
}

const buttonsWrapper = {
  render (h) {
    return (
      <template>
        <SeButton icon="play">First</SeButton>
        <SeButton icon="pause">Second</SeButton>
        <SeButton icon="mail">Third</SeButton>
      </template>
    )
  }
}

describe('SeButtonGroup snapshot test', () => {
  it('should match with exisitng snapshot', () => {
    const data = { slots: { default: buttonsWrapper } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeButtonGroup classes test', () => {
  it('should have "icon" class', () => {
    const data = { propsData: { icon: true } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('icon')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have number of columns in classList', () => {
    const data = { propsData: { width: 'three' }, slots: { default: buttonsWrapper } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('three')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "basic" class', () => {
    const data = { propsData: { basic: true }, slots: { default: buttonsWrapper } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('basic')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "vertical" class', () => {
    const data = { propsData: { vertical: true }, slots: { default: buttonsWrapper } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('vertical')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "orange" class for color', () => {
    const data = { propsData: { color: 'orange' }, slots: { default: buttonsWrapper } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('orange')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "huge" class for size', () => {
    const data = { propsData: { size: 'huge' }, slots: { default: buttonsWrapper } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('huge')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "labeled" class for size', () => {
    const data = { propsData: { labeled: true }, slots: { default: labeledButtonsWrapper } }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('labeled')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

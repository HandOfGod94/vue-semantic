import SeButtonGroup from '@/elements/Button/SeButtonGroup.vue'
import SeButton from '@/elements/Button/SeButton.vue'
import { mount } from '@vue/test-utils'

const labeledButtonTemplate = `
  <template>
    <se-button label="hello"></se-button>
    <se-button label="world"></se-button>
    <se-button label="something"></se-button>
  </template>
`

const buttonsTemplate = `
  <template>
    <se-button icon="play">First</se-button>
    <se-button icon="pause">Second</se-button>
    <se-button icon="mail">Third</se-button>
  </template>
`

describe('SeButtonGroup snapshot test', () => {
  it('should match with exisitng snapshot', () => {
    const data = { slots: { default: buttonsTemplate }, stubs: { 'se-button': SeButton } }
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
    const data = {
      propsData: { width: 'three' },
      slots: { default: buttonsTemplate },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('three')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "basic" class', () => {
    const data = {
      propsData: { basic: true },
      slots: { default: buttonsTemplate },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('basic')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "vertical" class', () => {
    const data = {
      propsData: { vertical: true },
      slots: { default: buttonsTemplate },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('vertical')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "orange" class for color', () => {
    const data = {
      propsData: { color: 'orange' },
      slots: { default: buttonsTemplate },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('orange')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "huge" class for size', () => {
    const data = {
      propsData: { size: 'huge' },
      slots: { default: buttonsTemplate },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('huge')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have "labeled" class for size', () => {
    const data = {
      propsData: { labeled: true },
      slots: { default: labeledButtonTemplate },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeButtonGroup, data)
    expect(wrapper.classes()).toContain('labeled')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

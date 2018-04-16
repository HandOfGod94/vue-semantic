import { SeImage } from '@/elements/Image'
import { mount } from '@vue/test-utils'

const imageContent = '<img src="static/user.png">'

describe('SeImage snapshot test', () => {
  it('should match with exisiting snapshot', () => {
    const wrapper = mount(SeImage)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeImage classes test', () => {
  it('should have size class', () => {
    const data = { propsData: { size: 'small' } }
    const wrapper = mount(SeImage, data)
    expect(wrapper.classes()).toContain('small')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have img as child', () => {
    const data = { propsData: { as: 'a' }, slots: { default: imageContent } }
    const wrapper = mount(SeImage, data)
    expect(wrapper.contains('a.ui.image>img')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have disabled class', () => {
    const data = { propsData: { disabled: true } }
    const wrapper = mount(SeImage, data)
    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have avatar class', () => {
    const data = { propsData: { avatar: true } }
    const wrapper = mount(SeImage, data)
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have bordered class', () => {
    const data = { propsData: { bordered: true } }
    const wrapper = mount(SeImage, data)
    expect(wrapper.classes()).toContain('bordered')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have bordered class', () => {
    const data = { propsData: { verticalAlign: 'middle' } }
    const wrapper = mount(SeImage, data)
    expect(wrapper.contains('img.ui.middle.aligned.image')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have centered class', () => {
    const data = { propsData: { verticalAlign: 'centered' } }
    const wrapper = mount(SeImage, data)
    expect(wrapper.classes()).toContain('centered')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

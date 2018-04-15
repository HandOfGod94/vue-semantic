import SeLabel from '@/elements/Label/SeLabel'
import SeLabelGroup from '@/elements/Label/SeLabelGroup'
import { mount } from '@vue/test-utils'

const labelWrapper = {
  render (h) {
    return (
      <SeLabel>Hello Label</SeLabel>
    )
  }
}

describe('SeLabelGroup Snapshot test', () => {
  it('should match with exisiting snapshot', () => {
    const data = { propsData: { circular: true }, slots: { default: labelWrapper } }
    const wrapper = mount(SeLabelGroup, data)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeLabelGroup classes test', () => {
  it('should have "tag" class', () => {
    const data = { propsData: { tag: true }, slots: { default: labelWrapper } }
    const wrapper = mount(SeLabelGroup, data)
    expect(wrapper.classes()).toContain('tag')
  })

  it('should have correct size in classes', () => {
    const data = { propsData: { size: 'huge' }, slots: { default: labelWrapper } }
    const wrapper = mount(SeLabelGroup, data)
    expect(wrapper.classes()).toContain('huge')
  })
})

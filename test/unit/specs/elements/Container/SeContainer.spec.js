import SeContainer from '@/elements/Container/SeContainer'
import { mount } from '@vue/test-utils'

const contentWrapper = `
  <div> Hello World </div>
`

describe('SeContainer', () => {
  it('should have margins as per text attr', () => {
    const data = { propsData: { text: true }, slots: { default: contentWrapper } }
    const wrapper = mount(SeContainer, data)
    expect(wrapper.contains('.text')).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should align properly', () => {
    const data = { propsData: { align: 'left' }, slots: { default: contentWrapper } }
    const wrapper = mount(SeContainer, data)
    expect(wrapper.classes()).toContain('left')
    expect(wrapper.classes()).toContain('aligned')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should contiain class for justified', () => {
    const data = { propsData: { justified: true }, slots: { default: contentWrapper } }
    const wrapper = mount(SeContainer, data)
    expect(wrapper.classes()).toContain('justified')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should contiain class for fluid', () => {
    const data = { propsData: { fluid: true }, slots: { default: contentWrapper } }
    const wrapper = mount(SeContainer, data)
    expect(wrapper.classes()).toContain('fluid')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

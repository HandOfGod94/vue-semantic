import SeHeader from '@/elements/Header/SeHeader'
import SeSubHeader from '@/elements/Header/SeSubHeader'
import { mount } from '@vue/test-utils'

const SubHeaderContent = {
  render (h) {
    return (
      <SeSubHeader>This is subheader</SeSubHeader>
    )
  }
}

describe('SeSubHeader inside SeHeader', () => {
  it('should be inside SeHeader(class="sub header")', () => {
    const data = { propsData: { as: 'h1', subheader: true }, slots: { default: SubHeaderContent } }
    const wrapper = mount(SeHeader, data)
    expect(wrapper.contains('div.sub.header')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

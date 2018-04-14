import SeLabel from '@/elements/Label/SeLabel'
import SeLabelDetail from '@/elements/Label/SeLabelDetail'
import { mount } from '@vue/test-utils'

/* Since SeLabelDetail will alwyas be part of SeLabel
* We have first mount SeLabel and then as part of its $slots.default
* we will mount SeLabelDetail
*/

const seLabelDetailWrapper = {
  render (h) {
    return (
      <SeLabelDetail> Hello World </SeLabelDetail>
    )
  }
}

describe('SeLabelDetail snapshot test', () => {
  it('should match with existing snapshot', () => {
    const data = { slots: { default: seLabelDetailWrapper } }
    const wrapper = mount(SeLabel, data)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('SeLabelDetail classes test', () => {
  it('should have default "ui" and "detail" classes', () => {
    const wrapper = mount(SeLabelDetail)
    expect(wrapper.classes()).toContain('ui')
    expect(wrapper.classes()).toContain('detail')
  })
})

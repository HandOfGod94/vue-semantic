import SeImage from '@/elements/Image/SeImage'
import SeImageGroup from '@/elements/Image/SeImageGroup'
import { mount } from '@vue/test-utils'

const images = `
  <template>
    <se-image src="static/user.png" />
    <se-image src="static/user.png" disabled />
    <se-image src="static/user.png" rounded />
  </template>
`

describe('SeImageGroup snapshot test', () => {
  it('should match with existing snapshot', () => {
    const data = {
      propsData: {
        size: 'small'
      },
      slots:
      {
        default: images
      },
      stubs: {
        'se-image': SeImage
      }
    }
    const wrapper = mount(SeImageGroup, data)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

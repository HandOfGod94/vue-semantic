import SeInput from '@/elements/Input/SeInput'
import SeButton from '@/elements/Button/SeButton'
import { mount } from '@vue/test-utils'
import Vue from 'vue'

const actionSlot = `
  <template>
    <se-button color="teal" icon="cart" label="Checkout" />
  </template>
`

const ParentComponent = {
  template: `
    <div id="test">
      <se-input type="text" name="test" v-model="testdata" />
    </div>
  `,
  data () {
    return {
      testdata: 'worldhello'
    }
  }
}

describe('SeInput props testing', () => {
  it('should render basic text input field', () => {
    const data = {
      propsData: { type: 'text' }
    }
    const wrapper = mount(SeInput, data)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have focus on the filed', () => {
    const data = {
      propsData: { type: 'text', focus: true }
    }
    const wrapper = mount(SeInput, data)
    expect(wrapper.classes()).toContain('focus')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have left action button', () => {
    const data = {
      propsData: { type: 'text', action: true, actionPosition: 'left' },
      slots: { leftAction: actionSlot },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeInput, data)
    expect(wrapper.contains('.left.action')).toBe(true)
    expect(wrapper.contains(SeButton)).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have right action button', () => {
    const data = {
      propsData: { type: 'text', action: true, actionPosition: 'right' },
      slots: { rightAction: actionSlot },
      stubs: { 'se-button': SeButton }
    }
    const wrapper = mount(SeInput, data)
    expect(wrapper.contains('.right.action')).toBe(true)
    expect(wrapper.find(SeButton).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should update data based on input\'s value', done => {
    const parentWrapper = mount(ParentComponent, {
      stubs: { 'se-input': SeInput }
    })
    const seInput = parentWrapper.find(SeInput)
    const newValue = 'helloworld'
    parentWrapper.setData({testdata: 'helloworld'})
    expect(parentWrapper.html()).toMatchSnapshot()
    expect(parentWrapper.contains(SeInput)).toBe(true)
    Vue.nextTick(() => {
      expect(parentWrapper.vm.testdata).toBe(newValue)
      expect(seInput.find('input').element.value).toBe(newValue)
      done()
    })
  })

  it('should update data based event value', done => {
    const parentWrapper = mount(ParentComponent, {
      stubs: { 'se-input': SeInput }
    })
    const seInput = parentWrapper.find(SeInput)
    const newValue = 'helloworld'
    seInput.vm.$emit('input', newValue)
    expect(parentWrapper.html()).toMatchSnapshot()
    expect(parentWrapper.contains(SeInput)).toBe(true)
    Vue.nextTick(() => {
      expect(parentWrapper.vm.testdata).toBe(newValue)
      done()
    })
  })
})

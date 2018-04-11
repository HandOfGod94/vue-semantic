import Vue from 'vue'
import SeButton from '@/elements/Button/SeButton'

describe('SeButton Color', () => {
  it('should have correct classes for primary color', () => {
    const propsData = { propsData: { color: 'primary' } }
    const Constructor = Vue.extend(SeButton)
    const vm = new Constructor(propsData).$mount()
    expect(vm.$el.classList.contains('primary')).toBeTruthy()
    expect(vm.$el).toMatchSnapshot()
  })

  it('should have correct classes for secondary color', () => {
    const propsData = { propsData: { color: 'secondary' } }
    const Constructor = Vue.extend(SeButton)
    const vm = new Constructor(propsData).$mount()
    expect(vm.$el.classList.contains('secondary')).toBeTruthy()
    expect(vm.$el).toMatchSnapshot()
  })

  it('should have correct classes for custom color', () => {
    const propsData = { propsData: { color: 'orange' } }
    const Constructor = Vue.extend(SeButton)
    const vm = new Constructor(propsData).$mount()
    expect(vm.$el.classList.contains('orange')).toBeTruthy()
    expect(vm.$el).toMatchSnapshot()
  })
})

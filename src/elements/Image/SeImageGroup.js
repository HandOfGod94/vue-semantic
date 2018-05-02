import SeImageGroupComponent from './SeImageGroup.functional'

export default {
  name: 'se-image-group',
  props: {
    size: String
  },

  computed: {
    classObject () {
      return {
        ui: true,
        [this.size]: this.size,
        images: true
      }
    }
  },

  render (createElement) {
    return createElement(SeImageGroupComponent, {
      attrs: {
        slots: this.$slots
      },
      class: this.classObject
    })
  }
}

import SeContainerComponent from './SeContainer.functional'

export default {
  name: 'se-container',

  props: {
    text: Boolean,
    align: String,
    justified: Boolean,
    fluid: Boolean
  },

  computed: {
    classObject () {
      return {
        ui: true,
        text: this.text,
        [`${this.align} aligned`]: this.align,
        justified: this.justified,
        fluid: this.fluid,
        container: true
      }
    }
  },

  render (createElement) {
    return createElement(SeContainerComponent, {
      attrs: {
        slots: this.$slots
      },
      class: this.classObject
    })
  }
}

import SeButtonComponent from './SeButton.functional'

export default {
  name: 'se-button',
  props: {
    as: { type: String, default: 'button' },
    active: Boolean,
    attach: String,
    color: String,
    label: String,
    labelPosition: { type: String, default: '' },
    icon: String,
    basic: Boolean,
    inverted: Boolean,
    disabled: Boolean,
    loading: Boolean,
    size: String,
    float: String,
    compact: Boolean,
    fluid: Boolean,
    circular: Boolean
  },
  computed: {
    classObject () {
      return {
        fluid: this.fluid,
        [this.size]: this.size,
        compact: this.compact,
        circular: this.circular,
        ui: true, // Semantic ui class
        [`${this.attach} attached`]: this.attach,
        [`${this.float} floated`]: this.float,
        disabled: this.disabled,
        inverted: this.inverted,
        [this.color]: this.color,
        loading: this.loading,
        [`${this.labelPosition} labeled`]: this.labelPosition || this.label,
        icon: this.icon,
        basic: this.basic,
        button: true
      }
    }
  },

  render (createElement) {
    return createElement(SeButtonComponent, {
      attrs: {
        ...this.$props,
        slots: this.$slots
      },
      class: this.classObject
    })
  }
}

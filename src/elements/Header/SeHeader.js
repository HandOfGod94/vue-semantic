import SeHeaderFunctional from './SeHeader.functional'

export default {
  name: 'se-header',
  props: {
    as: { type: String, required: true },
    inverted: Boolean,
    sub: Boolean,
    block: Boolean,
    icon: String,
    iconHeader: Boolean,
    float: String,
    disabled: Boolean,
    align: String,
    justified: Boolean,
    color: String,
    content: String,
    subheader: String
  },

  computed: {
    classObject () {
      return {
        ui: true,
        inverted: this.inverted,
        [this.color]: this.color,
        [`${this.float} floated`]: this.float,
        [`${this.align} aligned`]: this.align,
        disabled: this.disabled,
        icon: this.iconHeader,
        sub: this.sub,
        block: this.block,
        justified: this.justified,
        header: true
      }
    }
  },

  render (create) {
    return create(SeHeaderFunctional, {
      attrs: {
        ...this.$props,
        slots: this.$slots
      },
      class: this.classObject
    })
  }
}

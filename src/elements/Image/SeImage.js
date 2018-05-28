import SeImageComponent from './SeImage.functional'

export default {
  name: 'se-image',
  props: {
    as: { type: String, default: 'img' },
    src: { type: String, require: true },
    size: String,
    hidden: Boolean,
    disabled: Boolean,
    avatar: Boolean,
    bordered: Boolean,
    fluid: Boolean,
    rounded: Boolean,
    circular: Boolean,
    verticalAlign: String,
    centered: Boolean,
    spaced: [Boolean, String],
    float: String
  },

  computed: {
    classObject () {
      return {
        ui: true,
        hidden: this.hidden,
        disabled: this.disabled,
        [this.size]: this.size,
        bordered: this.bordered,
        avatar: this.avatar,
        fluid: this.fluid,
        rounded: this.rounded,
        circular: this.circular,
        [`${this.verticalAlign} aligned`]: this.verticalAlign,
        centered: this.centered,
        [`${this.spaced} spaced`]: !!this.spaced,
        [`${this.float} floated`]: this.float,
        image: true
      }
    }
  },

  render (createElement) {
    return createElement(SeImageComponent, {
      attrs: {
        ...this.$props,
        slots: this.$slots
      },
      class: this.classObject
    })
  }
}

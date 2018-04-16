
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
    verticalAlign: Boolean,
    centered: Boolean,
    spaced: Boolean,
    float: String
  },
  computed: {
    classes: function () {
      let classes = {
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
        spaced: this.spaced,
        [`${this.float} floated`]: this.float,
        image: true
      }
      return classes
    }
  },
  render: function (h) {
    let Image = this.as
    return (
      <Image class={this.classes} src={this.as === 'img' && this.src}>
        { this.as !== 'img' && this.$slots.default}
      </Image>
    )
  }
}

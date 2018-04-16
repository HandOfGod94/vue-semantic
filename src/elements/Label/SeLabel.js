
export default {
  name: 'se-label',
  props: {
    as: { type: String, default: 'div' },
    image: Boolean,
    color: String,
    basic: Boolean,
    empty: Boolean,
    circular: Boolean,
    size: String,
    corner: String,
    tag: Boolean,
    ribbon: Boolean,
    pointing: String,
    horizontal: Boolean,
    floating: Boolean,
    attach: String
  },
  computed: {
    classes: function () {
      let classes = {
        floating: this.floating,
        ui: true,
        [this.size]: this.size,
        image: this.image,
        tag: this.tag,
        ribbon: this.ribbon,
        [this.color]: this.color,
        empty: this.empty,
        horizontal: this.horizontal,
        circular: this.circular,
        basic: this.basic,
        [`${this.corner} corner`]: this.corner,
        [`${this.pointing} pointing`]: this.pointing,
        [`${this.attach} attached`]: this.attach,
        label: true
      }
      return classes
    }
  },
  render: function (h) {
    let Label = this.as
    return (
      <Label class={this.classes}>
        {this.$slots.default}
      </Label>
    )
  }
}

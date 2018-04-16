
export default {
  name: 'se-container',
  props: {
    text: Boolean,
    align: String,
    justified: Boolean,
    fluid: Boolean
  },
  computed: {
    classes: function () {
      const classes = {
        ui: true,
        text: this.text,
        [`${this.align} aligned`]: this.align,
        justified: this.justified,
        fluid: this.fluid,
        container: true
      }
      return classes
    }
  },
  render: function (h) {
    return (
      <div class={this.classes}>
        {this.$slots.default}
      </div>
    )
  }
}

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

  render (h) {
    return (
      <div class={this.classObject}>
        {this.$slots.default}
      </div>
    )
  }
}

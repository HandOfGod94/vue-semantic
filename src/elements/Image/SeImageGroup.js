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

  render (h) {
    return (
      <div class={this.classObject}>
        {this.$slots.default}
      </div>
    )
  }
}

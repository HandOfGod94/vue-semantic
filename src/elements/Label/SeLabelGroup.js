
export default {
  name: 'se-label-group',
  props: {
    size: String,
    color: String,
    tag: Boolean,
    circurlar: Boolean
  },
  computed: {
    classes: function () {
      let classes = {
        ui: true,
        [this.size]: this.size,
        [this.color]: this.color,
        tag: this.tag,
        circurlar: this.circurlar,
        labels: true
      }
      return classes
    }
  },
  render (h) {
    return (
      <div class={this.classes}>
        {this.$slots.default}
      </div>
    )
  }
}

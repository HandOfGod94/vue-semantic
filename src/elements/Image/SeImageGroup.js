import Vue from 'vue'

export default {
  name: 'se-image-group',
  props: {
    size: String
  },
  computed: {
    classes: function () {
      let classes = {
        ui: true,
        [this.size]: this.size,
        images: true
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

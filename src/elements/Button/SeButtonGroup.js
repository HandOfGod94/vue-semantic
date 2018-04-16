
export default {
  name: 'se-button-group',
  props: {
    icon: Boolean,
    width: String,
    vertical: Boolean,
    labeled: Boolean,
    color: String,
    basic: Boolean,
    size: String
  },
  computed: {
    classes: function () {
      const classes = {
        [this.size]: this.size,
        [this.width]: this.width,
        [this.color]: this.color,
        ui: true,
        vertical: this.vertical,
        labeled: this.labeled,
        icon: this.icon,
        basic: this.basic,
        buttons: true
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

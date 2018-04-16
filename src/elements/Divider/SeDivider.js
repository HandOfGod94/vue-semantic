
export default {
  name: 'se-divider',
  props: {
    horizontal: Boolean,
    inverted: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    section: Boolean,
    clearing: Boolean
  },
  computed: {
    classes: function () {
      const classes = {
        ui: true,
        horizontal: this.horizontal,
        inverted: this.inverted,
        fitted: this.fitted,
        hidden: this.hidden,
        section: this.section,
        clearing: this.clearing,
        divider: true
      }
      return classes
    }
  },
  render: function (h) {
    return (
      <div class={this.classes}></div>
    )
  }
}

import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-button-group',
  props: {
    icon: Boolean,
    width: String,
    vertical: Boolean,
    labeled: Boolean,
    color: String,
    basic: Boolean,
    size: String
  }
})
class SeButtonGroup extends Vue {
  render (h) {
    return (
      <div class={this.classes}>
        {this.$slots.default}
      </div>
    )
  }

  get classes () {
    const classes = {
      [this.width]: this.width,
      [this.color]: this.color,

      ui: true,

      vertical: this.vertical,
      labeled: this.labeled,
      icon: this.icon,

      buttons: true
    }
    return classes
  }
}

export default SeButtonGroup

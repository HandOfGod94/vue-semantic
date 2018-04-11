import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-button',
  props: {
    color: String,
    label: String,
    icon: String,
    basic: Boolean,
    inverted: Boolean,
    disabled: Boolean,
    loading: Boolean,
    size: String,
    float: String,
    compact: Boolean,
    fluid: Boolean,
    circular: Boolean
  }
})
class SeButton extends Vue {
  render (h) {
    return (
      <button class={this.classes}>
        { this.icon && <i class={`${this.icon} icon`}></i> }
        {this.label}
        {this.$slots.default}
      </button>
    )
  }

  get classes () {
    const classes = {
      [this.size]: this.size,
      compact: this.compact,
      circular: this.circular,

      ui: true,

      [`${this.float} floated`]: this.float,
      disabled: this.disabled,
      inverted: this.inverted,
      [this.color]: this.color,
      loading: this.loading,
      labeled: this.label,
      icon: this.icon,
      basic: this.basic,

      button: true
    }
    return classes
  }
}

export default SeButton

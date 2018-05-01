import SeButtonGroupComponent from './SeButtonGroup.functional'

export default {
  name: 'se-button-group',
  props: {
    icon: Boolean,
    width: String,
    vertical: Boolean,
    labeled: Boolean,
    color: String,
    attach: String,
    basic: Boolean,
    size: String
  },
  computed: {
    classObject () {
      return {
        [this.size]: this.size,
        [this.width]: this.width,
        [this.color]: this.color,
        ui: true,
        [`${this.attach} attached`]: this.attach,
        vertical: this.vertical,
        labeled: this.labeled,
        icon: this.icon,
        basic: this.basic,
        buttons: true
      }
    }
  },
  render (createElement) {
    return createElement(SeButtonGroupComponent, {
      attrs: {
        slots: this.$slots
      },
      class: this.classObject
    })
  }
}

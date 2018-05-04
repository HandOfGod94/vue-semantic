import SeInputComponent from './SeInput.functional'

export default {
  name: 'se-input',
  props: {
    type: { type: String, required: true },
    action: Boolean,
    actionPosition: String,
    disabled: Boolean,
    fluid: Boolean,
    placeholderText: String,
    focus: Boolean,
    loading: Boolean,
    icon: String,
    iconPosition: String,
    labelPosition: String,
    error: Boolean,
    value: String,
    name: String
  },

  computed: {
    classObject () {
      return {
        ui: true,
        fluid: this.fluid,
        disabled: this.disabled,
        [`${this.actionPosition} action`]: this.action,
        [`${this.labelPosition} labeled`]: this.labelPosition,
        focus: this.focus,
        [this.iconPosition]: this.iconPosition,
        icon: this.icon,
        loading: this.loading,
        input: true,
        error: this.error
      }
    },
    inputListener () {
      const inputEvent = { input: event => this.$emit('input', event.target.value) }
      return Object.assign({}, this.$listeners, inputEvent)
    }
  },

  render (createElement) {
    return createElement(SeInputComponent, {
      attrs: {
        ...this.$props,
        slots: this.$slots
      },
      class: this.classObject,
      on: this.inputListener
    })
  }
}

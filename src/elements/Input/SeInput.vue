<template>
  <div :class="classObject">
    <slot name="left-action"></slot>
    <slot name="left-label"></slot>
    <input :type="type" :placeholder="placeholderText" :value="value" v-on="inputListener" />
    <i v-if="icon" :class="`${classObject.icon} icon`"></i>
    <slot name="right-label"></slot>
    <slot name="right-action"></slot>
  </div>
</template>

<script>
import SeLabel from '../Label/SeLabel.vue'

export default {
  name: 'se-input',
  props: {
    type: { type: String, required: true },
    action: Boolean,
    actionPosition: String,
    disabled: Boolean,
    placeholderText: String,
    focus: Boolean,
    loading: Boolean,
    icon: String,
    iconPosition: String,
    labelPosition: String,
    error: Boolean,
    value: String
  },
  computed: {
    classObject () {
      return {
        ui: true,
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
      let vm = this
      let inputEvent = {
        input: function (event) {
          vm.$emit('input', event.target.value)
        }
      }
      return Object.assign({}, this.$listeners, inputEvent)
    }
  },
  components: {
    SeLabel
  }
}
</script>

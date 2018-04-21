<template>
  <component :is="as" :class="classObject">
    <i :class="`${this.icon} icon`" v-if="classObject.icon"></i>
    <slot name="label">
      {{label}}
    </slot>
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'se-button',
  props: {
    as: { type: String, default: 'button' },
    active: Boolean,
    attach: String,
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
  },
  computed: {
    classObject () {
      return {
        [this.size]: this.size,
        compact: this.compact,
        circular: this.circular,
        ui: true, // Semantic ui class
        [`${this.attach} attached`]: this.attach,
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
    }
  }
}
</script>

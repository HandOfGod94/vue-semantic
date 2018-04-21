<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'se-container',
  props: {
    text: Boolean,
    align: String,
    justified: Boolean,
    fluid: Boolean
  },
  computed: {
    classObject () {
      return {
        ui: true,
        text: this.text,
        [`${this.align} aligned`]: this.align,
        justified: this.justified,
        fluid: this.fluid,
        container: true
      }
    }
  }
}
</script>

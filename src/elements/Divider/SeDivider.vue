<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
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
    // TODO: Add floating header
    classObject () {
      return {
        ui: true,
        horizontal: this.horizontal,
        inverted: this.inverted,
        fitted: this.fitted,
        hidden: this.hidden,
        section: this.section,
        clearing: this.clearing,
        divider: true
      }
    }
  }
}
</script>

<style>

</style>

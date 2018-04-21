<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'se-label-group',
  props: {
    size: String,
    color: String,
    tag: Boolean,
    circurlar: Boolean
  },
  computed: {
    classObject () {
      return {
        ui: true,
        [this.size]: this.size,
        [this.color]: this.color,
        tag: this.tag,
        circurlar: this.circurlar,
        labels: true
      }
    }
  }
}

</script>

<style>

</style>

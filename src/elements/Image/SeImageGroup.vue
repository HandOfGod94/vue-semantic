<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'se-image-group',
  props: {
    size: String
  },
  computed: {
    classObject () {
      return {
        ui: true,
        [this.size]: this.size,
        images: true
      }
    }
  }
}
</script>

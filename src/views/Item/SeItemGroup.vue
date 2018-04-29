<template>
  <component :is="as" :class="classObject">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'se-item-group',
  props: {
    as: { type: String, default: 'div' },
    stackable: Boolean,
    divided: Boolean,
    relaxed: Boolean,
    link: Boolean,
    items: Array
  },
  computed: {
    classObject () {
      return {
        ui: true,
        stackable: this.stackable,
        divided: this.divided,
        relaxed: this.relaxed,
        link: this.link,
        items: true
      }
    }
  }
}
</script>

<style>

</style>

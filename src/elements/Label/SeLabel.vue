<template>
  <component :is="as" :class="classObject">
    <slot></slot>
    <div v-if="hasDetail" class="detail">
      <slot name="detail">{{detail}}</slot>
    </div>
  </component>
</template>

<script>
export default {
  name: 'se-label',
  props: {
    as: { type: String, default: 'div' },
    image: Boolean,
    color: String,
    basic: Boolean,
    empty: Boolean,
    circular: Boolean,
    size: String,
    position: String,
    tag: Boolean,
    ribbon: Boolean,
    pointing: Boolean,
    horizontal: Boolean,
    floating: Boolean,
    attach: Boolean,
    detail: String
  },
  computed: {
    classObject () {
      return {
        floating: this.floating,
        ui: true,
        [this.size]: this.size,
        image: this.image,
        tag: this.tag,
        ribbon: this.ribbon,
        [this.color]: this.color,
        empty: this.empty,
        horizontal: this.horizontal,
        circular: this.circular,
        basic: this.basic,
        [this.position]: this.position,
        pointing: this.pointing,
        attached: this.attach,
        label: true
      }
    },
    hasDetail () { return !!this.$slots['detail'] || this.detail }
  }
}
</script>

<style>

</style>

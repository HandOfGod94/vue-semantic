<template>
  <div :class="outerClassObject">
    <div :class="innerClassObject">
      <div v-if="$slots.content || content" class="content">
        <slot name="content">
          {{content}}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'se-dimmer',

  props: {
    content: String,
    active: Boolean,
    disabled: Boolean,
    page: Boolean,
    blurring: Boolean,
    align: String,
    simple: Boolean,
    inverted: Boolean
  },

  computed: {
    innerClassObject () {
      return {
        ui: true,
        disabled: this.disabled,
        active: this.active,
        inverted: this.inverted,
        [`${this.align} aligned`]: this.align,
        dimmer: true
      }
    },

    outerClassObject () {
      return {
        ui: true,
        page: this.page,
        blurring: this.blurring,
        'dimmable dimmed': this.simple,
        segment: true
      }
    }
  }
}
</script>

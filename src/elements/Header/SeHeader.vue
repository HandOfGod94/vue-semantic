<template>
  <component :is="as" :class="classObject">
    <i v-if="icon" :class="`${icon} icon`"></i>
    <slot></slot>
    <div v-if="hasContent" class="content">
      <slot name="content">
        {{content}}
      </slot>
      <div v-if="hasSubheader" class="sub header" >
        <slot name="subheader">
          {{subheader}}
        </slot>
      </div>
   </div>
  </component>
</template>

<script>
export default {
  name: 'se-header',
  props: {
    as: { type: String, required: true },
    inverted: Boolean,
    sub: Boolean,
    block: Boolean,
    iconHeader: Boolean,
    icon: String,
    disabled: Boolean,
    align: String,
    justified: Boolean,
    color: String,
    content: String,
    subheader: String
  },
  computed: {
    classObject () {
      return {
        ui: true,
        inverted: this.inverted,
        [this.color]: this.color,
        [`${this.align} aligned`]: this.align,
        disabled: this.disabled,
        icon: this.iconHeader,
        sub: this.sub,
        block: this.block,
        justified: this.justified,
        header: true
      }
    },
    hasContent () { return !!this.$slots['content'] || this.content },
    hasSubheader () { return !!this.$slots['subheader'] || this.subheader }
  }
}
</script>

<style>

</style>

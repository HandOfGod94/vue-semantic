<template>
  <component :is="as" :class="classObject">
    <slot>{{itemInstance.text}}</slot>
    <slot name="image">
      <se-image v-if="itemInstance.image" v-bind="itemInstance.image" />
    </slot>
    <slot name="icon">
      <i v-if="itemInstance.icon" :class="`${itemInstance.icon} icon`"></i>
    </slot>
    <div v-if="hasComplexContent" :class="contentClassObject">
      <slot name="header">
        <se-header v-if="itemInstance.content.header" v-bind="itemInstance.content.header" />
      </slot>
      <slot name="meta">
        <div v-if="itemInstance.content.meta" class="meta"><span>{{itemInstance.content.meta}}</span></div>
      </slot>
      <slot name="description">
        <div v-if="itemInstance.content.description" class="description" v-html="itemInstance.content.description"></div>
      </slot>
      <slot name="extra">
        <div v-if="itemInstance.content.extra" class="extra">
          <i v-if="itemInstance.content.extra.icon" :class="`${itemInstance.content.extra.icon} icon`"></i>
          {{itemInstance.content.extra.description}}
        </div>
      </slot>
    </div>
    <div v-else :class="contentClassObject">
      {{itemInstance.content}}
    </div>
  </component>
</template>

<script>
import SeImage from '../../elements/Image/SeImage.vue'
import SeHeader from '../../elements/Header/SeHeader.vue'
import { Item } from '../../utils/ItemType'

export default {
  name: 'se-item',
  props: {
    as: { type: String, default: 'div' },
    item: [Object, Item]
  },
  computed: {
    itemInstance () {
      if (this.item instanceof Item) return this.item
      else return new Item({...this.item})
    },
    classObject () {
      return { item: true }
    },
    hasComplexContent () {
      return this.itemInstance.hasComplexContent()
    },
    contentClassObject () {
      let verticalAlign = null
      if (this.hasComplexContent) { verticalAlign = this.itemInstance.content.verticalAlign }
      return {
        [`${verticalAlign} aligned`]: verticalAlign,
        content: true
      }
    }
  },
  components: {
    SeImage,
    SeHeader
  }
}
</script>

<style>

</style>

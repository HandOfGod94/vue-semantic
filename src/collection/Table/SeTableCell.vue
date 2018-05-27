<template>
  <td :class="classObject">
    <component :is="currentComponent"
      type="text"
      v-model="currentData">
      {{currentData}}
    </component>
  </td>
</template>

<script>
import SeInput from '../../elements/Input/SeInput'

export default {
  name: 'se-table-cell',
  data () {
    return {
      currentData: this.content
    }
  },

  props: {
    content: [String, Number, Object],
    positive: Boolean,
    negative: Boolean,
    error: Boolean,
    warning: Boolean,
    active: Boolean,
    disabled: Boolean,
    editable: Boolean
  },

  computed: {
    classObject () {
      return {
        positive: this.positive,
        negative: this.negative,
        error: this.error,
        warning: this.warning,
        active: this.active,
        disabled: this.disabled,
        editable: this.editable
      }
    },

    currentComponent () {
      return (this.editable) ? 'se-input' : 'span'
    }
  },

  components: {
    SeInput
  }
}

</script>

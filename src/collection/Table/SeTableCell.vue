<template>
  <td :class="classObject">
    <component :is="currentComponent"
      type="text"
      fluid
      v-model="currentData">
      {{currentData}}
    </component>
  </td>
</template>

<script>
import SeInput from '../../elements/Input/SeInput'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('table')

export default {
  name: 'se-table-cell',
  data () {
    return {
      currentData: this.content
    }
  },

  props: {
    content: [String, Number, Object],
    column: {type: String, required: true},
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
        error: this.metaError,
        warning: this.metaWarning,
        active: this.active,
        disabled: this.disabled,
        editable: this.metaEditable
      }
    },

    metaEditable () {
      let isEditable = false
      let val = { [this.column]: this.content }
      if (this.meta) {
        isEditable = this.meta.isEditable(val)
      }
      return isEditable || this.editable
    },

    metaError () {
      let isError = false
      let val = { [this.column]: this.content }
      isError = this.meta.hasError(val)
      return isError || this.error
    },

    metaWarning () {
      let isWarning = false
      let val = { [this.column]: this.content }
      isWarning = this.meta.hasWarning(val)
      return isWarning || this.warning
    },

    currentComponent () {
      return this.metaEditable ? 'se-input' : 'span'
    },

    ...mapState({
      meta: tableState => tableState.meta
    })
  },

  components: {
    SeInput
  }
}

</script>

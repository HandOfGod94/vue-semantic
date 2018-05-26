<template>
  <tr :class="classObject">
    <se-table-cell v-for="(i, idx) in Object.keys(rowData)" :key="idx"
      :content="rowData[i]"
      :editable="editable"
    />
  </tr>
</template>

<script>
import SeTableCell from './SeTableCell.vue'

export default {
  name: 'se-table-row',
  props: {
    positive: Boolean,
    negative: Boolean,
    error: Boolean,
    warning: Boolean,
    active: Boolean,
    disabled: Boolean,
    editable: Boolean,
    rowData: [String, Number, Object]
  },

  computed: {
    classObject () {
      return {
        positive: this.positive,
        negative: this.negative,
        error: this.error,
        warning: this.warning,
        active: this.active,
        disabled: this.disabled
      }
    }
  },

  components: {
    SeTableCell
  }
}
</script>

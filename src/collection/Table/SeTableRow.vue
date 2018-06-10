<template>
  <tr :class="classObject">
    <se-table-cell v-for="(k, idx) in Object.keys(rowData)" :key="idx"
      :content="rowData[k]"
      :column="k"
    />
  </tr>
</template>

<script>
import SeTableCell from './SeTableCell.vue'

export default {
  name: 'se-table-row',
  props: {
    active: Boolean,
    disabled: Boolean,
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

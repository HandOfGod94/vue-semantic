<template>
  <tr :class="classObject">
    <slot>
      <se-table-cell
        v-for="(k, idx) in columns" :key="idx"
        :content="rowData[k]"
        :column="k"
        :row-num="rowNum"
      />
    </slot>
  </tr>
</template>

<script>
import SeTableCell from './SeTableCell.vue'

export default {
  name: 'se-table-row',
  props: {
    active: Boolean,
    disabled: Boolean,
    error: Boolean,
    warning: Boolean,
    positive: Boolean,
    negative: Boolean,
    rowData: [String, Number, Object],
    rowNum: Number
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
    },

    columns () {
      let k = []
      if (this.rowData && Object.keys(this.rowData).length > 0) { k = Object.keys(this.rowData) }
      return k
    }

  },

  components: {
    SeTableCell
  }
}
</script>

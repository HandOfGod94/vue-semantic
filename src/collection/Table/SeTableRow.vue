<template>
  <tr :class="classObject">
    <se-table-cell v-for="(headerKey, idx) in Object.keys(rowData)" :key="idx"
      :content="rowData[headerKey]"
      :editable="isEditable(headerKey)"
    />
  </tr>
</template>

<script>
import SeTableCell from './SeTableCell.vue'
import TableMetadata from '../../meta/TableMetadata.ts'

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
    rowData: [String, Number, Object],
    meta: TableMetadata
  },

  methods: {
    isEditable (header) {
      return this.meta.isEditable(header)
    }
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

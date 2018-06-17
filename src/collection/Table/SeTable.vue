<template>
  <table :class="classObject">
    <slot>
      <se-table-header :headers="headers" />
      <se-table-row v-for="(row, idx) in data" :key="idx"
        :row-data="row"
        :row-num="idx"/>
    </slot>
  </table>
</template>

<script>
import SeTableHeader from './SeTableHeader.vue'
import SeTableRow from './SeTableRow.vue'
import TableMetadata from '../../meta/TableMetadata'
import { SET_TABLE_DATA, SET_TABLE_META } from './TableStore'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers('table')

export default {
  name: 'se-table',
  // TODO: Add two more props for searchable and editable
  props: {
    celled: Boolean,
    definition: Boolean,
    compact: Boolean,
    structured: Boolean,
    singleLine: Boolean,
    fixed: Boolean,
    unstackable: Boolean,
    selectable: Boolean,
    striped: Boolean,
    very: Boolean,
    basic: Boolean,
    column: Number,
    collapsing: Boolean,
    color: String,
    inverted: Boolean,
    sortable: Boolean,
    padded: Boolean,
    size: String,
    searchable: Boolean,
    tableMeta: TableMetadata,
    tableHeader: Array,
    tableData: Array
  },

  methods: {
    ...mapMutations({
      setTableData: SET_TABLE_DATA,
      setTableMeta: SET_TABLE_META
    })
  },

  mounted () {
    if (!this.$slots.default) {
      this.setTableData(this.tableData)
      this.setTableMeta(this.tableMeta)
    }
  },

  computed: {
    ...mapState({
      data: tableState => tableState.tableData
    }),

    classObject () {
      return {
        ui: true,
        unstackable: this.unstackable,
        inverted: this.inverted,
        color: this.color,
        size: this.size,
        very: this.very,
        compact: this.compact,
        basic: this.basic,
        padded: this.padded,
        sortable: this.sortable,
        collapsing: this.collapsing,
        [`${this.column} column`]: this.column,
        striped: this.striped,
        selectable: this.selectable,
        fixed: this.fixed,
        'single line': this.singleLine,
        celled: this.celled,
        definition: this.definition,
        structured: this.structured,
        table: true
      }
    },

    headers () {
      let header = {}
      // if tableHeader prop is passed use that
      // else keys of json objects will be the tableHeader
      if (this.tableHeader && this.tableHeader.length > 0) {
        header = this.tableHeader
      } else if (this.tableData && this.tableData.length > 0) {
        // Assume tableData is an array of json Object
        header = Object.keys(this.tableData[0])
      }
      return header
    }
  },

  components: {
    SeTableHeader,
    SeTableRow
  }
}
</script>

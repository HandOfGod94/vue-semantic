<template>
  <table :class="classObject">
    <se-table-header :headers="headers" />
    <se-table-row v-for="(row, idx) in tableData" :key="idx"
      :row-data="row"
      :editable="editable"
    />
  </table>
</template>

<script>
import SeTableHeader from './SeTableHeader.vue'
import SeTableRow from './SeTableRow.vue'

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
    editable: Boolean,
    tableHeader: Array,
    tableData: Array
  },

  computed: {
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
      } else if (this.tableData.length > 0) {
        header = Object.keys(this.tableData[0])
      }
      return header
    }
  },

  components: {
    SeTableHeader,
    SeTableRow
  }
  // render (h) {
  //   return (
  //     <table class={this.classObject}>
  //       <SeTableHeader headers={this.headers} />
  //       {
  //         this.tableData.map((cellData, idx) => {
  //           return <SeTableRow cellData={cellData} />
  //         })
  //       }
  //     </table>
  //   )
  // }
}
</script>

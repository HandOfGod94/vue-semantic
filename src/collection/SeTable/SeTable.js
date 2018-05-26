import SeTableHeader from './SeTableHeader'
import SeTableRow from './SeTableRow'

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
      if (this.tableData.length > 0) { header = Object.keys(this.tableData[0]) }
      return header
    }
  },

  render (h) {
    return (
      <table class={this.classObject}>
        <SeTableHeader headers={this.headers} />
        {
          this.tableData.map((cellData, idx) => {
            return <SeTableRow cellData={cellData} />
          })
        }
      </table>
    )
  }
}

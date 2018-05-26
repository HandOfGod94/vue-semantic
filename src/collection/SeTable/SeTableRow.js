import SeTableCell from './SeTableCell'

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
    cellData: [String, Number, Object]
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

  render (h) {
    return (
      <tr class={this.classObject}>
        {
          Object.keys(this.cellData).length > 0 &&
          Object.keys(this.cellData)
            .map((key, idx) => {
              return <SeTableCell {...this.$props} content={this.cellData[key]} />
            })
        }
      </tr>
    )
  }
}

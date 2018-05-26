export default {
  name: 'se-table-cell',
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
    }
  },

  render (h) {
    return (
      <td class={this.classObject} domPropsInnerHTML={this.content}></td>
    )
  }
}

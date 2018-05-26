export default {
  name: 'se-table-header',
  props: {
    fullWidth: Boolean,
    headers: Array
  },

  computed: {
    classObject () {
      return {
        'full-width': this.fullWidth
      }
    }
  },

  render (h) {
    return (
      <thead class={this.classObject}>
        {
          this.headers.map((title, idx) => {
            return (
              <th>{title}</th>
            )
          })
        }
      </thead>
    )
  }
}

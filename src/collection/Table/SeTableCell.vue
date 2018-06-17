<template>
  <td :class="classObject">
    <slot>
      <component :is="currentComponent"
        type="text"
        fluid
        v-model="currentData">
        {{currentData}}
      </component>
    </slot>
  </td>
</template>

<script>
import SeInput from '../../elements/Input/SeInput'
import { createNamespacedHelpers } from 'vuex'
import { SET_TABLE_DATA, UPDATE_TABLE_DATA } from './TableStore'

const { mapState, mapMutations } = createNamespacedHelpers('table')

export default {
  name: 'se-table-cell',

  props: {
    content: [String, Number, Object],
    column: String,
    rowNum: Number,
    positive: Boolean,
    negative: Boolean,
    error: Boolean,
    warning: Boolean,
    active: Boolean,
    disabled: Boolean,
    editable: Boolean,
    align: String
  },

  methods: {
    ...mapMutations({
      setTableData: SET_TABLE_DATA,
      updateTableData: UPDATE_TABLE_DATA
    })
  },

  computed: {

    ...mapState({
      tableData: tableState => tableState.tableData,
      tableMeta: tableState => tableState.tableMeta
    }),

    classObject () {
      return {
        positive: this.positive,
        negative: this.negative,
        error: this.metaError,
        warning: this.metaWarning,
        active: this.active,
        disabled: this.disabled,
        editable: this.metaEditable,
        [`${this.align} aligned`]: this.align
      }
    },

    metaEditable () {
      let isEditable = false
      let val = { [this.column]: this.content }
      if (this.tableMeta) {
        isEditable = this.tableMeta.isEditable(val)
      }
      return isEditable || this.editable
    },

    metaError () {
      let isError = false
      let val = { [this.column]: this.content }
      if (this.tableMeta) {
        isError = this.tableMeta.hasError(val)
      }
      return isError || this.error
    },

    metaWarning () {
      let isWarning = false
      let val = { [this.column]: this.content }
      if (this.tableMeta) {
        isWarning = this.tableMeta.hasWarning(val)
      }
      return isWarning || this.warning
    },

    currentComponent () {
      return this.metaEditable ? 'se-input' : 'span'
    },

    currentData: {
      get () {
        return this.content
      },
      set (value) {
        this.updateTableData({
          rowIdx: this.rowNum,
          colHead: this.column,
          data: value
        })
      }
    }
  },

  components: {
    SeInput
  }
}

</script>

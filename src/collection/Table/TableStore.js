import TableMetadata from '../../meta/TableMetadata'

export const SET_TABLE_DATA = 'SET_TABLE_DATA'
export const SET_TABLE_META = 'SET_TABLE_META'

const state = {
  // the data for table to display
  data: null,

  // table meta for state
  meta: new TableMetadata({
    editableColumns: [],
    colDataType: []
  })
}

const getters = {}

const mutations = {
  /**
   * Sets state.data with passed payload
   * @param state Vuex store state object
   * @param {[]} data Array of data object of table (payload)
   */
  [SET_TABLE_DATA] (state, data) {
    state.data = data
  },

  /**
   * Sets state.meta with passed payload
   * @param state Vuex store state object
   * @param {TableMetadata} meta The meta object for table
   */
  [SET_TABLE_META] (state, meta) {
    state.meta = meta
  }
}

export default {
  state,
  getters,
  mutations
}

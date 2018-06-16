import TableMetadata from '../../meta/TableMetadata'

export const SET_TABLE_DATA = 'SET_TABLE_DATA'
export const SET_TABLE_META = 'SET_TABLE_META'
export const UPDATE_TABLE_DATA = 'UPDATE_TABLE_DATA'

const state = {
  // the data for table to display
  data: [],

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
  },

  /**
   * Updates table data based on index of record and key of the JSON object.
   * Mimics table cell updation similar to excel.
   * @param state Vuex store state object
   * @param {number} rowIdx row index of data to be updated
   * @param {string} colHead column header (key in json object) of the record
   * @param {{}} data data with which you want to update
   */
  [UPDATE_TABLE_DATA] (state, {rowIdx, colHead, data}) {
    state.data[rowIdx][colHead] = data
  }
}

export default {
  state,
  getters,
  mutations
}

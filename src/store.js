import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import TableStore from './collection/Table/TableStore'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    table: {
      namespaced: true,
      ...TableStore
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

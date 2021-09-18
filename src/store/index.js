import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    take: {
      wines: [],
      pr_name: null,
      desk_number: null,
    },
    save: {
      wines: [],
      pr_name: null,
      desk_number: null,
    },
  },
  mutations: {
    setTakePRName(state, value) {
      state.take.pr_name = value
    },
    setTakeDeskNumber(state, value) {
      state.take.desk_number = value
    },
  },
  actions: {
  },
  modules: {
  },
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    service: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_SERVICE (state, service) {
      state.service = service
    }
  },
  actions: {
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    },
    setService ({ commit }, service) {
      commit('SET_SERVICE', service)
    }
  },
  getters: {
    user: (state) => state.user,
    service: (state) => state.service
  }
})

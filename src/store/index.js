import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data in vuex
    currentUser: {
      id: undefined,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  mutations: { // method to mutate state: commit
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser // 透過API取得
      }
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: { // method to get Data via API: dispatch
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: { // other stores; not to write every data in state
  }
})

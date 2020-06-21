import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import wishes from './modules/wishes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  getters: {
    isLoading: state => state.loading
  },
  actions: {
    setLoading({ commit }, loading) {
      commit('SET_LOADING', loading);
    }
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  modules: { auth, wishes }
});

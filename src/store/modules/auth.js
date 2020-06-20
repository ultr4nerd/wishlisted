import authService from '../../services/auth';
import router from '../../router';

const state = {
  user: null,
  token: localStorage.getItem('firebase_token')
};

const getters = {
  isAuthenticated: state => !!state.user,
  user: state => state.user
};

const actions = {
  async login({ dispatch, commit }) {
    dispatch('setLoading', true);
    try {
      const { user, token } = await authService.login();
      commit('SET_USER', user);
      commit('SET_TOKEN', token);
      localStorage.setItem('firebase_token', token);
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch('setLoading', false);
    }
  },
  async logout() {
    try {
      await authService.logout();
      localStorage.removeItem('firebase_token');
      router.push('/');
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  },
  changeAuthState({ commit }, user) {
    commit('SET_USER', user);
    if (!user) {
      commit('SET_TOKEN', null);
    }
  }
};

const mutations = {
  SET_USER(state, user) {
    state.user = user ? user : null;
  },
  SET_TOKEN(state, token) {
    state.token = token ? token : null;
  }
};

export default { state, getters, actions, mutations };

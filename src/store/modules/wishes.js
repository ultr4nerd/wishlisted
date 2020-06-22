import wishesService from '@/services/wishes';
import router from '@/router';

const state = {
  wish: null,
  wishes: [],
  wishUrl: ''
};

const getters = {
  wish: state => state.wish,
  wishes: state => state.wishes,
  wishUrl: state => state.wishUrl
};

const actions = {
  async searchWish({ dispatch, commit }, url) {
    if (url) {
      dispatch('setLoading', true);
      try {
        commit('SET_WISH', null);
        commit('SET_WISH_URL', url);
        const wish = await wishesService.searchWish(url);
        if (!wish.message) {
          commit('SET_WISH', wish);
        } else {
          console.log(wish.message);
        }
      } catch (e) {
        commit('SET_WISH', null);
        commit('SET_WISH_URL', null);
      } finally {
        dispatch('setLoading', false);
      }
    }
  },
  async fetchWishes({ rootState, dispatch, commit }) {
    commit('SET_WISHES', []);
    dispatch('setLoading', true);
    const wishes = await wishesService.getWishes(rootState.auth.user.uid);
    commit('SET_WISHES', wishes);
    dispatch('setLoading', false);
  },
  async createWish({ rootState, state, dispatch, commit }) {
    await wishesService.createWish(state.wish, rootState.auth.user.uid);
    router.push({ name: 'home' });
    commit('SET_WISH', null);
    commit('SET_WISH_URL', null);
    dispatch('fetchWishes');
  },
  async deleteWish({ dispatch }, wishId) {
    await wishesService.deleteWish(wishId);
    dispatch('fetchWishes');
  },
  removeWish({ commit }) {
    commit('SET_WISH', null);
    commit('SET_WISH_URL', null);
  }
};

const mutations = {
  SET_WISH(state, wish) {
    state.wish = wish;
  },
  SET_WISHES(state, wishes) {
    state.wishes = wishes;
  },
  SET_WISH_URL(state, wishUrl) {
    state.wishUrl = wishUrl;
  }
};

export default { state, getters, actions, mutations };

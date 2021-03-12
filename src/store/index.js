import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0,
  },
  getters: {
    n: state => state.number
  },
  mutations: {
    increment(state) {
      state.number++;
    },
    decrement(state) {
      state.number--;
    },
  },
  actions: {},
  modules: {},
});

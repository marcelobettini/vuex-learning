import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0,
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

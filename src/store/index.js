import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0,
    characters: [],
    pagination: [],
    page: 1
  },
  getters: {
    n: (state) => state.number,
  },
  mutations: {
    increment(state) {
      state.number++;
    },
    decrement(state, n) {
      state.number -= n;
    },   
    loadCharacters(state, char) {      
      state.characters = char.results;
      state.pagination = char.info;
    },
  },
  actions: {
    getCharacters: async function({ commit }) {
      const data = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.page}`);
      const char = await data.json();      
      commit('loadCharacters', char )
    },
  },
  modules: {},
});

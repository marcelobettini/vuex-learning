<template>
  <div>
    <!-- accessing mutation: long version -->
    <button
      type="button"
      class="btn btn-success mt-4 mx-1"
      @click="$store.commit('increment')"
    >
      +
    </button>
    <!-- mapMutations shortens this line: @click="$store.commit('decrement')" -->
    <button
      type="button"
      class="btn btn-success mt-4 mx-1"
      @click="decrement(3)"
    >
      -
    </button>
    <div>
      <div>
        <button id="btnFetch"
      type="button"
      class="btn btn-success mt-4 mx-1"
      @click="getCharacters"
    >
      Fetch
    </button>
      </div>
      <ul v-for="item in $store.state.characters" :key="item.id">
        <li>{{item.name.toUpperCase()}} | {{item.species}} | {{item.gender.toUpperCase()}} | {{item.status}}</li>
      </ul>
      {{characters.results}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapState(["number", "characters"]),
    ...mapActions(["getCharacters"]),
    ...mapMutations(["increment", "decrement", "loadCharacters"]),    
  },
};
</script>

<style>
.btn {
  width: 40px;
  font-size: 20px;
  padding: 0px;
}
#btnFetch {
  width: 80px;
}
li {
  list-style-type:none ;
}
</style>

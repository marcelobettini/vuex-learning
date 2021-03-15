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
        <button
          id="btnFetch"
          type="button"
          class="btn btn-success mt-4 mx-1"
          @click="getCharacters"
        >
          Fetch
        </button>
      </div>
      <div class="container d-flex flex-wrap mt-4">
      <ul class="col-6" v-for="item in characters" :key="item.id">
        <li>
          {{ item.name.toUpperCase() }} | {{ item.species }} |
          {{ item.gender.toUpperCase() }} | {{ item.status }}
        </li>
      </ul>
      {{ characters.results }}
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["number", "characters"]),
  },
  methods: {
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
ul {
  background-color:burlywood ;
  border: 1px solid black;
}
li {
  list-style-type: none;
}
</style>

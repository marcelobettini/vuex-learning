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
    <button type="button" class="btn btn-success mt-4 mx-1" @click="decrement(3)">
      -
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"]),
  },
};
</script>

<style>
.btn {
  width: 40px;
  font-size: 20px;
  padding: 0px;
}
</style>

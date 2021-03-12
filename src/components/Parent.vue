<template>
  <div>
    <h5>Number long version: {{ $store.state.number }}</h5>
    <h5>Number (n() + 1) binded to computed prop: {{ n }}</h5>
    <h5>Number with mapState: {{ number }}</h5>
    <h5>Number (n) with getters (defined at index.js): {{ $store.getters.n }}</h5>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    n() {
      return this.$store.state.number + 1;
    },
    ...mapState(["number"]),
  },
};
</script>

<style></style>

<template>
  <div>
    <h4>Number long version: {{ $store.state.number }}</h4>
    <h4>Number binded to computed prop: {{ num }}</h4>
    <h4>Number with mapState: {{ number }}</h4>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    num() {
      return this.$store.state.number;
    },
    ...mapState(["number"]),
  },
};
</script>

<style></style>

<template>
<div>
  <div>
    <h5>Number long version: {{ $store.state.number }}</h5>
    <h5>Number (n() + 1) binded to computed prop: {{ n }}</h5>
    <h5>Number with mapState: {{ number }}</h5>
    <h5>Number (n) with getters (defined at index.js): {{ $store.getters.n }}</h5>
  </div>
  <div>
    <h4>Pagination: {{page}} of {{pagination.pages}} pages</h4>
    <button type="button" @click="prevPage">&lt;&lt;&lt;</button>
    <button type="button" @click="nextPage">&gt;&gt;&gt;</button>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    n() {
      return this.$store.state.number + 1;
    },
    ...mapState(["number", "page", "pagination"]),    
  },  
  methods: {
     nextPage() {
      this.$store.state.page++;
      this.getCharacters()
    },
    prevPage() {
      this.$store.state.page--;
      this.getCharacters()
    },    
    ...mapActions(['getCharacters'])
  }
};
</script>

<style></style>

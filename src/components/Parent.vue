<template>
  <div>
    <div>
      <h5>Number long version: {{ $store.state.number }}</h5>
      <h5>Number (n() + 1) binded to computed prop: {{ n }}</h5>
      <h5>Number with mapState: {{ number }}</h5>
      <h5>
        Number (n) with getters (defined at index.js): {{ $store.getters.n }}
      </h5>
    </div>
    <div>
      <label for="status">Select character's status</label>
      <select v-model="selected" name="status" id="status">
        <option value="all">all</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
      <span>{{ selected }}</span>
    </div>
    <div>
      <h4>Pagination: {{ page }} of {{ pagination.pages }} pages</h4>
      <button type="button" @click="changePage('prev')">&lt;&lt;&lt;</button>
      <button type="button" @click="changePage('next')">&gt;&gt;&gt;</button>
    </div>
    <div>
      <button
        id="btnFetch"
        type="button"
        class="btn btn-success mt-4 mx-1"
        @click="dispatch()"
      >
        Fetch
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      selected: "all",
      payload: null,
    };
  },
  computed: {
    n() {
      return this.$store.state.number + 1;
    },
    ...mapState(["number", "page", "pagination"]),
  },
  methods: {
    ...mapActions(["getCharacters"]),
    dispatch() {
      switch (this.selected) {
        case "all":
          this.payload = `character/?page=${this.page}`;
          break;
        case "alive":
          this.payload = `character/?page=${this.page}&status=${this.selected}`;
          break;
        case "dead":
          this.payload = `character/?page=${this.page}&status=${this.selected}`;
          break;
        case "unknown":
          this.payload = `character/?page=${this.page}&status=${this.selected}`;
          break;
        default:
      }
      this.getCharacters(this.payload);
    },
    changePage(page) {
      if (page == "next") this.$store.state.page++;
      else {
        this.$store.state.page--;
      }
      switch (this.selected) {
        case "all":
          this.payload = `character/?page=${this.page}`;
          break;
        case "alive":
          this.payload = `character/?page=${this.page}&status=${this.selected}`;
          break;
        case "dead":
          this.payload = `character/?page=${this.page}&status=${this.selected}`;
          break;
        case "unknown":
          this.payload = `character/?page=${this.page}&status=${this.selected}`;
          break;
        default:
      }
      this.getCharacters(this.payload);
    },
  },
};
</script>

<style></style>

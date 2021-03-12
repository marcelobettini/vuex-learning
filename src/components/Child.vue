<template>
  <div>
    <button type="button" class="btn btn-success mt-4 mx-1" @click="$store.commit('increment')">+</button>
    <button type="button" class="btn btn-success mt-4 mx-1" @click="$store.commit('decrement')">-</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.btn {
  width: 40px;
  font-size: 20px;
  padding: 0px;
}



</style>
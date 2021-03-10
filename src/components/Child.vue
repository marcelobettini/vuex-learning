<template>
  <div>
    <button type="button" @click="$store.commit('increment')">+</button>
    <button type="button" @click="$store.commit('decrement')">-</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
button, button::before {
  font-size: 20px;
  color: red ;
  background-color: cornsilk;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  margin: 5px;
  border: 1px solid blueviolet;
  border-radius: 10%;
  width: 30px;
  height: 30px;
}


</style>
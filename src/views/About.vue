<template>
  <div class="about">
    <h2>Number is in parent.vue and buttons in child.vue</h2>
    <parent/>
    <child />
  </div>
</template>
<script>
import child from '../components/Child.vue'
import parent from '../components/Parent.vue'
export default {
  components:{parent, child}
  
}
</script>

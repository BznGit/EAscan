<template>
  <td>
  <button @click="vis=!vis">{{ (vis)?'^' : 'v' }}</button>
  <table v-show="vis" >
    
    <tr v-for="(value, name ) in data">
      <td>{{ name }}</td>
      <td>{{ value }}</td>
    </tr>
  </table>
  </td>
</template>

<script setup>
 import {  ref, onMounted } from 'vue';
 const vis = ref(false)
  const props = defineProps({
  data: String
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
bottom {
 align-self: left; 
}
</style>

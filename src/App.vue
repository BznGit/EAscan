<template>
  <router-view />  
</template>
<script setup>
    import axios from 'axios';
    import {  ref, onMounted } from 'vue';
    
    let nodes = ref()
    
    onMounted(()=>{
      axios.get('/nodes').then(res=>nodes.value = res.data)
    })
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

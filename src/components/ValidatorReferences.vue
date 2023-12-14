<template>
  Validators
</template>

<script setup>



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .node {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #1e4db3;
    padding: 10px 10px;
  
    .node-item {
      display: flex;
    }
  
    .info-tabel {
      td {  
        text-align : left;
        
      }
      
    }
    a {
      font-weight: bold;
      color: #2c3e50;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

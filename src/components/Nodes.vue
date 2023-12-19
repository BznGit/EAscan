<template>
  <h1>Nodes</h1>
    <div class="node" v-for="node in nodes" key = "node">
      <tabel class = "info-tabel">
        <tr >
          <td>Node:</td>
          <td>{{ node.node }}</td>
        </tr>
        <tr>
          <td>Pool url:</td>
          <td>{{ node.url }}</td>
        </tr>
        <tr v-for = "(value, name) in node.data.ea" key = "name" >    
          <td >{{ name }}:</td>
          <router-link v-if="name =='topSnapshotHash'" :to="`/snapshot/` + value">{{ value }}</router-link>
          <td v-else>{{ value }}</td>
        </tr>
      </tabel>
      <Chart/>
    </div>
   
  </template>
  <script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import Chart from '@/components/Chart.vue'
    
    let nodes = ref({})
    axios.get('/nodes').then(res=>nodes.value = res.data)


  </script>
  
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
   
  }
  </style>
  
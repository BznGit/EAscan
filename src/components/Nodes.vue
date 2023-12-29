<template>
  <h1>Frea network</h1>

  <div class="node noborder">
<table class = "info-tabel">
<table class = "info-tabel">
  <tr v-for = "(value, name) in inf" key = "name" >    
          <td >{{ name }}:</td>
          <router-link v-if="name =='topSnapshotHash'" :to="`/snapshot/` + value">{{ value }}</router-link>
          <td v-else>{{ value }}</td>
        </tr>
      </table> 
      </table> 
       <div class="chart">
          <Chart :idChart = "45" :data = "chart" :koef = "koef"/>
      </div>  
  </div>
 <h2>Pools</h2>
    <div class="node" v-for="(node, index) in nodes" key = "node">
      <table class = "info-tabel">
      <table class = "info-tabel">
        <tr >
          <td>Node: </td>
          <td><router-link  :to="`/pool/` + node.node.replace(/[\.\/]/g,'-')">{{ node.node }}</router-link></td>
        </tr>
        <tr>
          <td>Pool url: </td>
          <td><a :href ="`http://` + node.url" > {{ node.url }}</a></td>
        </tr>

      </table>
      </table>

    </div>
 
  </template>
  <script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import Chart from '@/components/Chart.vue';
    import { formatHashrate } from "../utils/utils.js";
    
    let nodes = ref({});
    let inf = ref({})
    let chart = ref({});
    let koef = ref()

    axios.get('/nodes').then(res=>{nodes.value = res.data; inf = res.data[0].data.ea })
    axios.get('/chart/day').then(res=>{
      chart.value = res.data.entries.map(item=>{
        return {
          x: new Date(item.sliceTime),
          y: formatHashrate(parseInt(item.hashRate))[0]
        }
      })
      koef = formatHashrate(parseInt(res.data.entries[0].hashRate))[1]
    })

  </script>
  
  <style scoped lang="scss">

  .chart{
    display: flex;
    justify-self: center;
    align-self: center;
    width: 50%;
   
  }

  .node {
    display: flex;
    flex-direction: row;
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
  .noborder{
    border: 0px solid #1e4db3;
  }
  </style>
  
<template>
  <h1>Pool</h1>
  <div class="row">
    <table>
      <tr>
        <td>URL: </td>
        <td>
          <a :href ="`http://` + pool.url" > {{ pool.url }}</a>
        </td>
      </tr>
      <tr class="up" v-for="(value, name ) in pool.data" v-if = "name != 'hourlyChart'">
        <td v-if = "name != '_id'">{{ name }}: </td>
        <td class="up" v-if="name =='miners'">
          <tr v-for = "(value1, name1 ) in value">  
            <td class="up">{{ name1 }}></td>
            <td v-if="name1 =='hr'">
              <tr class="up"  v-for = "(value2, name2) in value1">  
                <td> <router-link class="up" :to="`/miner/` + name2"> {{ name2 }}: </router-link></td>
                <td> {{ value2 }} </td>
              </tr>
            </td> 
            <td v-else>{{ value1 }} </td>
          </tr>
        </td>
        <td v-else-if="name !='_id' && name !='node'">{{ value }}</td>
        
      </tr>
    </table>
    <div class="chart">
      <Chart :idChart = "44"  :data = "chart" :koef = "koef"/>
    </div>
  </div>  
   
</template>
<script setup>
    import axios from 'axios';
    import {  ref  } from 'vue';
    import { useRoute } from 'vue-router';
    import Chart from '@/components/Chart.vue';
    import { formatHashrate } from "../utils/utils.js";

    const route = useRoute();
    const chart = ref([])
    console.log(route.params.ip)
    let pool = ref({})
    let koef = ref()
    axios.get('/pool/' + route.params.ip).then(res=>{
      chart.value = res.data.hourlyChart.map(item=>{
        return {
          x: new Date(item.sliceTime),
          y: formatHashrate((item.sliceWork) * Math.pow(2, 32) / (item.sliceDuration/1000))[0]
        }
    })
    koef = formatHashrate(res.data.dailyChart[0].sliceWork * Math.pow(2, 32)/res.data.hourlyChart[0].sliceDuration/1000)[1]
    pool.value = res.data;
    
  })

</script>
  
<style scoped lang="scss">
  .row{
    display: flex;
    flex-direction: row;
  }
  .chart{
    display: flex;
    justify-self: center;
    align-self: center;
    width: 50%;
   
  }
.up{ 
    vertical-align: top;
 

  }
  table{

    border-collapse: collapse;
    text-align: left;
    vertical-align: top
  }
  td{

  }
  </style>
  
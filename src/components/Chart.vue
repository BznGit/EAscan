<template>
  <Line class="line" ref="lineRef" :data="data" :options="options" />
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
  ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Title,
    Tooltip,
    Legend,
  )
  const lineRef = ref({})
let data = ref({
  labels: [],
  datasets: [
    {
      data: [12],
            label:"Hashrate",
            borderColor: '#0068dd',
            backgroundColor: '#0068dd',
            cubicInterpolationMode: 'monotone',
            pointRadius:0,
            yAxisID: 'left-y-axis',
            hidden: false
    }
  ]
})  
let options = ref({

 interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {  
        verticalLiner: {
          line:{
            dash: [1, 1],
            color: 'red',
            width: 1
          }
        },
        legend: {
          display:false,
          labels: {
            display:true,
            usePointStyle: true,
          },
        },
        tooltip: {
          usePointStyle: true,
          callbacks: {
            labelPointStyle: function(context) {
              return {
                pointStyle: 'circule',
                rotation: 0
            };
            },
            
          },
        },
        
      },
      scales: {
        x: {
          
          time: {
            unit: 'hour',
            displayFormats: {
              minute:'HH:mm',
              hour: 'HH:mm',
              day: 'dd.MM',
              week:'dd.MM.yy',
            }
          },
        },
        'left-y-axis': {

          position: 'left',
          title: {text:"-", display: true},
          min: 0
        },
      }
    },
    
)

axios.get('/chart/hour').then(res=>{data.value.datasets[0].data = res.data.map(item=>{return {x: item.sliceTime, y: parseInt(item.hashRate)}});
})



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

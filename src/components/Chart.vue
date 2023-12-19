<template>
 <h1> Chart</h1>
 {{ chart }}
 <Bar :data="options.data" :options="options.options" />
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

let options = ref( {

      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: true
      }
    }
)
let chart = ref({})
axios.get('/chart/hour').then(res=>chart.value = res.data)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>

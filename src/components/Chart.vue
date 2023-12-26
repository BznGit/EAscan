<template>
 <Line :data="chartData" :options="chartOptions"  :key = "ass"/>
  <canvas  :id="idChart" width="400" height="200"></canvas>
</template>

<script setup>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend } from 'chart.js'
  import { onUpdated, ref, onMounted } from 'vue';
  const props = defineProps({
    idChart: Number,
    from: String, 
    data: Object,
  })
  console.log(props.idChart)

  ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const ass = ref(0)
  const chartData = ref({

    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [12,11,12]
      }
    ]
  })
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
  })

  onMounted(()=>{
   console.log(props.data)
    chartData.value.datasets[0].data = props.data;
    ass.value++
  })
  onUpdated(()=>ass.value++)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

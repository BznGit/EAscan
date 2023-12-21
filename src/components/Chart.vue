<template>

  <canvas  :id="idChart" width="400" height="200"></canvas>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { formatHashrate } from "../utils/utils.js";
const props = defineProps({
  idChart: String
})
console.log(props.idChart)
onMounted(()=>{
 
 const ctx = document.getElementById(props.idChart);
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
            data: '-',
            label:"Hashrate",
            borderColor: '#0068dd',
            backgroundColor: '#0068dd',
            cubicInterpolationMode: 'monotone',
            pointRadius:0,
            yAxisID: 'left-y-axis',
            hidden: false
        },
      ]
    },
    options: {
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {  
        verticalLiner: {
          line:{
            dash: [1, 2],
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
          label: function(tooltipItems) {
            console.log(tooltipItems)
                  var text =  'Hashrate: ' +   + ' '  + formatHashrate(parseInt(tooltipItems.parsed.y))[0]  + formatHashrate(parseInt(tooltipItems.parsed.y))[1];
                    return  text;
            } ,
        },
        
      },
      scales: {
        x: {
          type: 'time',       
          time: {
            unit: 'minute',
            displayFormats: {
              minute:'HH:mm',
              hour: 'HH:mm',
              day: 'dd.MM',
              week:'dd.MM.yy',
            }
          },
        },
        'left-y-axis': {
          type: 'linear',
          position: 'left',
          title: {text:"-",display: true},
          min: 0
        },
      }
    },
    plugins: [{
      id: 'verticalLiner',
      afterInit: (chart, args, opts) => {
        chart.verticalLiner = {}
      },
      afterEvent: (chart, args, options) => {
          const {inChartArea} = args
          chart.verticalLiner = {draw: inChartArea}
      },
      beforeTooltipDraw: (chart, args, options) => {
          const {draw} = chart.verticalLiner
          if (!draw) return
  
          const {ctx} = chart
          const {top, bottom} = chart.chartArea
          const {tooltip} = args
          const x = tooltip?.caretX
          if (!x) return
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(x, top)
          ctx.lineTo(x, bottom)
          ctx.stroke()
          ctx.restore()
      }
  }]

  });
  myChart;
  axios.get('/chart/hour').then(res=>{myChart.data.datasets[0].data = res.data.map(item=>{return {x: item.sliceTime, y: formatHashrate(parseInt(item.sliceWork))[0]}})
  myChart.update()
  });
  
})  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

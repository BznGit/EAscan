import axios from 'axios';
import { formatHashrate } from "../utils/utils.js";
import { route, chart, koef, pool } from './Pool.vue.js';

axios.get('/pool/' + route.params.ip).then(res => {
chart.value = res.data.hourlyChart.map(item => {
//console.log(item.sliceDuration/1000)
return {
x: new Date(item.sliceTime),
y: formatHashrate((item.sliceWork) * 2 ^ 32 / (item.sliceDuration / 1000))[0]
};
});
koef = formatHashrate(res.data.dailyChart[0].sliceWork * Math.pow(2, 32) / res.data.hourlyChart[0].sliceDuration / 1000)[1];
console.log(res.data.dailyChart[0].sliceWork);
console.log(Math.pow(2, 32));
console.log(res.data.hourlyChart[0].sliceDuration);
let ln = res.data.dailyChart.length - 1;
console.log(formatHashrate(parseInt(res.data.dailyChart[ln].sliceWork) * Math.pow(2, 32) / res.data.hourlyChart[ln].sliceDuration));
pool.value = res.data;

});

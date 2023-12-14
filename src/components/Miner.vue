<template>
  <td>
    <table>
      <tr class="up" v-for="(value, name ) in miner">
        <td v-if="name !='_id'">{{ name }}: </td>
        <td class="up" v-if="name =='hr'">
          <tr v-for = "(value1, name1 ) in value">  
            <td class="up">{{ name1 }} >  </td>
            <td v-if="name1 =='workers'">
              <tr v-for = "(value2, name2 ) in value1">  
                <td class="up">{{ name2 }}:  </td>
                <td>{{ value2 }} </td>
              </tr>
            </td>
            <td v-else>{{ value1 }} </td>
          </tr>
        </td>
        <td v-else-if="name !='_id'">{{ value }}</td>
      </tr>
    </table>
  </td>
</template>

<script setup>
  import axios from 'axios';
  import {  ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute()
  let miner = ref()

  onMounted(()=>{
    axios.get('/miner/' + route.params.id).then(res=>miner.value = res.data)
  })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.up{
    
    vertical-align: top
  }
  table{

    border-collapse: collapse;
    text-align: left;
    vertical-align: top
  }
  .node {
     
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

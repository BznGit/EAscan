<template>
  <h1>Miner</h1>
  <h2>{{ miner.miner }}</h2>
    <table>
      <tr class="up" v-for="(value, name ) in miner">
        <td v-if = "name != '_id'">{{ name }}: </td>
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
        <td v-else-if="name !='_id' && name !='node'">{{ value }}</td>
        <router-link v-if = "name =='node'" :to="`/pool/` + value">{{ value }}</router-link>
      </tr>
    </table>
  
</template>

<script setup>
  import axios from 'axios';
  import {  ref,  } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute()
  let miner = ref({})
   axios.get('/miner/' + route.params.id).then(res=>{miner.value = res.data; console.log(res.data)})
  

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
  
</style>

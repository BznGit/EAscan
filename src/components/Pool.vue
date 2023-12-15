<template>
  <h1>Pool</h1>
  
  <table>
      <tr>
        <td>URL: </td>
        <td>
          <a :href ="`http://` + pool.url" > {{ pool.url }}</a>
        </td>
      </tr>
      <tr class="up" v-for="(value, name ) in pool.data">
        <td v-if = "name != '_id'">{{ name }}: </td>
        <td class="up" v-if="name =='miners'">
          <tr v-for = "(value1, name1 ) in value">  
            <td class="up">{{ name1 }} >  </td>
            <td v-if="name1 =='hr'">
              <tr v-for = "(value2, name2 ) in value1">  
                <router-link :to="`/miner/` + name2"> {{ name2 }}</router-link>
                <td>: {{ value2 }} </td>
              </tr>
            </td> 
            <td v-else>{{ value1 }} </td>
          </tr>
        </td>
        <td v-else-if="name !='_id' && name !='node'">{{ value }}</td>
      </tr>
    </table>
 
   
  </template>
  <script setup>
    import axios from 'axios';
    import {  ref  } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    console.log(route.params.ip)
    let pool = ref({})
    axios.get('/pool/' + route.params.ip).then(res=>pool.value = res.data)


  </script>
  
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
  
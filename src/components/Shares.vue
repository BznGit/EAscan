<template>
  <td>
    <button @click = "vis = !vis">{{ (vis)?'^' : 'v' }}</button>
    <table v-show = "vis">
      <tr v-for = "(item, index) in data">
        <td class="up">{{ name }}: {{ index + 1}}</td>
        <td>
          <tr v-for="(value, name) in item">
            <td>{{ name }}: </td>
            <router-link v-if="name =='miner'" :to="`/miner/` + value">{{ value }}</router-link>
            <router-link v-else-if="name =='snapshotHash'" :to="`/snapshot/` + value">{{ value }}</router-link>
            <td v-else-if="name =='transactions'">
              <tr v-for = "item in value">  
                <router-link :to="`/miner/` + item"> {{ item }}</router-link>
              </tr>
            </td>
            <td v-else-if="name =='manifest'">
              <tr v-for = "(value1,  name1) in value">  
                <td>{{ name1 }}: </td>
                <td>{{ value1 }}</td>
              </tr>
            </td>  
            <td v-else>{{ value }}</td>
          </tr>
        </td>
 
      </tr>
    </table>
  </td>
</template>

<script setup>
 import { ref } from 'vue';
 const vis = ref(false)
  const props = defineProps({
  data: String,
  name: String
})

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 td{ 
    vertical-align: top
  }
  table{

    border-collapse: collapse;
    text-align: left;
    vertical-align: top
  }
</style>

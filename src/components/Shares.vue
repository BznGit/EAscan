<template>
  <td>
    <button @click = "vis = !vis">{{ (vis)?'^' : 'v' }}</button>
    <table v-show = "vis">
      <tr v-for = "(item, index) in data">
        <td class="up">{{ name }}: {{ index + 1}}</td>
        <td>
          <tr v-for="(value, name) in item">
            <td>{{ name }}</td>
            <router-link v-if="name =='miner'" :to="`/miner/` + value">{{ value }}</router-link>
            <router-link v-else-if="name =='snapshotHash'" :to="`/snapshot/` + value">{{ value }}</router-link>
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
  .up{
    padding-top: 5px;
    vertical-align: top
  }
</style>

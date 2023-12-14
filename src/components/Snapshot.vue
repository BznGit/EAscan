<template>
  <div class="node">
  <tabel class = "info-tabel">
    <tr  v-for = "(value, name) in snapshots" key = "snapshot">
      <td v-if="name !='_id'">{{ name }}: </td>
      <slot v-if = "name == 'Solution'" ><Solution :data="value"/></slot>
      <slot v-else-if = "name == 'Shares'" ><Shares :data="value" :name ="'Share'"/></slot>
      <slot v-else-if = "name == 'ValidatorReferences'" ><ValidatorReferences :data="value"/></slot>
      <slot v-else-if = "name == 'TotalWork'" ><TotalWork :data="value"/></slot>
      <td v-else-if="name !='_id'">{{ value }}</td>

    </tr>
    
  </tabel>
</div>
</template>

<script setup>
  import axios from 'axios';
  import {  ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  import Solution from '@/components/Solution.vue';
  import Shares from '@/components/Shares.vue';
  import ValidatorReferences from '@/components/ValidatorReferences.vue';
  import TotalWork from '@/components/TotalWork.vue';

  const route = useRoute()
  let snapshots = ref()

  onMounted(()=>{
    axios.get('/snapshot/' + route.params.hash).then(res=>snapshots.value = res.data)
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .node {
    padding: 10px 10px;   
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

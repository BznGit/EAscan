<template>
  <h1>Snapshot </h1>
  <h2>{{ snapshots.snapshotHash }}</h2>
  <div class="node">
    <tabel class = "info-tabel">
      <tr  v-for = "(value, name) in snapshots" key = "snapshot">
        <td v-if="name !='_id'">{{ name }}: </td>
        <router-link v-if="name =='parentSnapshotHash'" :to="`/snapshot/` + value">{{ value }}</router-link>
        <slot v-else-if = "name == 'Solution'" ><Solution :data="value"/></slot>
        <slot v-else-if = "name == 'Shares'" ><Shares :data="value" :name ="'Share'"/></slot>
        <slot v-else-if = "name == 'ValidatorsEntries'" ><Shares :data="value" :name ="'Validators entries'"/></slot>
        <slot v-else-if = "name == 'ValidatorReferences'" ><Shares :data="value" :name ="'Validator reference'"/></slot>
        <slot v-else-if = "name == 'TotalWork'" ><Shares :data="value" :name ="'work'"/></slot>
        
        <td v-else-if="name !='_id'">{{ value }}</td>
      </tr>
    </tabel>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Solution from '@/components/Solution.vue';
  import Shares from '@/components/Shares.vue';

  const route = useRoute()
  let snapshots = ref({})
  axios.get('/snapshot/' + route.params.hash).then(res=>snapshots.value = res.data)
  let hash = ref(route.params.hash)
  watch(route, (url, newUrl)=>{
        console.log('-->',url, route.params.hash)
        axios.get('/snapshot/' + route.params.hash).then(res=>snapshots.value = res.data)
        
      }
      
    )


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .node {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
  
    .node-item {
      display: flex;
    }
  
    .info-tabel {
      td {  
        text-align : left;
      }
    }
  
  }
</style>

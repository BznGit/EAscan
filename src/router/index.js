import { createRouter, createWebHistory } from 'vue-router'
import Nodes from '@/components/Nodes.vue'
import Snapshot from '@/components/Snapshot.vue'
import Miner from '@/components/Miner.vue'
import Pool from '@/components/Pool.vue'

const routes = [
  {
    path: '/',
    name: 'nodes',
    component: Nodes
  },
  {
    path: '/snapshot/:hash',
    name: 'snapshot',
    component: Snapshot,
  }, 
  {
    path: '/miner/:id', 
    component: Miner 
  },
  {
    path: '/pool/:ip', 
    component: Pool 
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

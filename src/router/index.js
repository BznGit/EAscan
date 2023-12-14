import { createRouter, createWebHistory } from 'vue-router'
import Nodes from '@/components/Nodes.vue'
import Snapshot from '@/components/Snapshot.vue'

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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

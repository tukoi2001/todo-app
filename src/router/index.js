import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-task',
    name: 'AddTask',
    component: () => import(/* webpackChunkName: "add-task" */ '../views/AddTask.vue')
  },
  {
    path: '/tasks-done',
    name: 'DoneTasks',
    component: () => import(/* webpackChunkName: "tasks-done" */ '../views/DoneTasks.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

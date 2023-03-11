import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import AboutView from '../views/AboutView.vue'
import ConsulServe from '../views/ConsulServe.vue'
import ListView from '../views/ListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/consulta',
    name: 'consulta',
    component: ConsulServe
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

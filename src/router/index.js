import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import PageNews from '@/pages/PageNews.vue'
import MainTest from '@/pages/MainTest.vue'
import Tabs from '@/pages/Tabs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/:slug',
    name: 'slug',
    component: PageNews
  },
  {
    path: '/test',
    component: MainTest
  },
  {
    path: '/tabs',
    component: Tabs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

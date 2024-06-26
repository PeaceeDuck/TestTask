import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/movie/:id',
      name: 'detail',
      component: Detail,
      meta: { transition: 'fade' },
    }
  ]
})

export default router

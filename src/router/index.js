import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'buttons',
          name: 'buttons',
          component: () => import('../views/ButtonView.vue')
        },
        {
          path: 'icons',
          name: 'icons',
          component: () => import('../views/IconsView.vue')
        }
      ]
    }
  ]
})

export default router

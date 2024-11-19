import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index.vue'),

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue'),

    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact.vue'),

    },
    

  ],
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  {
    path: '/',
    redirect: '/tab1',
  },
  {
    path: '/tab1',
    component: () => import('@/views/Tab1.vue'),
  },
  {
    path: '/tab1/page2',
    component: () => import('@/views/Tab1Page2.vue'),
  },
  {
    path: '/tab2',
    component: () => import('@/views/Tab2.vue'),
  },
  {
    path: '/tab3',
    component: () => import('@/views/Tab3.vue'),

  },
  {
    path: '/tab3/page2',
    component: () => import('@/views/Tab3Page2.vue'),

  },
  {
    path: '/tab4',
    component: () => import('@/views/Tab4.vue'),
  },
  {
    path: '/tab5',
    component: () => import('@/views/Tab5.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
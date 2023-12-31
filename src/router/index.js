// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/Product.vue'),
      },
      {
        path: 'customers',
        name: 'Customers',
        component: () => import('@/views/Customers.vue'),
      },
      {
        path: 'income',
        name: 'Income',
        component: () => import('@/views/Income.vue'),
      },
      {
        path: 'promote',
        name: 'Promote',
        component: () => import('@/views/Promote.vue'),
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('@/views/Help.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

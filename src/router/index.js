import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/CategoryView.vue')
  },
  {
    path: '/category/:id',
    name: 'categoryUpdate ',
    component: () => import(/* webpackChunkName: "categoryUpdate" */ '../views/CategoryUpdate.vue')
  },

  // Para Areas
  {
    path: '/areas',
    name: 'areas',
    component: () => import(/* webpackChunkName: "areas" */ '../views/AreasView.vue')
  },
  {
    path: '/areas/:id',
    name: 'areasUpdate ',
    component: () => import(/* webpackChunkName: "categoryUpdate" */ '../views/AreasUpdate.vue')
  },
  // Para Activos
  {
    path: '/activos',
    name: 'activos',
    component: () => import(/* webpackChunkName: "category" */ '../views/ActivosView.vue')
  },
  {
    path: '/activos/:id',
    name: 'activosUpdate ',
    component: () => import(/* webpackChunkName: "categoryUpdate" */ '../views/ActivosUpdate.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

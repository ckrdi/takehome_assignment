import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/UserLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/UserDashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/UserList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users/add',
    name: 'userAdd',
    component: () => import('../views/UserAdd.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users/:id',
    name: 'userDetail',
    component: () => import('../views/UserDetail.vue'),
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated = localStorage.getItem('token')

    if (isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from '@/modules/auth/router'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
import homeRouter from '@/modules/home/router'

const routes = [
  {
    path:'/',
    redirect: 'home'
  },
  {
  path: '/home',
  name:'home',
  beforeEnter: [isAuthenticatedGuard],
  ...homeRouter,
  },{
    path: '/auth',
    name:'auth',
    ... authRouter
    },
    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
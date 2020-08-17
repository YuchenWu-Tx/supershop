import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Details from '@/views/Details/Details.vue'
import ShopCart from '@/views/ShopCart/ShopCart.vue'
import Profile from '@/views/About/About.vue'
import Help from '@/views/Help/Help.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
    
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  }
  /* {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '@/views/About.vue')
  } */
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home/Home')
const cart = () => import('../views/cart/Cart')
const category = () => import('../views/category/Category')
const profile = () => import('../views/profile/Profile')

Vue.use(Router)

const routes =[
  {
    path:'',
    redirect:'/Home'
  },
  {
    path:'/Home',
    component:home
  },
  {
    path:'/Cart',
    component:cart
  },
  {
    path:'/Category',
    component:category
  },
  {
    path:'/Profile',
    component:profile
  }
]
export default new Router({
  routes,
  mode:'history'
})
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import ParamView from '../views/ParamView.vue'
import FavorisView from '../views/FavorisView.vue'
import AddFavorisView from '../views/AddFavoris.vue'
import LRoutingMachine from '../components/LRoutingMachine.vue'
import Compte from '../views/Compte.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/home',
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
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/param',
    name: 'param',
    component: ParamView
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: FavorisView
  },
  // {
  //   path: '/edit/:id',
  //   name: 'Edit',
  //   component: Edit
  // }
  {
    path: '/addfavoris',
    name: 'addfavoris',
    component: AddFavorisView,
    props: route => ({ datas: route.query.datas })

  },
  {
    path: '/lrouting',
    name: 'lrouting',
    component: LRoutingMachine
  },
  {
    path: '/compte',
    name: 'compte',
    component: Compte
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router

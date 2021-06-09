import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Message = () => import('../views/Message.vue')
const Profile = () => import('../views/Profile.vue')
const Update = () => import('../views/Update.vue')
const Page404 = () => import('../views/Page404.vue')

Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'message', path: '/message', component: Message },
  { name: 'profile', path: '/profile', component: Profile},
  { name: 'update', path: '/update', component: Update},
  { name: 'page404', path: '*', component: Page404 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//     if (to.meta.auth !== 'yes') {
//       next()
//     } else {
//       console.log('Contaktga dostup yuq')
//       next({name: 'about'})
//     }
//   } else {
//     next()
//   } 
// })

export default router

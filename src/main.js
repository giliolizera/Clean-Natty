import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import Maska from 'maska'
// import VueMask from 'v-mask'

const routes = [
   {
      path: '/',
      component: () => import('./components/Site.vue')
   },
   {
      path: '/cadastro-funcionario',
      component: () => import('./components/create/CreateWorker.vue')
   },
   {
      path: '/cadastro-ambiente',
      component: () => import('./components/create/CreateEnvironment.vue')
   },
   {
      path: '/dashboard',
      component: () => import('./components/Dashboard.vue')
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes: routes
})

const Vue = createApp(App)
Vue.use(router)
Vue.use(Maska)
// Vue.use(VueMask)
Vue.mount('#app')

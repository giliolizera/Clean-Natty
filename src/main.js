import { createApp } from 'vue'
import App from './components/views/App.vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import Maska from 'maska'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
// import PortalVue from "kalendar-vue";
// import VueMask from 'v-mask'

const routes = [
   {
      path: '/',
      component: () => import('./components/views/Site.vue')
   },
   {
      path:'/funcionarios',
      component: () => import('./components/index/FuncionarioIndex.vue')
   },
   {
      path: '/cadastro-funcionario',
      component: () => import('./components/create/CreateFuncionario.vue')
   },
   {
      path: '/ambientes',
      component: () => import('./components/index/AmbienteIndex.vue')
   },
   {
      path: '/cadastro-ambiente',
      component: () => import('./components/create/CreateAmbiente.vue')
   },
   {
      path: '/produtos',
      component: () => import('./components/index/ProdutoIndex.vue')
   },
   {
      path: '/cadastro-produto',
      component: () => import('./components/create/CreateProduto.vue')
   },
   {
      path: '/compra-produto',
      component: () => import('./components/pages/CompraProduto.vue')
   },
   {
      path: '/dashboard',
      component: () => import('./components/pages/Dashboard.vue')
   },
   {
      path: '/agenda',
      component: () => import('./components/pages/Agenda.vue')
   },
   {
      path: '/estoque',
      component: () => import('./components/pages/Estoque.vue')
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes: routes
})

const Vue = createApp(App)
Vue.use(router)
Vue.use(Maska)
Vue.use(VCalendar, {})
// Vue.use(VueMask)
// Vue.use(PortalVue)
Vue.mount('#app')

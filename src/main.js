import { createApp } from 'vue'
import App from './components/views/App.vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import Maska from 'maska'
// import Calendar from 'vue-simple-calendar'

const routes = [
   { path: '/', component: () => import('./components/views/Site.vue')},

   { path:'/funcionarios', component: () => import('./components/index/FuncionarioIndex.vue')},

   { path: '/ambientes', component: () => import('./components/index/AmbienteIndex.vue')},
   
   { path: '/produtos', component: () => import('./components/index/ProdutosIndex.vue')},

   { path: '/limpeza', component: () => import('./components/index/LimpezaIndex.vue')},

   { path: '/compra-produto', component: () => import('./components/pages/CompraProdutos.vue')},

   { path: '/dashboard', component: () => import('./components/pages/Dashboard.vue')},

   {path: '/agenda', component: () => import('./components/pages/Agenda.vue')},

]

const router = createRouter({
   history: createWebHistory(),
   routes: routes
})

const Vue = createApp(App)
Vue.use(router)
Vue.use(Maska)
// Vue.use(Calendar)
Vue.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import Maska from 'maska'
// import VueMask from 'v-mask'

// routes
import Site from './components/Site.vue'
import Combobox from './components/Combobox.vue'
import Dialog from './components/Dialog.vue'
import Disclosure from './components/Disclosure.vue'
import Menu from './components/Menu.vue'
import Popover from './components/Popover.vue'
import Radio from './components/Radio.vue'
import Select from './components/Select.vue'
import Tabs from './components/Tabs.vue'
import Cadastro from './components/Cadastro.vue'
import Gpu from './components/Gpu.vue'


const routes = [
   {
      path: '/',
      component: Site,
   },
   {
      path: '/cadastro',
      component: Cadastro
   },
   {
      path: '/combobox',
      component: Combobox
   },
   {
      path: '/dialog',
      component: Dialog
   },
   {
      path: '/disclosure',
      component: Disclosure
   },
   {
      path: '/menu',
      component: Menu
   },
   {
      path: '/popover',
      component: Popover
   },
   {
      path: '/radio',
      component: Radio,
   },
   {
      path: '/gpu',
      component: Gpu
   },
   {
      path: '/select',
      component: Select
   },
   {
      path: '/tabs',
      component: Tabs
   },
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

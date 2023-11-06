<template>
   <div class="">
      <div class="lg:flex bg-gray-200 dark:bg-slate-900">
         <div class="lg:inline-flex justify-start">
            <router-link to="dashboard">
               <button class="text-blue-600 bg-gray-200 dark:bg-slate-900 font-medium text-2xl flex p-4 justify-start">
                  Clean Natty
               </button>
            </router-link>
         </div>
         <div class="justify-end inline-flex">
            <router-link to="dashboard" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Dashboard
               </button>
            </router-link>
            <router-link to="agenda" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Agenda
               </button>
            </router-link>
            <router-link to="funcionarios" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Funcionário
               </button>
            </router-link>
            <router-link to="ambientes" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Ambiente
               </button>
            </router-link>
            <router-link to="/estoque" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Estoque
               </button>
            </router-link>
            <router-link to="/compra-produto" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Compra Produtos
               </button>
            </router-link>
            <div class="ml-2 mt-6">
               <Switch />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Switch from '@/components/usables/Switch.vue'
export default {
   components: {
      Switch
   },
}
</script>



<template>
   <div>
      <div class="flex justify-between p-4 bg-gray-300 dark:bg-slate-900">
         <router-link to="dashboard">
            <button class="text-blue-600 bg-gray-300 dark:bg-slate-900 font-medium text-2xl justify-start">
               Clean Natty
            </button>
         </router-link>
         <button @click.stop="exibir = true">
            <EllipsisVerticalIcon class="h-6 w-6" />
         </button>
      </div>
      <div v-if="exibir" class="fixed inset-0 h-screen w-screen flex justify-end z-40 bg-neutral-500/80">
         <div
            class="fixed top-4 right-4 grid rounded-md w-56 h-max  bg-white text-black font-medium p-4 space-y-3 mr-4 z-50 transform overflow-hidden"
            v-if="exibir">
            <div class="inline-flex justify-between">
               <router-link to="dashboard">
                  <p class="space-x-6">Dashboard</p>
               </router-link>
               <button class="pl-24" @click="exibir = false">
                  <XMarkIcon class="h-4 w-4 text-gray-500" />
               </button>
            </div>
            <router-link to="funcionarios">
               Funcionário
            </router-link>
            <router-link to="ambientes">
               Ambiente
            </router-link>
            <router-link to="/produtos">
               Produtos
            </router-link>
            <router-link to="/limpeza">
               Limpeza
            </router-link>
            <div class="inline-flex">
               Switch Theme
               <Switch class="mt-1 ml-4" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import Switch from '@/components/usables/Switch.vue'

export default {
   data: () => ({
      exibir: false,
   }),
   watch: {
      exibir: function (val) {
         if (val) {
            document.body.style.overflow = 'hidden';
         }
         else {
            document.body.style.overflow = 'auto';
         }
      },
   },
   components: {
      EllipsisVerticalIcon, Switch, XMarkIcon
   },
}
</script>




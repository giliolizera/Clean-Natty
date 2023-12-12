<template>
    <div class="fixed inset-0 w-screen h-screen bg-neutral-500/50 z-40"></div>
       <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white pt-36">
           <TransitionGroup enter-active-class="transition duration-1000 ease-out" enter-from-class="opacity-0"
               enter-to-class="opacity-100" leave-active-class="transition duration-500 ease-in" leave-from-class="opacity-100"
               leave-to-class="opacity-0">
               <div class="absolute top-32 inset-0 w-full h-max max-w-xl transform overflow-hidden rounded-2xl text-left shadow-xl transition-all bg-white mx-auto z-50">
                   <div class="bg-gray-200 dark:bg-slate-700 w-full p-4 font-medium text-lg">
                       Visualização de Limpeza
                   </div>
                   <div class="bg-gray-100 dark:bg-slate-600 divide-y dark:divide-slate-500">
                       <div class="flex p-4">
                           <p class="mr-4 font-semibold">Funcionário:</p>
                           {{ form.funcionario }}
                       </div>
                       <div class="flex p-4">
                           <p class="mr-4 font-semibold">Ambiente:</p>
                           {{ form.ambiente }}
                       </div>
                       <div class="flex p-4">
                           <p class="mr-4 font-semibold">Data:</p>
                           {{ form.data }}
                       </div>
                          <div class="flex p-4">
                            <p class="mr-4 font-semibold">Horário:</p>
                            {{ form.horario }}
                        </div>
                          <div class="flex p-4">
                            <p class="mr-4 font-semibold">Status:</p>
                            {{ form.status }}
                        </div>
                       <div class="flex p-4">
                           <p class="mr-4 font-semibold">Observção:</p>
                           {{ form.observation }}
                       </div>        
                   </div>
                   <div class="flex justify-end p-2 bg-gray-200 dark:bg-slate-700">
                       <button @click="closePreview()" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
                           <XMarkIcon class="w-10 h-10"/>
                           Fechar
                       </button>
                   </div>
               </div>
           </TransitionGroup>
       </div>
</template>

<script>
   import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline"
   import Switch from '@/components/usables/Switch.vue'
   import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline"

   export default {
      props: {
        limpeza: {
            type: Object,
        },
        id: {
            type: Object,
        }
      },
      data: () => ({
         form: {
            id: '',
            funcionario: '',
            ambiente: '',
            data: '',
            horario: '',
            status: '',
            observation: '',
         },
      }),
      created(){
         this.form = this.limpeza[this.id]
      },
      methods: {
         closePreview() {
            this.$emit('closePreview')
            this.form = {}
         },
      },
      components: {
         Switch, EllipsisVerticalIcon, EyeIcon, EyeSlashIcon
      }
   }

</script>
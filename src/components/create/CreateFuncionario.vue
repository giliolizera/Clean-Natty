<script>
   import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline"
   import Switch from '@/components/usables/Switch.vue'
   import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline"

   export default {
      props: {
        funcionario: {
            type: Object,
            default: undefined
        }
      },
      data: () => ({
         form: {
            id: '',
            nome: '',
            email: '',
            telefone: '',
            cpf: '',
            cidade: '',
            endereco: '',
            gestor: '',
            observation: '',
         },
         avançar: false,
         exibir: false,
         exibirCreate: true,
         typePassword: true,
      }),
      methods: {
         trocarRota() {
            this.$emit('trocar-rota', this.form)
            this.form = {}
         },
         salvar(event) {
            this.$emit('criar', this.form)
            this.form = {}
         }
      },
      components: {
         Switch, EllipsisVerticalIcon, EyeIcon, EyeSlashIcon
      }
   }

</script>

<script setup>
   document.title = "Cadastro de Funcionário - Clean Natty"
</script>
                     
<template>
   <div class=" text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <div class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
         <div class="col-span-1 ml-4 mt-2 text-lg font-medium">
            <div class="bg-white dark:bg-slate-800">
               <div class="divide-y max-w-md bg-white dark:bg-slate-800">
                  <p class="font-medium text-xl pb-1">Cadastro de Funcionário</p>
                  <p class="text-base font-thin py-2">Insira os dados do funcionário como nome, cpf, email, número do telefone...</p>
               </div>
            </div>
         </div>
         <form @submit.prevent="salvar" class="col-span-2 grid lg:grid-cols-2 gap-4 pr-6 pl-6 mt-8">
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Nome</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md mt-1 pl-3 p-2"
                  v-model="form.nome">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Email</p><p class="flex text-red-600">*</p>
               </div>
               <input type="email"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.email">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Telefone</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.telefone" v-maska="'(##) #####-####'">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>CPF</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.cpf" v-maska="'###.###.###-##'">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Cidade
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.cidade">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Endereço
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.endereco">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Gestor</p><p class="flex text-red-600">*</p>
               </div>
               <select
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2.5 pl-3 mt-1"
                  v-model="form.gestor"
               >
                  <option disabled>Selecione</option>
                  <option>Rodrigo</option>
                  <option>Matheus</option>
               </select>
            </div>
            <div class="lg:col-span-2  ">
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  Observação
               </div>
               <textarea type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.observation"></textarea>
            </div>
            <div class="flex justify-between lg:col-span-2">
               <div>
                  <button @click.prevent="trocarRota()"
                     class="dark:bg-gray-200 bg-sky-600 text-white max-md:24 dark:text-gray-900 font-medium text-sm py-2 px-6 rounded mt-3">
                     CANCELAR
                  </button>
               </div>
               <div>
                  <button @click.prevent="salvar(), trocarRota()"
                     class="dark:bg-gray-200 bg-sky-600 text-white max-md:24 dark:text-gray-900 font-medium text-sm py-2 px-6 rounded mt-3">
                     ENVIAR
                  </button>
                  <Switch class="absolute bottom-0 hidden" />
               </div>
            </div>
         </form>
      </div>
   </div>
</template>


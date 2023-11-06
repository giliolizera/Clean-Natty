<script>
   import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline"
   import Switch from '@/components/usables/Switch.vue'
   import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline"

   export default {
      data: () => ({
         form: {
            id: '',
            nome: '',
            estabelecimento: '',
            andar: '',
            tipo: '',
            cidade: '',
            endereco: '',
            observation: '',
         },
         avançar: false,
         exibir: false,
         typePassword: true,
      }),
      methods: {
         // validar() {
         //    if (this.form.nome != '' && this.form.email.length > 10 && this.form.telefone.length > 13 && this.form.cpf.length > 13 && this.form.senha.length > 5) {
         //       this.avançar = true
         //    }
         //    else {
         //       this.avançar = false
         //    }
         // },
         trocarRota() {
            // if (this.avançar) {
               this.$router.push('/dashboard')
            // }
            // else {
            //    if (this.form.nome === '' && this.form.email.length < 10 && this.form.telefone.length < 13 && this.form.cpf.length < 13 && this.form.senha.length < 5) {
            //       alert('Preencha todos os campos')
            //    }
            //    else if (this.form.nome === '') {
            //       alert('Preencha o campo nome')
            //    }
            //    else if (this.form.email.length < 10) {
            //       alert('Preencha o campo e-mail corretamente')
            //    }
            //    else if (this.form.telefone.length < 13) {
            //       alert('Preencha o campo telefone corretamente')
            //    }
            //    else if (this.form.cpf.length < 13) {
            //       alert('Preencha o campo cpf corretamente')
            //    }
            //    else if (this.form.senha.length < 5) {
            //       alert('A senha deve conter no mínimo 6 caracteres')
            //    }
            // }
         },
      },
      components: {
         Switch, EllipsisVerticalIcon, EyeIcon, EyeSlashIcon
      }
   }

</script>

<script setup>
   document.title = "Cadastro de Ambiente - Clean Natty"
</script>
                     
<template>
   <div class=" text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <div class="flex justify-between bg-gray-200 dark:bg-slate-900">
         <router-link to="dashboard">
            <button class="text-blue-600 bg-gray-200 dark:bg-slate-900 font-medium text-2xl flex p-4 justify-start">
               Clean Natty
            </button>
         </router-link>
         <button @click="exibir = !exibir">
            <EllipsisVerticalIcon class="h-6 w-6 mr-2" />
         </button>
      </div>
      <div class="flex justify-end bg-gray-200  dark:bg-slate-900 space-x-2" v-if="exibir">
         <p>Dark Mode</p>
         <Switch class="mt-1 ml-4"/>
      </div>
      <div class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
         <div class="col-span-1 ml-4 mt-2 text-lg font-medium">
            <div class="bg-white dark:bg-slate-800">
               <div class="divide-y max-w-md bg-white dark:bg-slate-800">
                  <p class="font-medium text-xl pb-1">Cadastro de Ambiente</p>
                  <p class="text-base font-thin py-2">Insira aqui a descrição do ambiente, como nome, tipo de estabelecimento, andar...</p>
               </div>
            </div>
         </div>
         <form class="col-span-2 grid lg:grid-cols-2 gap-4 pr-6 pl-6 mt-8">
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
                  <p>Estabelecimento</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.estabelecimento">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Andar</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.andar">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Tipo</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.tipo">
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
            <!-- TODO: Possibilidade de interligar um gestor e funcionarios ao ambiente... 
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Gestor
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.gestor">
            </div> -->

            <!-- <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Senha</p><p class="flex text-red-600">*</p>
               </div>
               <div class="relative w-full">
                  <input :type="typePassword ? 'password' : 'text'"
                     class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                     v-model="form.senha">
                  <button class="absolute inset-y-0 right-0 pt-1 pr-3" @click.prevent.stop="typePassword = !typePassword">
                     <EyeIcon v-if="typePassword" class="h-5 w-5 text-neutral-500" />
                     <EyeSlashIcon v-if="!typePassword" class="h-5 w-5 text-neutral-500" />
                  </button>
               </div>
            </div> -->
            <div class="lg:col-span-2">
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  Observação
               </div>
               <textarea type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.observation"></textarea>
            </div>
            <div class="flex justify-end lg:col-span-2">
               <div>
                  <button @click="trocarRota()"
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
